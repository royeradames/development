import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";
import React, { useEffect, useRef, useState } from "react";

// Custom hook for carousel logic
function useCarousel(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Calculate item width once the component mounts
  useEffect(() => {
    if (carouselRef.current) {
      const item = carouselRef.current.querySelector(
        ".carousel-item",
      ) as HTMLElement;
      if (item) {
        const itemStyles = window.getComputedStyle(item);
        const width =
          item.offsetWidth + parseInt(itemStyles.marginRight || "0");
        setItemWidth(width);
      }
    }
  }, [itemCount]);

  // Update currentIndex on scroll
  const handleScroll = () => {
    if (carouselRef.current && itemWidth > 0) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

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
    if (carouselRef.current && itemWidth > 0) {
      carouselRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  // Functions for prev and next buttons
  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : itemCount - 1;
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < itemCount - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  return {
    currentIndex,
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
    buttonsPosition: "bellow" | "inside" | "none";
  };
};

export function CmsFullBleedCarousel({
  blok,
  blok: { title = "", items, buttonsPosition = "none" },
}: TFullBleedCarousel) {
  const { currentIndex, carouselRef, handlePrev, handleNext, scrollToIndex } =
    useCarousel(items.length);

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
            {buttonsPosition === "inside" ? (
              <PreviousAndNextInsideCard
                index={index}
                items={items}
                scrollToIndex={scrollToIndex}
              />
            ) : null}
          </div>
        ))}
      </div>

      {/* Optional Prev and Next Buttons Below the Carousel */}
      {buttonsPosition === "bellow" && (
        <div className="flex justify-center mt-4">
          <button onClick={handlePrev} className="btn btn-circle mx-2">
            ❮
          </button>
          <button onClick={handleNext} className="btn btn-circle mx-2">
            ❯
          </button>
        </div>
      )}
    </section>
  );
}

// Updated PreviousAndNextInsideCard component

type TPreviousAndNextInsideCard = {
  index: number;
  items: SbBlokData[];
  scrollToIndex: (index: number) => void;
};

function PreviousAndNextInsideCard({
  index,
  items,
  scrollToIndex,
}: TPreviousAndNextInsideCard) {
  const prevIndex = index === 0 ? items.length - 1 : index - 1;
  const nextIndex = index === items.length - 1 ? 0 : index + 1;

  return (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <button
        onClick={() => scrollToIndex(prevIndex)}
        className="btn btn-circle"
      >
        ❮
      </button>
      <button
        onClick={() => scrollToIndex(nextIndex)}
        className="btn btn-circle"
      >
        ❯
      </button>
    </div>
  );
}
