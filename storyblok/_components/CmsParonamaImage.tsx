import { SbImage } from "@/storyblok/types/SbImage";
import NextImage from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";

export type TCmsPanoramaImage = {
  blok: {
    title: string;
    image: SbImage;
  };
};

export default function CmsPanoramaImage({
  blok,
  blok: {
    title,
    image: { alt, filename },
  },
}: TCmsPanoramaImage) {
  return (
    <section
      {...storyblokEditable(blok)}
      aria-label={formatTitleToId(title)}
      className="grid mt-20"
    >
      <NextImage alt="" src={filename} width={1280} height={358} />;
    </section>
  );
}
