import LeftAlignedHero from "~/components/Hero/variants/LeftAligned";
import Switchback from "~/components/Switchback";


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <LeftAlignedHero body="Feel free to poke around and see some of the stuff I've built" heading='Hi! My name is Seo' eyebrow="Seophiroth"/>
      <Switchback/>
    </main>
  );
}
