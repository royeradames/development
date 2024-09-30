import { cn } from "@/utils/cn";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link, { default as NextLink } from "next/link";
import {
  MARK_ANCHOR,
  MARK_BOLD,
  MARK_CODE,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_LINK,
  MARK_STRIKE,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  NODE_BR,
  NODE_CODEBLOCK,
  NODE_HEADING,
  NODE_HR,
  NODE_LI,
  NODE_OL,
  NODE_PARAGRAPH,
  NODE_QUOTE,
  NODE_UL,
  render,
} from "storyblok-rich-text-react-renderer";
import { Heading } from "@/components/Heading";

type linkResolverType = {
  children: string;
  props: {
    linktype: string;
    href: string;
    target: string;
    anchor?: string;
    uuid?: string;
    custom?: string;
  };
};

// -----------------------------------------------------------[LinkResolver]

const linkStyles = cn(
  "inline-flex items-center gap-1 text-brand hover:text-blue-dark underline underline-offset-2 transition-all duration-200 tracking-wide font-bold ring-offset-blue-dark",
);

const linkResolver = ({ children, props }: linkResolverType) => {
  const { linktype, href, target, anchor, uuid } = props;

  if (linktype === "email") {
    // Email links: add `mailto:` scheme and map to <a>
    return (
      <Link href={`mailto:${href}`} id={uuid} className={linkStyles}>
        {children}
      </Link>
    );
  }
  if (href.match(/^(https?:)?\/\//)) {
    // External links: map to <a>

    const linkTargetBlank = target === "_blank" && {
      target: "_blank",
      rel: "noopener noreferrer",
    };

    return (
      <a href={href} id={uuid} className={linkStyles} {...linkTargetBlank}>
        {children}
        {/*{target === "_blank" && (*/}
        {/*  <Icon*/}
        {/*    name="ExternalLink"*/}
        {/*    size="md"*/}
        {/*    className="inline stroke-3"*/}
        {/*    data-testid="ext-icon"*/}
        {/*  />*/}
        {/*)}*/}
      </a>
    );
  }
  if (anchor) {
    return (
      <Link href={anchor} id={uuid} className={linkStyles}>
        {children}
      </Link>
    );
  }
  // Internal links: map to <Link>
  return (
    <NextLink href={href} id={uuid} className={linkStyles}>
      {children}
    </NextLink>
  );
};

export function CmsRichtext(props: any) {
  const resolvers = {
    markResolvers: {
      [MARK_BOLD]: (children: string) => (
        <strong className="font-bold">{children}</strong>
      ),
      [MARK_ITALIC]: (children: string) => (
        <em className="italic">{children}</em>
      ),
      [MARK_STRIKE]: (children: string) => (
        <s className="line-through">{children}</s>
      ),
      [MARK_UNDERLINE]: (children: string) => (
        <u className="underline underline-offset-4 decoration-gray-600">
          {children}
        </u>
      ),
      [MARK_CODE]: (children: string) => (
        <code className="bg-gray-200 px-2 rounded-sm py-1">{children}</code>
      ),
      [MARK_LINK]: (children: string, props: any) => {
        return linkResolver({ children, props });
      },
      [MARK_HIGHLIGHT]: (children: string) => (
        <mark className="bg-orange-lighter">{children}</mark>
      ),
      [MARK_SUPERSCRIPT]: (children: string) => (
        <sup className="text-base align-baseline top-auto">{children}</sup>
      ),
      [MARK_SUBSCRIPT]: (children: string) => (
        <sub className="text-base align-baseline bottom-auto">{children}</sub>
      ),
      [MARK_ANCHOR]: (children: string, { id }: any) => <a>{children}</a>,
    },
    nodeResolvers: {
      [NODE_HEADING]: (children: string, { level }: any) => {
        let headingAs: "h1" | "h2" | "h3" | "h4" | "h5" = "h2";
        switch (level) {
          case 1:
            headingAs = "h2";
            break;
          case 2:
            headingAs = "h2";
            break;
          case 3:
            headingAs = "h3";
            break;
          case 4:
            headingAs = "h4";
            break;
          case 5:
            headingAs = "h4";
            break;
          case 6:
            headingAs = "h4";
            break;
          default:
            headingAs = "h2";
            break;
        }
        return <Heading as={headingAs}>{children}</Heading>;
      },
      [NODE_CODEBLOCK]: (
        children: string,
        { class: lang }: { class: string },
      ) => {
        return (
          <pre>
            <code>{children}</code>
          </pre>
        );
      },
      [NODE_PARAGRAPH]: (children: any) => <p>{children}</p>,
      [NODE_UL]: (children: any) => <ul>{children}</ul>,
      [NODE_OL]: (children: any) => <ol>{children}</ol>,
      [NODE_LI]: (children: any) => <li>{children}</li>,
      [NODE_HR]: () => <hr />,
      [NODE_QUOTE]: (children: any) => <blockquote>{children}</blockquote>,
      [NODE_BR]: () => <br />,
    },
    defaultBlokResolver: (name: string, props: any) => (
      <div>
        <code>Missing blok resolver for blok type "{name}".</code>
        <pre>
          <code>{JSON.stringify(props, undefined, 2)}</code>
        </pre>
      </div>
    ),
  };

  return (
    <div
      data-c="CmsRichtext"
      className="flex flex-col gap-4"
      {...storyblokEditable(props.blok)}
    >
      {render(props?.blok?.content, resolvers)}
    </div>
  );
}
