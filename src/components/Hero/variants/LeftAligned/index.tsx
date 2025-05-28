import type {FC} from 'react'
import Heading from '~/molecules/heading'
import Section from '~/molecules/section'
import type { LeftAlignHeroProps } from './types'
import Image from '~/molecules/Image'

const LeftAlignedHero:FC<LeftAlignHeroProps> = ({body, eyebrow, heading, featuredImage}) => {
  return (
    <Section>
      <div className="flex flex-col items-start justify-start gap-8 sm:gap-16 lg:flex-row lg:gap-[50px] py-16">
        <div className="flex w-full lg:w-1/2">
          <Heading
            eyebrow={eyebrow}
            heading={heading}
            body={body}
            alignment="left"
            size="lg"
            as="h1"
          />
        </div>
        <div className="relative w-full lg:h-[600px] lg:w-1/2">
          <div className="h-full rounded-[11px] bg-heroFeaturedBg p-1.5 drop-shadow-heroFeaturedBoxShadow backdrop-blur-[2px] sm:p-3.5 lg:absolute lg:left-[10%] lg:p-0">
            <Image
              url={featuredImage?.url || ''}
              alt={featuredImage?.alt || ''}
              className="size-full object-cover"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default LeftAlignedHero