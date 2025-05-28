import type { FC, ReactNode } from 'react'
import type { HeadingMoleculeConfigProps } from './types'
import { headingMoleculeContainer, headingStyles, bodyStyles } from './styles'
import type { VariantProps } from 'class-variance-authority'
import HeadingHighlights from '~/utils/strings/HeadingHighlights'
import BodyHighlights from '~/utils/strings/BodyHighlights'

export interface HeadingMoleculeProps extends MergePrefer <VariantProps<typeof headingMoleculeContainer>,HeadingMoleculeConfigProps>,
 VariantProps<typeof headingStyles> {
  children?: ReactNode,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

const Heading:FC<HeadingMoleculeProps>= ({ as, alignment, body, children, eyebrow, heading, size }) => {
  const HeadingElem = as || 'h2'
  const BodyElem = 'p'
  return (
    <div className={headingMoleculeContainer({alignment, size})}>
      {eyebrow && (
        <span className="font-spaceGrotesk font-semibold text-eyebrow text-overline-sm dark:text-primary-300 text-[#d1c8e6]">
          {eyebrow}
        </span>
      )}
      {heading && (
        <HeadingElem className={headingStyles({ size })}>
          <HeadingHighlights heading={heading} />
        </HeadingElem>
      )}
      {body && (
        <BodyElem className="text-body-text whitespace-pre-wrap">
          <BodyHighlights body={body}/>
        </BodyElem>
        )}
      {children}
    </div>
  )
}

export default Heading