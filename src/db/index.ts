import type { MarqueeSlideProps } from "~/organisms/MarqueeSlide/types";

export const aboutBody = `I\'m a software engineer with a passion for building aesthetically pleasing and challenging user interfaces. I love working with Next.js, and TypeScript, and Tailwind Css but am always open to learning new technologies.

I take pride in my work and am always open to constructive feedback. I do my best to maintain a good balance between confidence and humility, and I\'m always looking for ways to improve my skills and knowledge.
Currently, I am working at [[Webstacks|https://www.webstacks.com/]] as a software engineer, where I build pixel perfect websites while working with multiple clients. 

In my spare time, I enjoy working out, playing video games, and spending time with my family. A Fun fact about me is that I used to play drums and although I don't have much time to play anymore, I can still do a little damage behind the kit.`;

export const experience:MarqueeSlideProps[] = [
  {
    company: {
      name:'Webstacks',
      url: 'https://webstacks.com'
    }, 
    title: 'Software Engineer',
    dates: 'Aug 2024 - Present',
    description: 'Working on various projects using React, Next.js, and TypeScript. Focused on building scalable and maintainable web applications.',
    thumbnail: '/images/webstacks-website.webp',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful', 'GraphQL', 'builder.io', 'Figma'],
  },
  {
    company: {
      name:'Prismatic',
      url: 'https://prismatic.io/'
    }, 
    title: 'Software Engineer',
    dates: 'Aug 2024 - Sep 2024',
    description: 'Worked on a project to build a custom integration platform using React and Node.js. Focused on building a user-friendly interface and ensuring smooth data flow between systems.',
    thumbnail: '/images/prismatic-website.webp',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'builder.io', 'Figma']
  },
  {
    company: {
      name:'Cribl',
      url: 'https://cribl.io/'
    }, 
    title: 'Software Engineer',
    dates: 'Nov 2024 - Jan 2025',
    description: 'Contributed to the development of a data processing platform using React and Node.js. Focused on building a robust and scalable architecture to handle large volumes of data.',
    thumbnail: '/images/cribl-website.webp',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful', 'GraphQL', 'Figma']
  }, 
  {
    company: {
      name:'Varonis',
      url: 'https://www.varonis.com/'
    }, 
    title: 'Software Engineer',
    dates: 'Dec 2025 - Present',
    description: 'Working on a project to build a data security platform using React and Node.js. Focused on building a user-friendly interface and ensuring data integrity and security.',
    thumbnail: '/images/varonis-website.webp',
    skills: ['Javascript', 'Html', 'CSS', 'Hubspot','Figma'],
  }
]

export const projects = [
  {
    body: 'Final Fantasy Vote is a personal project I made to improve on my development skills while working with an IP I love. It\'s a voting app for Final Fantasy characters, built with React and Next.js.',
    eyebrow: 'Something Fun',
    heading: 'Final Fantasy Vote',
    image: '/images/ffvote.png',

  },
  {
    body: 'Pocket Pool is a fun little project I made to make creating football and basketball pools easier and aetherically pleasing. It\'s built with React and Next.js, and it\'s a great way to keep track of your favorite teams and players.',
    eyebrow: 'Something Fun',
    heading: 'Pocket Pool',
    image: '/images/pocketpool.png',
  }
]