import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";
import { cn } from "@/lib/utils";

export type TCarousel = {
  blok: {
    title?: string;
    items: SbBlokData[];
  };
};

export function CmsCarousel({ blok, blok: { title = "", items } }: TCarousel) {
  return (
    <section
      aria-label={title}
      className="flex justify-center w-full px-4 "
      {...storyblokEditable(blok)}
    >
      <Carousel className="w-[80%]">
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, index) => {
            return (
              <div
                className={cn([
                  " w-[80%] xl:w-auto ",
                  "md:basis-1/2 lg:basis-1/3 ",
                  "pl-2 md:pl-4",
                ])}
              >
                <StoryblokComponent
                  id={`slide${index + 1}`}
                  blok={item}
                  key={item._uid}
                />
              </div>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
