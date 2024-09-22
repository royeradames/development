import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

// TODO: should we export the variants?
// TODO: should we remove the h4/h5?
// TODO: should we move this into a richtext component instead, or just import this into that?

// ------------------------------------- Heading Variants

const headingVariants = cva("", {
  variants: {
    as: {
      h1: "text-3xl xl:text-4xl font-extrabold",
      h2: "text-2xl xl:text-2xl font-extrabold",
      h3: "text-xl xl:text-xl font-bold",
      h4: "text-lg font-bold",
      h5: "text-base font-semibold",
    },
  },
  defaultVariants: {
    as: "h2",
  },
});

// ------------------------------------- Heading

export type HeadingProps = VariantProps<typeof headingVariants> & {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string | undefined;
  id?: string;
};

const Heading = ({ children, as = "h2", className, id }: HeadingProps) => {
  const Heading = as;
  const styles = cn(headingVariants({ as }), "leading-0", className);

  return (
    <Heading id={id} className={styles}>
      {children}
    </Heading>
  );
};

// ------------------------------------- Heading Exports

export { Heading };
