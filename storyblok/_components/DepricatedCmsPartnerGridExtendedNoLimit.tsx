import { SbBlokData } from "@storyblok/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { clsx } from "clsx";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";

export type TCmsPartnerGridExtended = {
  blok: {
    title?: string;
    items: SbBlokData[];
    isDarkMode: boolean;
    layout: "ascending" | "odds";
  };
};

export function DepricatedCmsPartnerGridExtendedNoLimit({
  blok,
  blok: { title, items, isDarkMode = true, layout = "ascending" },
}: TCmsPartnerGridExtended) {
  const Section = title ? "section" : "div";
  return (
    <Section
      className={clsx("", {
        "bg-white": !isDarkMode,
        "bg-black": isDarkMode,
      })}
      aria-labelledby={title ? formatTitleToId(title) : undefined}
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
