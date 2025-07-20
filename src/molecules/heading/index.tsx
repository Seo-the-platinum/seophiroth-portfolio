import type { FC, ReactNode } from 'react'
import type { HeadingMoleculeConfigProps } from './types'
import { headingMoleculeContainer, headingStyles, bodyStyles } from './styles'
import type { VariantProps } from 'class-variance-authority'
import HeadingHighlights from '~/utils/strings/HeadingHighlights'
import BodyHighlights from '~/utils/strings/BodyHighlights'
import Link from 'next/link'

export interface HeadingMoleculeProps extends MergePrefer <VariantProps<typeof headingMoleculeContainer>,HeadingMoleculeConfigProps>,
 VariantProps<typeof headingStyles> {
  children?: ReactNode,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

const Heading:FC<HeadingMoleculeProps>= ({ as, alignment, body, children, eyebrow, heading, link, size }) => {
  const HeadingElem = as || 'h2'
  const BodyElem = 'p'
  return (
    <div className={headingMoleculeContainer({alignment, size})}>
      {eyebrow && (
        <span className="font-spaceGrotesk font-semibold text-eyebrow text-overline-sm dark:text-primary-300 text-primary-eyebrow">
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
      {link && <Link href={link.href} className="rounded-2xl bg-teal-600/20 py-3 px-9 text-xs text-secondary-highlight w-max hover:scale-110 hover:saturate-200 transition-all duration-300 ease-in-out">{link.label}</Link>}
      {children}
    </div>
  )
}

export default Heading