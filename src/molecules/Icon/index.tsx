import type { FC } from 'react'

const iconIds = ['github', 'linkedin', 'twitter-x'] as const;
export type IconIds = (typeof iconIds)[number];

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconIds;
  size?: number;
}

const Icon:FC<IconProps> = ({className, icon, size}) => (
    iconIds.includes(icon) ? (
      <svg width={size} height={size} role="img" aria-label={icon} className={className}>
        <use href={`/icons/sprites.svg#${icon}`} />
      </svg>
    ) : null
  )

export default Icon