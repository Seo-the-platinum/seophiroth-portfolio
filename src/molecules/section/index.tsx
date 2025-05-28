import type { FC } from 'react'
import type { SectionProps } from './types'
import sectionStyles from './styles'

const Section: FC<SectionProps> = ({ as, children, darkMode, hasGradientTransition, nextComponentIsDark, noBackground, noContain}) => {
  const Component = as || 'section';
  return (
    <Component className={sectionStyles({
        darkMode,
        hasGradientTransition,
        noBackground,
        nextComponentIsDark,
        noContain,
      })}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-16 lg:px-8">{children}</div>
    </Component>
  )
}

export default Section