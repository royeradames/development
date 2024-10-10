import Link from "next/link";
import { SbLink } from "@/storyblok/types/SbLink";
import { storyblokEditable } from "@storyblok/react/rsc";
import { TCmsInsideGrid } from "@/storyblok/_components/CmsInsightsGrid";
import { cn } from "@/lib/utils";

type TCmsShadowCardGalleryGridItem = {
  blok: {
    title: string;
    subtitle: string;
    destination: SbLink;
    author: string;
  };
  headingAs: "h2" | "h3";
  appearance: TCmsInsideGrid["blok"]["appearance"];
};

export function InsidesGridItemCms({
  blok,
  blok: {
    title = "",
    subtitle = "",
    destination: { url = "", target = "" },
    author = "",
  },
  headingAs: Heading = "h2",
  appearance = "light",
}: TCmsShadowCardGalleryGridItem) {
  return (
    <section
      className={cn("shadow-xl p-8 bg-white", {
        "bg-[#222424]": appearance === "dark",
        "bg-white": appearance === "light",
        "bg-white dark:bg-[#222424]": appearance === "auto",
      })}
      {...storyblokEditable(blok)}
    >
      <hgroup className="flex gap-4 flex-col">
        <Heading
          className={cn("flex gap-4 flex-col", {
            "text-black": appearance === "light",
            "text-white": appearance === "dark",
            "dark:text-white text-black": appearance === "auto",
          })}
        >
          <div className="uppercase text-base">{subtitle}</div>
          <Link
            href={url}
            target={target}
            className="text-4xl sm:text-5xl md:text-3xl lg:text-lg hover:underline"
          >
            {title}
          </Link>
        </Heading>
        <p
          className={cn("text-base ", {
            "text-gray-500": appearance === "light",
            "text-white": appearance === "dark",
            "dark:text-white text-gray-500": appearance === "auto",
          })}
        >
          {author}
        </p>
      </hgroup>
      <Link
        href={url}
        target={target}
        className="text-[#1abba9] text-base hover:underline"
      >
        Learn More
      </Link>
    </section>
  );
}
