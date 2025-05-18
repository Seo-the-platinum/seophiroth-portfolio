import type { FC, ReactNode } from 'react'
import type { HeadingMoleculeConfigProps } from './types'
import { headingMoleculeContainer, headingStyles, bodyStyles } from './styles'
import type { VariantProps } from 'class-variance-authority'
import HeadingHighlights from '~/utils/strings/HeadingHighlights'
import { hasArrayValues } from '~/utils/arrays'

interface HeadingMoleculeProps extends MergePrefer <VariantProps<typeof headingMoleculeContainer>,HeadingMoleculeConfigProps>,
 VariantProps<typeof headingStyles> {
  children?: ReactNode,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

const Heading:FC<HeadingMoleculeProps>= ({ as, alignment, body, children, eyebrow, heading, size }) => {
  const HeadingElem = as || 'h2'
  return (
    <div className={headingMoleculeContainer({alignment, size})}>
      {eyebrow && (
        <span className="font-spaceGrotesk font-semibold text-eyebrow text-overline-sm dark:text-primary-300">
          {eyebrow}
        </span>
      )}
      {heading && (
        <HeadingElem className={headingStyles({ size })}>
          <HeadingHighlights heading={heading} />
        </HeadingElem>
      )}
      {body && <p>{body}</p>}
      {/* {hasArrayValues(buttons) && (
        <div className="mt-7 flex w-full flex-col gap-3 sm:w-fit sm:flex-row">
          {buttons.map((button, index) => (
            <Button
              key={button.id}
              {...button}
              hierarchy={index === 0 ? 'primary' : 'secondary'}
              className="w-full"
            />
          ))}
        </div>
      )} */}
      {children}
    </div>
  )
}

export default Heading