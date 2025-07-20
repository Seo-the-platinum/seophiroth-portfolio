import type { MarqueeSlideProps } from "~/organisms/MarqueeSlide/types";

export const aboutBody = `Feel free to poke [[around| https://google.com]] and see some of the stuff I\'ve built.I\'m a software engineer with a passion for building things that make life easier. I love working with React, Next.js, and TypeScript, and I\'m always looking for new challenges to tackle.
I have experience in full-stack development, and I enjoy working on both the front-end and back-end. 

I\'m also a big fan of open source, and I love contributing to projects that I find interesting.
I\'m currently working at [[Webstacks|https://www.webstacks.com/]] as a software engineer, where I\'m building tools to help developers be more productive.

I\'m always looking for new opportunities to learn and grow, so feel free to reach out if you\'d like to chat or collaborate on something interesting!`;

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