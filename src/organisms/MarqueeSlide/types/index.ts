type Skills = 'Javascript' | 'React' |'TypeScript'| 'GraphQL' | 'Next.js' |'Tailwind CSS' | 'Git' | 'Hubspot';

export type MarqueeSlideProps = {
  company: string;
  dates: string;
  title: string;
  description: string;
  skills: Skills[];
}