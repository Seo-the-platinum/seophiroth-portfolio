import type { FC } from 'react'
import type { MarqueeSlideProps } from './types'

const MarqueeSlide:FC<MarqueeSlideProps> = ({ company, dates, description, skills, title }) =>(
    <div className="flex gap-4">
      <div>
        <p>{dates}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <h3>{title}</h3>
          <h3>{company}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )

export default MarqueeSlide