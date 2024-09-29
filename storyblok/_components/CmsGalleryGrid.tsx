import { SbBlokData } from "@storyblok/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

export type TCmsGalleryGrid = {
  blok: {
    title?: string;
    items: SbBlokData[];
  };
};

export function CmsGalleryGrid({
  blok,
  blok: { title, items },
}: TCmsGalleryGrid) {
  const Section = title ? "section" : "div";
  return (
    <Section
      className="mt-20 px-4 lg:px-0 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
      {...storyblokEditable(blok)}
    >
      {title ? (
        <h2 className="text-5xl font-bold col-span-full">{title}</h2>
      ) : undefined}
      {items.map((item) => {
        return <StoryblokComponent blok={item} key={item._uid} />;
      })}
    </Section>
  );
}
