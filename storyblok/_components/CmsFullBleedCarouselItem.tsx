import { storyblokEditable } from "@storyblok/react/rsc";
import { clsx } from "clsx";
import { SbImage } from "@/storyblok/types/SbImage";
import { formatTitleToId } from "@/app/(helpers)/formatTitleToId";
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
    backgroundImage?: SbImage;
    backgroundColor: "blue" | "grey" | "green" | "yellow" | "black";
    figure: SbImage;
    link: SbLink;
    linkIcon?: SbImage;
    bgPosition: "bottomRight" | "cover" | "topRight" | "bottom";
  };
  className?: string;
};

export function CmsFullBleedCarouselItem({
  blok,
  blok: {
    title = "Case studies",
    image: { filename, alt },
    content,
    backgroundColor = "black",
    backgroundImage: { filename: backgroundImagefilename } = { filename: "" },
    figure: { filename: figureFilename, alt: figureAlt },
    link: { url, target },
    linkIcon: { filename: linkFilename } = { filename: "" },
    bgPosition,
  },
  className = "",
}: TFullBleedCarouselItem) {
  const headingId = formatTitleToId(title);
  const linearGradiant = {
    blue: "linear-gradient(#015baa,#017ac2)",
    grey: "",
    green: "linear-gradient(#007730, #5fc427)",
    yellow: "",
    black: "",
  };
  // const backgroundImage = `url('${backgroundImagefilename}`;
  const backgroundImage = `url('${backgroundImagefilename}')${linearGradiant[backgroundColor] ? `, ${linearGradiant[backgroundColor]}` : ""}`;
  console.log(backgroundImage);
  return (
    <section
      aria-labelledby={headingId}
      className={clsx(
        ["hero min-h-screen", "pt-20 lg:pt-0", "items-start lg:items-center"],
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
          <img src={filename} alt={alt} className="max-w-md" />
          <h2 id={headingId} className="text-5xl font-bold text-white">
            {title}
          </h2>
          <p className="text-base text-white">{content}</p>
          <Link
            href={url}
            target={target}
            className="text-white text-xl font-bold"
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
