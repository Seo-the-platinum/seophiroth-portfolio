import HeadingComponent from "~/components/Heading";
import { aboutBody } from "~/db";
import Marquee from "~/components/Marquee";
import Switchback from "~/components/Switchback";
import { projects } from "~/db";


export default function HomePage() {
  return (
    <main className="min-h-screen text-gray-100 font-light">
      <div id="about">
        <HeadingComponent 
          alignment='row' 
          body={aboutBody}
          heading="Hi! My name is Seo"
          noBackground={true}
          size="lg"
          paddingBottom="lg"
          paddingTop="lg"
          />
      </div>
      <div id="experience">
        <HeadingComponent
          alignment='left' 
          eyebrow="Where I've worked"
          heading="Experience"
          noBackground={true}
          size="lg"
          paddingTop={'md'}
          paddingBottom={'sm'}
          />
        <Marquee scrollspeed="fast"/>
      </div>
      <div id="projects">
        <HeadingComponent
          alignment='left' 
          eyebrow="Fun things I made"
          heading="Projects"
          noBackground={true}
          size="lg"
          paddingTop={'md'}
          paddingBottom={'lg'}
          />
          {
            projects.map((project, idx)=>(
              <Switchback
                alt={project.alt}
                key={project.heading}
                heading={{
                  alignment: 'left', 
                  body: project.body,
                  eyebrow: project.eyebrow,
                  heading: project.heading,
                  size: 'lg',
                  link: project.link
                }}
                paddingTop={'lg'}
                image={project.image}
                reverse={idx % 2 !== 0 || false}
              />
            ))
          }
      </div>
    </main>
  );
}
