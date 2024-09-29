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
    /** not a fan of xl:
     * xl is coming from the pg, so the page can take over the white space
     */
    <Section
      className="px-4 xl:px-0 flex flex-col gap-4 mt-20"
      {...storyblokEditable(blok)}
    >
      {title ? <h2 className="text-5xl font-bold">{title}</h2> : undefined}
      <div className="flex gap-4 flex-wrap justify-center">
        {items.map((item) => {
          return <StoryblokComponent blok={item} key={item._uid} />;
        })}
      </div>
    </Section>
  );
}
