import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";

export type TFullBleedCarousel = {
  blok: {
    title?: string;
    items: SbBlokData[];
  };
};

export function CmsFullBleedCarousel({
  blok,
  blok: { title = "", items },
}: TFullBleedCarousel) {
  return (
    <section
      className="py-20 bg-white flex flex-col gap-6 w-full"
      {...storyblokEditable(blok)}
    >
      {title ? (
        <h2 className="text-5xl font-bold text-black px-4 xl:px-0 max-w-lg mx-auto">
          {title}
        </h2>
      ) : undefined}

      <div className="carousel carousel-center w-full pb-4 space-x-4">
        {items.map((item, index) => {
          return (
            <div className="carousel-item">
              <StoryblokComponent
                id={`slide${index + 1}`}
                blok={item}
                key={item._uid}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
