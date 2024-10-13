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

export function CmsContentBlock({
  blok,
  blok: { title, content, items },
}: TCmsContentBlock) {
  return (
    <section
      className="w-full pt-20 px-4 xl:px-0 bg-black flex justify-center"
      data-component="CmsContentBlock"
      {...storyblokEditable(blok)}
    >
      <div className="max-w-7xl flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-6 justify-around">
          <h2 className="mt-4 col-span-3 text-xl font-bold text-white">
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
      </div>
    </section>
  );
}
