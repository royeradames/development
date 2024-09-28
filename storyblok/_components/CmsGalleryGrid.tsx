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
      className="grid grid-rows-2 grid-flow-auto"
      {...storyblokEditable(blok)}
    >
      {title ? <h2 className="text-5xl font-bold">{title}</h2> : undefined}
      <div className="grid grid-cols-1 grid-rows-auto gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {items.map((item) => {
          return <StoryblokComponent blok={item} key={item._uid} />;
        })}
      </div>
    </Section>
  );
}
