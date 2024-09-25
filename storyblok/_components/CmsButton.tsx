import { storyblokEditable } from "@storyblok/react/rsc";

export type TCmsButton = {
  blok: {
    text: string;
    type?:
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
};

export function CmsButton({
  blok,
  blok: {
    text = "Get Started",
    type = "primary",
    size = "md",
    shape = "square",
    glass = false,
    noAnimation = false,
  },
}: TCmsButton) {
  // Construct button classes dynamically
  const baseClass = "btn";
  const typeClass = type ? `btn-${type}` : "";
  const sizeClass = size ? `btn-${size}` : "";
  const shapeClass = shape ? `btn-${shape}` : "";
  const glassClass = glass ? "glass" : "";
  const noAnimationClass = noAnimation ? "no-animation" : "";

  // Combine all class names
  const classNames = [
    baseClass,
    typeClass,
    sizeClass,
    shapeClass,
    glassClass,
    noAnimationClass,
  ]
    .filter(Boolean) // Filter out any empty strings or undefined
    .join(" "); // Join all class names into one string

  return (
    <button className={classNames} {...storyblokEditable(blok)}>
      {text}
    </button>
  );
}
