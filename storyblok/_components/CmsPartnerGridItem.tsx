import { SbImage } from "@/storyblok/types/SbImage";
import { storyblokEditable } from "@storyblok/react/rsc";
import { TCmsGalleryGrid } from "@/storyblok/_components/CmsGalleryGrid";
import { clsx } from "clsx";

export type TCmsPartnerGridItem = {
  blok: {
    image: SbImage;
  };
  isDarkMode: TCmsGalleryGrid["blok"]["isDarkMode"];
};

export function CmsPartnerGridItem({
  blok,
  blok: {
    image: { filename },
  },
  isDarkMode,
}: TCmsPartnerGridItem) {
  return (
    <div
      className={clsx("", {
        "bg-[#f4f4f4]": !isDarkMode,
        "bg-[#222424]": isDarkMode,
      })}
      {...storyblokEditable(blok)}
    >
      <img
        className={clsx("w-full", {
          "filter invert": isDarkMode,
        })}
        alt=""
        src={filename}
      />
    </div>
  );
}
