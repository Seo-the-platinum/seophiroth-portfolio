import { cva } from "class-variance-authority";

export const headingMoleculeContainer = cva('grid',{
  variants: {
    alignment: {
      center: 'm-auto max-w-[960px] grid-cols-1 place-items-center text-center grid-cols-1',
      left: '',
      row: 'grid-cols-1 lg:grid-cols-2',
    },
    size: {
      sm: 'gap-4',
      lg: 'gap-6',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const headingStyles = cva('col-start-1 font-semibold text-heading',{
  variants: {
    size: {
      sm: 'text-display-sm dark:text-white sm:text-display-lg',
      lg: 'text-3xl sm:text-4xl lg:text-5xl',
    }
  },
  defaultVariants: {
    size: 'sm',
  },
})

export const bodyStyles = cva('text-lg text-gray-700 dark:text-gray-300 sm:text-xl', {
  variants: {
    alignment: {
      center: '',
      left: '',
      leftInline: 'lg:col-start-2',
    },
    hasEyebrow: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      hasEyebrow: true,
      alignment: 'leftInline',
      className: 'lg:row-start-2',
    },
    {
      hasEyebrow: false,
      alignment: 'leftInline',
      className: 'lg:row-start-1',
    },
  ],
});