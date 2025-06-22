'use client'
import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import Section from '~/molecules/section'
import MarqueeSlide from '~/organisms/MarqueeSlide'
import { experience } from '~/db'

type MarqueeProps = {
  scrollspeed?: 'slow' | 'medium'| 'fast'
}
const Marquee:FC<MarqueeProps> = ({scrollspeed}) => {
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
        <div className="scroller" ref={scrollerRef} style={{opacity: marqueeReady ? 1 : 0}} data-speed={scrollspeed || 'slow'}>
          <ul className="flex scroller-inner flex-wrap py-10 gap-16 hover:animation-play-state-paused" >
            {experience.map((slide, index) => <MarqueeSlide key={index} {...slide}/>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Marquee;