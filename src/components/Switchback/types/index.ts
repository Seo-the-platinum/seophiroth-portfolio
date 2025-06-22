import type { HeadingComponentProps } from "~/components/Heading/types"
import type { SectionProps } from "~/molecules/section/types"


export type SwitchbackProps = {
  reverse?: boolean,
  heading: HeadingComponentProps,
  image: string,
} & SectionProps