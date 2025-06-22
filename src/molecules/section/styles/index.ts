import { cva } from 'class-variance-authority';

const sectionStyles = cva('relative scroll-mt-16', {
  variants: {
    nextComponentIsDark: {
      true: '',
      false: '',
    },
    darkMode: {
      true: 'dark',
    },
    
    hasGradientTransition: {
      true: '',
      false: '',
    },
    noBackground: {
      true: 'bg-transparent',
      false: '',
    },
    noContain: {
      true: '',
      false: 'contain-content',
    },
    paddingTop: {
      none: '',
      sm: 'pt-4',
      md: 'pt-8',
      lg: 'pt-12',
    },
    paddingBottom: {
      none: '',
      sm: 'pb-4',
      md: 'pb-8',
      lg: 'pb-12',
    },
  },
  compoundVariants: [
    {
      nextComponentIsDark: true,
      hasGradientTransition: true,
      className: 'bg-iconCardDeckGradientDark',
    },
    {
      nextComponentIsDark: false,
      hasGradientTransition: true,
      className: 'bg-iconCardDeckGradient',
    },
    {
      darkMode: true,
      hasGradientTransition: false,
      noBackground: false,
      className: 'bg-gray-900',
    },
    {
      darkMode: false,
      noBackground: false,
      className: 'bg-primary-25',
    },
  ],
  defaultVariants: {
    nextComponentIsDark: false,
    hasGradientTransition: false,
    noBackground: false,
    noContain: false,
    paddingTop: 'lg',
    paddingBottom: 'lg',
  },
});

export default sectionStyles;