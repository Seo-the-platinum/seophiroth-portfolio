type Skills = 'Javascript' | 'React' |'TypeScript'| 'GraphQL' | 'Next.js' |'Tailwind CSS' | 'Github' | 'Hubspot' | 'Contentful' | 'builder.io' | 'Figma' | 'Html' | 'CSS';

export type MarqueeSlideProps = {
  company: {
  url: string;
  name: string;
  };
  dates: string;
  title: string;
  description: string;
  skills: Skills[];
  thumbnail?: string;
}