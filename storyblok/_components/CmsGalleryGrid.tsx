import { SbBlokData } from "@storyblok/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { clsx } from "clsx";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";

export type TCmsGalleryGrid = {
  blok: {
    title?: string;
    items: SbBlokData[];
    /**
     * Manual contrast of the component
     * Can be changed to style
     */
    isDarkMode: boolean;
    /**
     * determines how many columns out of 4.
     */
    layout: "ascending" | "odds";
  };
};

export function CmsGalleryGrid({
  blok,
  blok: { title, items, isDarkMode = true, layout = "ascending" },
}: TCmsGalleryGrid) {
  const Section = title ? "section" : "div";
  const headingId = title ? formatTitleToId(title) : "";
  return (
    <Section
      className={clsx("", {
        "bg-white": !isDarkMode,
        "bg-black": isDarkMode,
      })}
      aria-labelledby={title ? headingId : undefined}
      {...storyblokEditable(blok)}
    >
      <div
        className={clsx("max-w-7xl mx-auto gap-6 py-20 px-4 xl:px-0 grid ", {
          "bg-white": !isDarkMode,
          "bg-black": isDarkMode,
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":
            layout === "ascending",
          "grid-cols-2 lg:grid-cols-4": layout === "odds",
        })}
      >
        {title ? (
          <h2
            id={headingId}
            className={clsx("text-5xl font-bold col-span-full mb-10", {
              "text-white": isDarkMode,
              "text-black": !isDarkMode,
            })}
          >
            {title}
          </h2>
        ) : undefined}
        {items.map((item) => {
          return (
            <StoryblokComponent
              isDarkMode={isDarkMode}
              blok={item}
              key={item._uid}
            />
          );
        })}
      </div>
    </Section>
  );
}
