import type { ElementType } from "react";

export type SectionProps = {
   /**
   * Specifies the HTML element type to use for the Section component. Defaults to 'section' if not provided.
   */
  as?: ElementType;
  /**
   * Remove the section background.
   */
  noBackground?: boolean;
  /**
   * The children prop represents the content that will be rendered inside the Section component.
   */
  children?: React.ReactNode;
  darkMode?: boolean;
  hasGradientTransition?: boolean;
  nextComponentIsDark?: boolean;
  noContain?: boolean;
  paddingBottom?: 'none' | 'sm' | 'md' | 'lg';
  paddingTop?: 'none' | 'sm' | 'md' | 'lg';
}

const sectionProps = ['as', 'noBackground', 'children', 'darkMode', 'hasGradientTransition', 'nextComponentIsDark', 'noContain', 'paddingBottom', 'paddingTop'];

export const splitSectionProps = <T>(props: T extends SectionProps ? T : never) =>
  Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (sectionProps.includes(key)) {
        return { ...acc, sectionProps: { ...acc.sectionProps, [key]: value } };
      }

      return { ...acc, rest: { ...acc.rest, [key]: value } };
    },
    { sectionProps: {} as SectionProps, rest: {} as Omit<T, keyof SectionProps> },
  );