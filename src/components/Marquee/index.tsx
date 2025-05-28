import React from 'react'
import Section from '~/molecules/section'
import MarqueeSlide from '~/organisms/MarqueeSlide'
import type { MarqueeSlideProps } from '~/organisms/MarqueeSlide/types'

const Marquee = () => {
  const slides:MarqueeSlideProps[] = [{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Company A',
    dates: 'Jan 2020 - Present',
    title: 'Software Engineer',
    skills: ['Javascript', 'React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Git', 'Hubspot']
  }]
  return (
    <Section>
      <div>
        <div>
          {slides.map((slide, index) => <MarqueeSlide key={index} {...slide}/>)}
        </div>
      </div>
    </Section>
  )
}

export default Marquee