import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

import readingTime from "reading-time";
import { visit } from "unist-util-visit";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: false },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
  computedFields,
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "project/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true },
    tag: { type: "string", required: true },
  },
  computedFields,
}));

// div.BLOCK > pre.PRE > code.CODE
const BLOCK = "overflow-hidden rounded-lg leading-6 shadow-lg mb-5";
const TITLE =
  "rounded-t-md bg-zinc-200 dark:bg-[#23272e] px-3 py-1 font-mono text-xs dark:!text-white/70 !text-black/70";
const PRE = "overflow-x-auto py-2 text-[13px] bg-zinc-100 dark:bg-[#23272e]";
const CODE =
  "grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3";
const INLINE_BLOCK =
  "whitespace-nowrap border border-indigo-200 dark:border-indigo-400/10 px-1.5 py-px text-[12px] rounded-full bg-white/5 whitespace-nowrap text-indigo-500 dark:text-indigo-200/80";
const INLINE_CODE = "";
const NUMBERED_LINES =
  "[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-white/20 before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line]";

const HIGHLIGHTED_LINE =
  "!border-l-indigo-800/70 bg-indigo-200/50 dark:!border-l-cyan-300/70 dark:bg-cyan-200/10 before:!text-indigo-700 dark:before:!text-white/70";

function transformer(tree: any) {
  visit(
    tree,
    (node: any) =>
      Boolean(
        node.tagName === "code" &&
          Object.keys(node.properties).length === 0 &&
          node.children.some((n: any) => n.type === "text")
      ),
    (node: any) => {
      const textNode = node.children.find((n: any) => n.type === "text");
      textNode.type = "element";
      textNode.tagName = "code";
      textNode.properties = { className: [INLINE_CODE] };
      textNode.children = [{ type: "text", value: textNode.value }];
      node.properties.className = [INLINE_BLOCK];
      node.tagName = "span";
    }
  );

  visit(
    tree,
    (node: any) =>
      Boolean(
        typeof node?.properties?.["data-rehype-pretty-code-fragment"] !==
          "undefined"
      ),
    (node: any) => {
      if (node.tagName === "span") {
        node.properties.className = [
          ...(node.properties.className || []),
          INLINE_BLOCK,
        ];
        node.children[0].properties.className = [
          ...(node.children[0].properties.className || []),
          INLINE_CODE,
        ];

        return node;
      }

      if (node.tagName === "div") {
        node.properties.className = [
          ...(node.properties.className || []),
          BLOCK,
        ];
        node.children = node.children.map((node: any) => {
          if (
            node.tagName === "div" &&
            typeof node.properties?.["data-rehype-pretty-code-title"] !==
              "undefined"
          ) {
            node.properties.className = [
              ...(node.properties.className || []),
              TITLE,
            ];
          }
          if (node.tagName === "pre") {
            node.properties.className = [PRE];
            if (node.children[0].tagName === "code") {
              node.children[0].properties.className = [
                ...(node.children[0].properties.className || []),
                CODE,
              ];
              if (
                typeof node.children[0].properties["data-line-numbers"] !==
                "undefined"
              ) {
                node.children[0].properties.className.push(NUMBERED_LINES);
              }
            }
          }

          return node;
        });

        return node;
      }
    }
  );
}

function rehypePrettyCodeClasses() {
  return transformer;
}

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: "one-dark-pro",
    light: "min-light",
  },
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className = [""];
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push(HIGHLIGHTED_LINE);
  },
};

const contentLayerConfig = makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
    ],
  },
});

export default contentLayerConfig;
