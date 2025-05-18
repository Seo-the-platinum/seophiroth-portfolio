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
  children: React.ReactNode

}