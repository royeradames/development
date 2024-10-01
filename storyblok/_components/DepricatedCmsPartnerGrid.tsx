import { SbBlokData } from "@storyblok/react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { clsx } from "clsx";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";

export type TCmsPartnerGrid = {
  blok: {
    title?: string;
    items: SbBlokData[];
    isDarkMode: boolean;
  };
};

export function DepricatedCmsPartnerGrid({
  blok,
  blok: { title, items, isDarkMode = true },
}: TCmsPartnerGrid) {
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
        className={clsx(
          "max-w-7xl mx-auto gap-6 py-20 px-4 xl:px-0 grid grid-cols-2 lg:grid-cols-4",
          {
            "bg-white": !isDarkMode,
            "bg-black": isDarkMode,
          },
        )}
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
