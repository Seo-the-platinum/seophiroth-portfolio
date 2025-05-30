import { cva } from 'class-variance-authority';

const sectionStyles = cva('relative scroll-mt-16 py-12', {
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
  },
});

export default sectionStyles;