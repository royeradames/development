import { storyblokEditable } from "@storyblok/js";
import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import { clsx } from "clsx";
import { formatTitleToId } from "@/utils/formatTitleToId";
import { cn } from "@/lib/utils";

export type TCmsInsideGrid = {
  blok: {
    title?: string;
    items: SbBlokData[];
    appearance: "dark" | "light" | "auto";
  };
};

/**
 * The premade grid for HighlightBlock
 */
export function CmsInsightsGrid({
  blok,
  blok: { items, title = "", appearance = "light" },
}: TCmsInsideGrid) {
  const Comp = title ? "section" : "div";
  const headingId = formatTitleToId(title);
  return (
    <Comp
      aria-labelledby={Comp === "section" ? headingId : undefined}
      {...storyblokEditable(blok)}
      data-component="highlight-block-grid"
      className={cn("py-12 lg:px-12 flex justify-center", {
        "bg-black": appearance === "dark",
        "bg-white": appearance === "light",
        "bg-white dark:bg-black": appearance === "auto",
      })}
    >
      <div className="flex flex-col gap-10 max-w-screen-xl">
        {title ? (
          <h2
            id={headingId}
            className={cn("pl-10", {
              "text-black": appearance === "light",
              "text-white": appearance === "dark",
              "dark:text-white text-black": appearance === "auto",
            })}
          >
            {title}
          </h2>
        ) : undefined}
        <div
          className={clsx("grid justify-center", {
            "md:grid-cols-12 gap-8": items.length === 1,
            "md:grid-cols-2 gap-8": items.length === 2,
            "md:grid-cols-2 lg:grid-cols-4 gap-8": items.length >= 3,
          })}
        >
          {items.map((item) => {
            const singleItemLayout =
              items.length === 1 ? " md:col-start-5 md:col-span-8" : "";
            return (
              <StoryblokComponent
                blok={item}
                key={item._uid}
                headingAs={title ? "h3" : "h2"}
                className={singleItemLayout}
                appearance={appearance}
              />
            );
          })}
        </div>
      </div>
    </Comp>
  );
}
