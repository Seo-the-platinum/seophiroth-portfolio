'use client'
import { useEffect, useRef, useState } from 'react'
import Section from '~/molecules/section'
import MarqueeSlide from '~/organisms/MarqueeSlide'
import type { MarqueeSlideProps } from '~/organisms/MarqueeSlide/types'

const slides:MarqueeSlideProps[] = [{
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company:{
      url: 'https://google.com',
      name: 'Company A'
    },
    dates: 'Jan 2020 - Present',
    skills: ['Javascript', 'React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Github', 'Hubspot'],
    thumbnail: '/images/webstacks-website.webp',
    title: 'Software Engineer',
  }, {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company:{
      url: 'https://google.com',
      name: 'Company B'
    },
    dates: 'Jan 2020 - Aug 2021',
    skills: ['Javascript', 'React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Github', 'Hubspot'],
    thumbnail: '/images/webstacks-website.webp',
    title: 'Software Engineer',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company:{
      url: 'https://google.com',
      name: 'Company C'
    },
    dates: 'Jan 2020 - Feb 2022',
    skills: ['Javascript', 'React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Github', 'Hubspot'],
    thumbnail: '/images/webstacks-website.webp',
    title: 'Software Engineer',

  }, {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    company:{
      url: 'https://google.com',
      name: 'Company D'
    },
    dates: 'Jan 2020 - Oct 2023',
    skills: ['Javascript', 'React', 'TypeScript', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Github', 'Hubspot'],
    thumbnail: '/images/webstacks-website.webp',
    title: 'Software Engineer',
  }
]

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

  return (
    <Section>
      <div className="flex justify-center">
        <div className="scroller" ref={scrollerRef} style={{opacity: marqueeReady ? 1 : 0}}>
          <ul className="flex scroller-inner flex-wrap py-10 gap-16 hover:animation-play-state-paused">
            {slides.map((slide, index) => <MarqueeSlide key={index} {...slide}/>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Marquee;