import { storyblokEditable } from "@storyblok/react/rsc";
import { cn } from "@/utils/cn";

export type TCmsButton = {
  blok: {
    text: string;
    type?:
      | "none"
      | "neutral"
      | "primary"
      | "secondary"
      | "accent"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "ghost"
      | "outline"
      | "active"
      | "disabled";
    size?: "lg" | "md" | "sm" | "xs";
    shape?: "wide" | "block" | "circle" | "square";
    glass?: boolean;
    noAnimation?: boolean;
  };
  className?: string;
};

export function CmsButton({
  blok,
  blok: {
    text = "Get Started",
    type = "none",
    size = "md",
    shape = "square",
    glass = false,
    noAnimation = false,
  },
  className = "",
}: TCmsButton) {
  return (
    <button
      data-component="CmsButton"
      className={cn([
        "btn",
        {
          "btn-neutral": type === "neutral",
          "btn-primary": type === "primary",
          "btn-secondary": type === "secondary",
          "btn-accent": type === "accent",
          "btn-info": type === "info",
          "btn-success": type === "success",
          "btn-warning": type === "warning",
          "btn-error": type === "error",
          "btn-ghost": type === "ghost",
          "btn-outline": type === "outline",
          "btn-active": type === "active",
          "btn-disabled": type === "disabled",
          "btn-lg": size === "lg",
          "btn-md": size === "md",
          "btn-sm": size === "sm",
          "btn-xs": size === "xs",
          "btn-wide": shape === "wide",
          "btn-block": shape === "block",
          "btn-circle": shape === "circle",
          "btn-square": shape === "square",
          "btn-glass": glass,
          "no-animation": noAnimation,
          [className]: className,
        },
      ])}
      {...storyblokEditable(blok)}
    >
      {text}
    </button>
  );
}
