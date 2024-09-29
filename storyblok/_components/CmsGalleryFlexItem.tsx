import { SbImage } from "@/storyblok/types/SbImage";
import { storyblokEditable } from "@storyblok/react/rsc";

export type TCmsGalleryFlexItem = {
  blok: {
    image?: SbImage;
    title?: string;
    body?: string;
  };
};

export function CmsGalleryFlexItem({
  blok,
  blok: { title = "Shoes", body, image },
}: TCmsGalleryFlexItem) {
  return (
    <div
      className="bg-[#222424] text-white box-border p-4 pt-6 pb-8 flex-grow basis-[250px] flex-shrink-0 max-w-[600px]"
      {...storyblokEditable(blok)}
    >
      <h3 className="mt-4 mb-2 font-avenir font-semibold leading-tight no-underline text-white text-2xl">
        Mobile Applications
      </h3>
      <p className="text-white box-border mt-2 mb-5 gap-8 justify-between font-sans text-base font-normal leading-7">
        iOS. Android. Cross-platform frameworks. We’ve been building for mobile
        since the first iPhone.
      </p>
    </div>
  );
}
