import Link from "next/link";
import { SbLink } from "@/storyblok/types/SbLink";
import { storyblokEditable } from "@storyblok/react/rsc";

type TCmsShadowCardGalleryGridItem = {
  blok: {
    headingAs: "h2" | "h3";
    title: string;
    subtitle: string;
    destination: SbLink;
    author: string;
  };
};

export function CmsShadowCardGalleryGridItem({
  blok,
  blok: {
    headingAs: Heading,
    title,
    subtitle,
    destination: { url, target },
    author,
  },
}: TCmsShadowCardGalleryGridItem) {
  return (
    <section className="shadow-xl p-8" {...storyblokEditable(blok)}>
      <hgroup className="flex gap-4 flex-col">
        <Heading className="flex gap-4 flex-col">
          <div className="uppercase text-base">{subtitle}</div>
          <Link
            href={url}
            target={target}
            className="text-5xl text-black hover:underline"
          >
            {title}
          </Link>
        </Heading>
        <p className="text-base text-gray-500">{author}</p>
      </hgroup>
      <Link
        href={url}
        target={target}
        className="text-[#1abba9] text-base hover:underline"
      >
        Learn More
      </Link>
    </section>
  );
}
