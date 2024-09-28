import { SbImage } from "@/storyblok/types/SbImage";
import { storyblokEditable } from "@storyblok/react/rsc";

export type TCmsGallery = {
  blok: {
    image?: SbImage;
    title?: string;
    body?: string;
  };
};

export function CmsGalleryItem({
  blok,
  blok: { title = "Shoes", body, image },
}: TCmsGallery) {
  return (
    <div
      className="bg-[#222424] text-white box-border p-4 pt-6 pb-8"
      {...storyblokEditable(blok)}
    >
      <h3 className="mt-4 mb-2 font-avenir text-lg font-semibold leading-tight no-underline text-white">
        Mobile Applications
      </h3>
      <p className="text-white box-border mt-2 mb-5 gap-8 justify-between font-sans text-[0.9em] font-normal leading-7">
        iOS. Android. Cross-platform frameworks. We’ve been building for mobile
        since the first iPhone.
      </p>
    </div>
  );
}
