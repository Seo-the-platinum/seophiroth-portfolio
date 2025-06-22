import { cva } from "class-variance-authority";

export const switchbackStyles = cva(
  "flex items-center justify-center gap-8 flex-col lg:flex-row ",
  {
    variants: {
      reverse: {
        true: "lg:flex-row-reverse",
      },
    },
    defaultVariants: {
      reverse: false,
    },
  }
);