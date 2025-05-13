import type { FC } from 'react'

type SectionProps = {
  children: React.ReactNode
}
const Section: FC<SectionProps> = ({ children }) => {
  const Component = 'section';
  return (
    <Component>{children}</Component>
  )
}

export default Section