import type { FC } from 'react'
import type { MarqueeSlideProps } from './types'
import MarqueeSkill from './components/Skill'
import Image from 'next/image'
import Link from 'next/link'

const MarqueeSlide:FC<MarqueeSlideProps> = ({ company, dates, description, skills, thumbnail, title }) =>(
    <li className="grid grid-cols-8 p-2 rounded-2xl group max-w-[800px] relative">
      <div 
        className="
          absolute 
          -inset-x-4 
          -inset-y-4 
          group-hover:bg-slate-800/50 
          block 
          rounded-2xl 
          group-hover:drop-shadow-lg 
          group-hover:inset-shadow-slide 
          transition-all 
          ease-in-out 
          duration-300 z-0"/>
      <div className="col-span-2 z-10 flex flex-col gap-4 pr-6 items-center">
        <h2 className="text-md font-semibold">{dates}</h2>
        { thumbnail && <Image alt="Company logo or website" className="w-full rounded-lg aspect-video" height={332} src={thumbnail} width={640}/> }
      </div>
      <div className="flex flex-col gap-4 col-span-6 z-10">
        <div className="flex gap-2 items-center transition-colors duration-600 ease-in-out">
          <h2 className="text-md font-semibold">
            <Link href={company.url}><span className="absolute block cursor-pointer -inset-x-4 -inset-y-4"/>
              <span className="flex items-center gap-2">
                {title} 
                <div className="size-1 rounded-full overflow-hidden bg-secondary-highlight group-hover:saturate-200"/> 
                {company.name}
              </span>
            </Link>
          </h2>
          
        </div>
        <div className="flex group-hover:text-body-text transition-colors duration-600 ease-in-out">
          {description}
        </div>
        <div className="flex gap-4 flex-wrap">
          {skills.map((skill) => (
            <MarqueeSkill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </li>
  )

export default MarqueeSlide