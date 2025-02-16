import Link from "next/link";
import Image from "next/image";
import Md from "components/Markdown";

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return (
    <a
      className="font-bold text-blue-400 underline transition underline-offset-2 hover:text-blue-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </a>
  );
};

function RoundedImage(props: any) {
  return (
    <div className="rounded-lg shadow-xl">
      <Image
        className="rounded-lg shadow-xl"
        blurDataURL={props.src}
        placeholder="blur"
        alt={props.alt}
        {...props}
      />
    </div>
  );
}

const MDXComponents = {
  Anchor: Md.Anchor,
  Image: RoundedImage,
  a: CustomLink,
  hr: Md.Hr,
  blockquote: Md.Quote,
  h1: Md.Heading.H1,
  h2: Md.Heading.H2,
  h3: Md.Heading.H3,
  li: Md.List.Li,
  ol: Md.List.Ol,
  p: Md.Text,
  strong: Md.Strong,
  table: Md.Table,
  td: Md.TableCell,
  th: (props: any) => <Md.TableCell bold {...props} />,
  tr: Md.TableRow,
  ul: Md.List.Ul,
};

export default MDXComponents;
