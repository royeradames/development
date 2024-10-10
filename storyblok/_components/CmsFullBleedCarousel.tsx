import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { SbBlokData } from "@storyblok/react";
import { useEffect, useRef, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
  }, [items]);

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

  // Functions for prev and next buttons
  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    if (carouselRef.current && itemWidth > 0) {
      carouselRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      });
    }
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    if (carouselRef.current && itemWidth > 0) {
      carouselRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: "smooth",
      });
    }
    setCurrentIndex(newIndex);
  };

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
            {usePreviousAndNextInsideCard ? (
              <PreviousAndNextInsideCard index={index} items={items} />
            ) : null}
          </div>
        ))}
      </div>

      {/* Prev and Next Buttons Below the Carousel */}
      <div className="flex justify-center mt-4">
        <button onClick={handlePrev} className="btn btn-circle mx-2">
          ❮
        </button>
        <button onClick={handleNext} className="btn btn-circle mx-2">
          ❯
        </button>
      </div>
    </section>
  );
}

// Optional: If you still need the PreviousAndNextInsideCard component
const PreviousAndNextInsideCard = ({ index, items }) => {
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
