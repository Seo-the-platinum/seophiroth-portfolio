import type { FC } from 'react'

type MarqueeSkillProps = {
  skill: string;
}

const MarqueeSkill:FC<MarqueeSkillProps> = ({skill}) => {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-teal-600/20 py-1 px-3 text-xs text-secondary-highlight group-hover:saturate-200">
      {skill}
    </div>
  )
}

export default MarqueeSkill