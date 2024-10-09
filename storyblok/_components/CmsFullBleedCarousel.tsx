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
        <div className="px-4 xl:px-0 xl:max-w-screen-xl xl:mx-auto xl:w-screen-xl block">
          <h2 className="text-5xl font-bold text-black ">{title}</h2>
        </div>
      ) : undefined}

      <div className="carousel carousel-center w-full pb-4 space-x-4">
        {items.map((item, index) => {
          return (
            <div className="carousel-item w-[80%] xl:w-auto">
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
