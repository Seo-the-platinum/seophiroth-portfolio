import type { FC } from 'react'
import type { SwitchbackProps } from './types'
import Section from '~/molecules/section'
import { switchbackStyles } from './styles'
import Heading from '~/molecules/heading'
import Image from 'next/image'
import { splitSectionProps } from '~/molecules/section/types'

const Switchback:FC<SwitchbackProps> = (props) => {
  const { sectionProps, rest} = splitSectionProps(props)
  const { reverse, heading, image } = rest

  return (
    <Section {...sectionProps}>
      <div className={switchbackStyles({reverse})}>
        <div className="lg:basis-1/2">
          <Heading {...heading}/>
        </div>
        <div className="rounded-lg overflow-hidden lg:basis-1/2">
          <Image alt='Final Fantasy vote project thumbnail' src={image} width={640} height={336}/>
        </div>
      </div>
    </Section>
  )
}

export default Switchback