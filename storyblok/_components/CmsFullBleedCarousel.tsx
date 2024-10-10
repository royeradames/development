import {StoryblokComponent, storyblokEditable} from "@storyblok/react/rsc";
import {SbBlokData} from "@storyblok/react";
import React, {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";

/**
 * Custom hook for carousel logic.
 * @param itemCount - Number of items in the carousel.
 */
function useCarousel(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Calculate item width once the component mounts
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }
    const item = carousel.querySelector(".carousel-item") as HTMLElement | null;
    if (!item) {
      return;
    }
    const itemStyles = window.getComputedStyle(item);
    const width = item.offsetWidth + parseInt(itemStyles.marginRight || "0");
    setItemWidth(width);
  }, [itemCount]);

  // Update currentIndex on scroll
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }
    const isCarouselLoaded = itemWidth > 0;
    if (!isCarouselLoaded) {
      return;
    }
    const scrollLeft = carousel.scrollLeft;
    // Calculate how many items have been scrolled past
    const scrolledItemsCount = scrollLeft / itemWidth;

    // Round to get the index of the current item in view
    const currentItemIndex = Math.round(scrolledItemsCount);
    setCurrentIndex(currentItemIndex);
  };

  //Attaches an event listener to the carousel to update the current index whenever the carousel is scrolled.
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, [itemWidth]);

  // Function to scroll to a specific index
  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }
    const isCarouselLoaded = itemWidth > 0;
    if (!isCarouselLoaded) {
      return;
    }
    const horizontalScrollToItemView = index * itemWidth;
    carousel.scrollTo({
      left: horizontalScrollToItemView,
      behavior: "smooth",
    });
  };

  // Functions for prev and next buttons
  const handlePrev = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? itemCount - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastItem = currentIndex === itemCount - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  return {
    carouselRef,
    handlePrev,
    handleNext,
    scrollToIndex,
  };
}

export type TFullBleedCarousel = {
  blok: {
    title?: string;
    items: SbBlokData[];
    buttonsPosition: "below" | "inside" | "none";
  };
};

/**
 * Carousel component that displays items with optional navigation buttons.
 * @param blok - Contains carousel configuration and items.
 * @param title
 * @param items
 * @param buttonsPosition
 */
export function CmsFullBleedCarousel({
  blok,
  blok: { title = "", items, buttonsPosition = "none" },
}: TFullBleedCarousel) {
  const { carouselRef, handlePrev, handleNext, scrollToIndex } = useCarousel(
    items.length,
  );

  return (
    <section
      className="py-20 bg-white flex flex-col gap-6 w-full"
      {...storyblokEditable(blok)}
    >
      {title ? (
        <div className="px-4 xl:px-0 xl:max-w-screen-xl xl:mx-auto xl:w-screen-xl block">
          <h2 className="text-5xl font-bold text-black">{title}</h2>
        </div>
      ) : null}

      <div
        className="carousel carousel-center w-full pb-4 space-x-4"
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <div
            className="carousel-item relative w-[80%] xl:w-auto"
            key={item._uid}
          >
            <StoryblokComponent id={`slide${index + 1}`} blok={item} />
            <PrevNextButtons
              currentPosition={buttonsPosition}
              onPrev={() =>
                scrollToIndex(index === 0 ? items.length - 1 : index - 1)
              }
              onNext={() =>
                scrollToIndex(index === items.length - 1 ? 0 : index + 1)
              }
              position="inside"
            />
          </div>
        ))}
      </div>

      <PrevNextButtons
        onPrev={handlePrev}
        onNext={handleNext}
        position="below"
        currentPosition={buttonsPosition}
      />
    </section>
  );
}

type PrevNextButtonsProps = {
  onPrev: () => void;
  onNext: () => void;
  position: TFullBleedCarousel["blok"]["buttonsPosition"];
  currentPosition: TFullBleedCarousel["blok"]["buttonsPosition"];
};

/**
 * PrevNextButtons component renders navigation buttons.
 * @param onPrev - Function to call when previous button is clicked.
 * @param onNext - Function to call when next button is clicked.
 * @param position - Position of the buttons, affecting styling.
 * @param currentPosition - The current desire position.
 */
function PrevNextButtons({
  onPrev,
  onNext,
  position,
  currentPosition,
}: PrevNextButtonsProps) {
  const dontRender = currentPosition === "none" || currentPosition !== position;
  if (dontRender) return undefined;
  const buttonClassNames = "btn btn-circle mx-2 text-white";
  return (
    <div
      className={cn("flex", {
        "absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2":
          position === "inside",
        "justify-center mt-4": position === "below",
      })}
    >
      <button onClick={onPrev} className={buttonClassNames}>
        ❮
      </button>
      <button onClick={onNext} className={buttonClassNames}>
        ❯
      </button>
    </div>
  );
}
