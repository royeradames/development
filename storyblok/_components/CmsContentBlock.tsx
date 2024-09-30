import { SbBlokData } from "@storyblok/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

export type TCmsContentBlock = {
  blok: {
    title: string;
    content: string;
    /**
     * CMSGalleryItems
     */
    items?: SbBlokData[];
  };
};

export default function CmsContentBlock({
  blok,
  blok: { title, content, items },
}: TCmsContentBlock) {
  return (
    <article
      className="max-w-7xl mx-auto mt-20 px-4 xl:px-0 flex flex-col gap-6"
      {...storyblokEditable(blok)}
    >
      <div className="flex gap-6 justify-around">
        <h2 className="mt-4 col-span-3 text-xl font-bold text-white min-w-max">
          {title}
        </h2>
        <p className="text-white text-base col-span-2">{content}</p>
      </div>
      {items ? (
        <div className="grid md:grid-cols-3 gap-10 w-full">
          {items.map((item) => {
            return <StoryblokComponent blok={item} key={item._uid} />;
          })}
        </div>
      ) : undefined}
    </article>
  );
}
