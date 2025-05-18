import type { FC } from 'react'
import type { SwitchbackProps } from './types'
import Section from '~/molecules/section'
import { switchbackStyles } from './styles'
import Heading from '~/molecules/heading'

const Switchback:FC<SwitchbackProps> = ({reverse}) => {
  return (
    <Section>
      <div className={switchbackStyles({reverse})}>
        <div>
          <Heading 
            alignment="left" 
            body="I like to play video games, I used to play drums and music and is something I would like to get back into."
            eyebrow='Some stuff about me' 
            heading="Get to know me" 
            />
        </div>
        <div>
          <p>Asset to go here</p>
        </div>
      </div>
    </Section>
  )
}

export default Switchback