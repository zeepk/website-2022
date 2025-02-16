import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="container max-w-3xl mx-auto text-sm">
      <section className="grid grid-cols-2 gap-4 p-4 border-t dark:border-white/20 border-black/10 mb:10 sm:mb-20 md:grid-cols-3 sm:grid-cols-2 place-items-center">
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="https://www.linkedin.com/in/railly-hugo" external>
          LinkedIn
        </FooterLink>
        <FooterLink to="/stack">Stack</FooterLink>
        <FooterLink to="/portfolio">Portfolio</FooterLink>
        <FooterLink to="https://www.github.com/Railly" external>
          Github
        </FooterLink>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/blog">Blog</FooterLink>
        <FooterLink to="https://www.twitter.com/RaillyHugo" external>
          Twitter
        </FooterLink>
      </section>
    </footer>
  );
}
