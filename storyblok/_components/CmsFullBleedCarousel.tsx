import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";

export type TFullBleedCarousel = {
  blok: {
    title?: string;
    items: SbBlokData[];
    usePreviousAndNextInsideCard: boolean;
  };
};

export function CmsFullBleedCarousel({
  blok,
  blok: { title = "", items, usePreviousAndNextInsideCard = false },
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
          const PreviousAndNextInsideCard = () => {
            const prevIndex = index === 0 ? items.length - 1 : index - 1;
            const nextIndex = index === items.length - 1 ? 0 : index + 1;

            return (
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prevIndex + 1}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${nextIndex + 1}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            );
          };
          return (
            <div className="carousel-item relative w-[80%] xl:w-auto">
              <StoryblokComponent
                id={`slide${index + 1}`}
                blok={item}
                key={item._uid}
              />
              {usePreviousAndNextInsideCard ? (
                <PreviousAndNextInsideCard />
              ) : undefined}
            </div>
          );
        })}
      </div>
    </section>
  );
}
