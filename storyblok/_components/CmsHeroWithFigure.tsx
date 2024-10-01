import { SbImage } from "@/storyblok/types/SbImage";
import NextImage from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";
import { ISbRichtext } from "@storyblok/react";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";

export type TCmsHeroWithFigure = {
  blok: {
    image: SbImage;
    caption: string;
    title: string;
    content: ISbRichtext;
  };
};

export function CmsHeroWithFigure({
  blok,
  blok: {
    image: { filename, alt },
    caption,
    title,
    content,
  },
}: TCmsHeroWithFigure) {
  const headingId = formatTitleToId(title);
  return (
    <section
      className="my-20 px-4 xl:px-0 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      aria-labelledby={headingId}
      {...storyblokEditable(blok)}
    >
      <figure>
        <NextImage src={filename} alt={alt} height={556} width={589} />
        <figcaption className="text-gray-400 text-center text-base">
          {caption}
        </figcaption>
      </figure>
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold text-white" id={headingId}>
          {title}
        </h2>
        {content.content?.map((aParagraph) => {
          return aParagraph.content?.map((aParagraphData) => {
            return (
              <p className="text-base text-white" key={aParagraphData.text}>
                {aParagraphData.text}
              </p>
            );
          });
        })}
      </div>
    </section>
  );
}