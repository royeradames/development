import { SbBlokData } from "@storyblok/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

export type TCmsGalleryFlex = {
  blok: {
    title?: string;
    items: SbBlokData[];
  };
};

export function CmsGalleryFlex({
  blok,
  blok: { title, items },
}: TCmsGalleryFlex) {
  const Section = title ? "section" : "div";
  return (
    <Section
      className="px-4 xl:px-0 flex flex-col gap-4 mt-20 max-w-7xl mx-auto"
      {...storyblokEditable(blok)}
    >
      {title ? (
        <h2 className="text-5xl font-bold mb-10">{title}</h2>
      ) : undefined}
      <div className="flex gap-6 flex-wrap justify-center">
        {items.map((item) => {
          return <StoryblokComponent blok={item} key={item._uid} />;
        })}
      </div>
    </Section>
  );
}
