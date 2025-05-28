import type { FC } from 'react'
import Section from '~/molecules/section'
import Heading from '~/molecules/heading'
import { splitSectionProps } from '~/molecules/section/types'
import type { HeadingComponentProps } from './types'

const HeadingComponent:FC<HeadingComponentProps> = props => {

  const {sectionProps, rest } = splitSectionProps(props)
  return (
    <Section {...sectionProps}>
      <Heading {...rest}/>
    </Section>
  )
}

export default HeadingComponent