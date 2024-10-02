import { SbLink } from "@/storyblok/types/SbLink";
import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";
import { clsx } from "clsx";

type TActionLink = {
  blok: {
    link: SbLink;
    label: string;
    variant?: "inline" | "action";
    size: "sm" | "md" | "lg" | "xl";
  };
};

export function CmsActionLink({
  blok,
  blok: {
    link: { target, cached_url },
    label = "No text provided",
    variant = "action",
    size = "md",
  },
}: TActionLink) {
  return (
    <div {...storyblokEditable(blok)}>
      <Link
        href={cached_url}
        target={target}
        className={clsx(
          "w-fit gap-1 text-brand hover:text-blue-dark transition-all duration-200 tracking-wide font-bold rounded-md focusVisibleRingStyles",
          {
            "flex items-center": variant === "action",
            "underline underline-offset-2": variant === "inline",
            "text-sm": size === "sm",
            "text-md": size === "md",
            "text-lg": size === "lg",
            "text-2xl": size === "xl",
          },
        )}
      >
        {label}
      </Link>
    </div>
  );
}
