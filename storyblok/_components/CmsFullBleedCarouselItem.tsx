import { storyblokEditable } from "@storyblok/react/rsc";
import { clsx } from "clsx";
import { SbImage } from "@/storyblok/types/SbImage";
import { formatTitleToId } from "@/utils/formatTitleToId";
import Link from "next/link";
import NextImage from "next/image";

export type SbLink = {
  id: string;
  url: string;
  linktype: "url";
  fieldtype: "multilink" | "story";
  cached_url: string;
  target: "_blank" | "_self";
};

type TFullBleedCarouselItem = {
  blok: {
    title: string;
    content: string;
    image: SbImage;
    imageHeight: string;
    imageWidth: string;
    backgroundImage?: Pick<SbImage, "filename">;
    backgroundColor: "blue" | "grey" | "green" | "yellow" | "black";
    figure: Pick<SbImage, "filename" | "alt">;
    link: Pick<SbLink, "url" | "target">;
    linkIcon?: Pick<SbImage, "filename">;
    bgPosition: "bottomRight" | "cover" | "topRight" | "bottom";
  };
  className?: string;
  id?: string;
};

export function CmsFullBleedCarouselItem({
  blok,
  blok: {
    title = "Case studies",
    image: { filename, alt },
    imageHeight = "48",
    imageWidth = "48",
    content,
    backgroundColor = "black",
    backgroundImage: { filename: backgroundImagefilename } = { filename: "" },
    figure: { filename: figureFilename, alt: figureAlt },
    link: { url, target },
    linkIcon: { filename: linkFilename } = { filename: "" },
    bgPosition,
  },
  className = "",
  id,
}: TFullBleedCarouselItem) {
  const headingId = formatTitleToId(title);
  const linearGradiant = {
    blue: "linear-gradient(#015baa,#017ac2)",
    grey: "",
    green: "linear-gradient(#007730, #5fc427)",
    yellow: "",
    black: "",
  };
  const backgroundImage = `url('${backgroundImagefilename}')${linearGradiant[backgroundColor] ? `, ${linearGradiant[backgroundColor]}` : ""}`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={clsx(
        [
          "hero max-w-screen-xl",
          "pt-20 lg:pt-0",
          "items-start lg:items-center",
        ],
        {
          [className]: className,
          "bg-[#015baa]": backgroundColor === "blue",
          "bg-[#222424]": backgroundColor === "grey",
          "bg-[#087d30]": backgroundColor === "green",
          "bg-[#ffdb00]": backgroundColor === "yellow",
          "bg-black": backgroundColor === "black",
          "bg-right-bottom": bgPosition === "bottomRight",
          "bg-cover": bgPosition === "cover",
          "bg-right-top": bgPosition === "topRight",
          "bg-bottom": bgPosition === "bottom",
        },
      )}
      style={{
        backgroundImage,
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
          <NextImage
            src={filename}
            alt={alt}
            height={+imageHeight}
            width={+imageWidth}
            className="max-w-md"
          />
          <h2
            id={headingId}
            className={clsx("text-5xl font-bold", {
              "text-black": backgroundColor === "yellow",
              "text-white": !(backgroundColor === "yellow"),
            })}
          >
            {title}
          </h2>
          <p
            className={clsx("text-base", {
              "text-black": backgroundColor === "yellow",
              "text-white": !(backgroundColor === "yellow"),
            })}
          >
            {content}
          </p>
          <Link
            href={url}
            target={target}
            className={clsx("text-xl font-bold", {
              "text-black": backgroundColor === "yellow",
              "text-white": !(backgroundColor === "yellow"),
            })}
          >
            Learn more{" "}
            {linkFilename ? (
              <NextImage
                src={linkFilename}
                alt=""
                height={29}
                width={29}
                className="inline align-middle"
              />
            ) : undefined}
          </Link>
        </div>
      </div>
    </section>
  );
}
