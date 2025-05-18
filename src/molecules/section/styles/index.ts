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
    paddingTop: {
      none: 'pt-0',
      xs: 'pt-2',
      sm: 'pt-4',
      md: 'pt-2 sm:pt-4 lg:pt-8',
      lg: 'pt-12 sm:pt-14 lg:pt-16',
      xl: 'pt-12 sm:pt-18 lg:pt-24',
      '2xl': 'pt-18 sm:pt-24 lg:pt-32',
    },
    paddingBottom: {
      none: 'pb-0',
      xs: 'pb-2',
      sm: 'pb-4',
      md: 'pb-2 sm:pb-4 lg:pb-8',
      lg: 'pb-12 sm:pb-14 lg:pb-16',
      xl: 'pb-12 sm:pb-18 lg:pb-24',
      '2xl': 'pb-18 sm:pb-24 lg:pb-32',
    },
    dottedBackground: {
      true: '',
      false: '',
    },
    flareBackground: {
      true: '',
      false: '',
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
  },
  compoundVariants: [
    {
      dottedBackground: true,
      flareBackground: false,
      className: 'bg-dotted',
    },
    {
      dottedBackground: false,
      flareBackground: true,
      className: 'bg-flare bg-cover bg-center bg-no-repeat',
    },
    {
      dottedBackground: true,
      flareBackground: true,
      className: 'background-flare-dotted',
    },
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
    dottedBackground: false,
    flareBackground: false,
    noBackground: false,
    noContain: false,
    paddingTop: 'lg',
    paddingBottom: 'lg',
  },
});

export default sectionStyles;