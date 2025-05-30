'use client'
import { useEffect, useRef, useState } from 'react'
import Section from '~/molecules/section'
import MarqueeSlide from '~/organisms/MarqueeSlide'
import type { MarqueeSlideProps } from '~/organisms/MarqueeSlide/types'



const Marquee = () => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [marqueeReady, setMarqueeReady] = useState(false)
  useEffect(() => {
    const scroller = scrollerRef.current
      if (scroller) {
      // Add data-animated attribute
      scroller.setAttribute('data-animated', 'true');

      const scrollerInner = scroller.querySelector('.scroller-inner');

      if (scrollerInner) {
        // We need to ensure scrollerContent is an array of HTMLElements
        const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
        setMarqueeReady(true);
      }
    }
  }, [])

  const slides:MarqueeSlideProps[] = [{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Company A',
    dates: 'Jan 2020 - Present',
    title: 'Software Engineer',
    skills: ['Javascript', 'React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Git', 'Hubspot'],
  }, {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company: 'Company B',
    dates: 'Jan 2020 - Present',
    title: 'Software Engineer',
    skills: ['Javascript', 'React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Git', 'Hubspot']
  }]

  return (
    <Section>
      <div className="flex justify-center">
        <div className="scroller" ref={scrollerRef} style={{opacity: marqueeReady ? 1 : 0}}>
          <ul className="flex scroller-inner gap-4 flex-wrap">
            {slides.map((slide, index) => <MarqueeSlide key={index} {...slide}/>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Marquee;