import type { FC } from 'react'
import type { SectionProps } from './types'

const Section: FC<SectionProps> = ({ as, children, noBackground }) => {
  const Component = as || 'section';
  return (
    <Component className={sectionStyles({
        paddingTop,
        paddingBottom,
        nextComponentIsDark,
        darkMode,
        hasGradientTransition,
        noBackground,
        noContain,
      })}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-16 lg:px-8">{children}</div>
    </Component>
  )
}

export default Section