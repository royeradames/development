import { SbImage } from "@/storyblok/types/SbImage";
import { storyblokEditable } from "@storyblok/react/rsc";
import NextImage from "next/image";

export type TCmsGallery = {
  blok: {
    image?: SbImage;
    title?: string;
    body?: string;
  };
};

export function CmsGalleryItem({
  blok,
  blok: {
    title,
    body,
    image: { filename },
  },
}: TCmsGallery) {
  return (
    <div
      className="bg-[#222424] text-white box-border p-4 pt-6 pb-8"
      {...storyblokEditable(blok)}
    >
      {filename ? (
        <NextImage src={filename} alt="" height={32} width={32} />
      ) : undefined}
      <h3 className="mt-4 mb-2 font-avenir font-semibold leading-tight no-underline text-white text-2xl">
        {title}
      </h3>
      <p className="text-white box-border mt-2 mb-5 gap-8 justify-between font-sans text-base font-normal leading-7">
        {body}
      </p>
    </div>
  );
}
