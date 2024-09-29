import { SbImage } from "@/storyblok/types/SbImage";
import NextImage from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

export type TCmsPanoramaImage = {
  blok: {
    image: SbImage;
  };
};

export default function CmsPanoramaImage({
  blok,
  blok: {
    image: { filename },
  },
}: TCmsPanoramaImage) {
  return (
    <div
      data-component="CmsPanoramaImage"
      {...storyblokEditable(blok)}
      className="grid mt-20"
    >
      <NextImage alt="" src={filename} width={1280} height={358} />;
    </div>
  );
}