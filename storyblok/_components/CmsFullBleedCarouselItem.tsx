import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import { clsx } from "clsx";
import { SbImage } from "@/storyblok/types/SbImage";
import { SbBlokData } from "@storyblok/react";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";

type TFullBleedCarouselItem = {
  blok: {
    title: string;
    content: string;
    image: SbImage;
    backgroundImage?: SbImage;
    actions: [SbBlokData];
    backgroundColor: "blue" | "grey" | "green" | "yellow" | "black";
    figure: SbImage;
  };
  className?: string;
};

export function CmsFullBleedCarouselItem({
  blok,
  blok: {
    title = "Case studies",
    image: { filename, alt },
    content,
    actions: [action] = [],
    backgroundColor = "black",
    backgroundImage: { filename: backgroundImagefilename } = { filename: "" },
    figure: { filename: figureFilename, alt: figureAlt },
  },
  className = "",
}: TFullBleedCarouselItem) {
  const headingId = formatTitleToId(title);
  return (
    <section
      aria-labelledby={headingId}
      className={clsx("hero bg-base-200 min-h-screen bg-right-bottom", {
        [className]: className,
        "bg-[#087d30]": backgroundColor === "green",
      })}
      style={{
        backgroundImage: `url('${backgroundImagefilename}'), linear-gradient(#007730, #5fc427)`,
      }}
      {...storyblokEditable(blok)}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={figureFilename}
          alt={figureAlt}
          className="max-w-sm rounded hidden lg:inline-block"
        />
        <div className="flex flex-col gap-6">
          <img src={filename} alt={alt} className="max-w-md" />
          <h2 id={headingId} className="text-5xl font-bold">
            {title}
          </h2>
          <p className="py-6">{content}</p>
          <StoryblokComponent blok={action} />
        </div>
      </div>
    </section>
  );
}
