import HeadingComponent from "~/components/Heading";
import { aboutBody } from "~/db";
import Marquee from "~/components/Marquee";
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
          />
      </div>
      <div id="experience">
        <Marquee scrollspeed="slow"/>
      </div>
      <div id="projects">
      
      </div>
    </main>
  );
}
