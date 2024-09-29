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
      className="max-w-7xl mx-auto gap-6 mt-20 px-4 xl:px-0 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      {...storyblokEditable(blok)}
    >
      {title ? (
        <h2 className="text-5xl font-bold col-span-full mb-10">{title}</h2>
      ) : undefined}
      {items.map((item) => {
        return <StoryblokComponent blok={item} key={item._uid} />;
      })}
    </Section>
  );
}
