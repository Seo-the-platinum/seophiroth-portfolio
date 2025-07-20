import Icon from "~/molecules/Icon"
import Link from "next/link"

const Socials = () => (
    <div className="flex gap-4">
      <Link href="https://x.com/Seophiroth" target="_blank" rel="noopener noreferrer">
        <Icon icon="twitter-x" size={24} className="text-primary-icon hover:scale-110 transition-transform duration-200 ease-in-out hover:-translate-y-2"/>
      </Link>
      <Link href="https://www.linkedin.com/in/eliseo-aegon-flores/">
        <Icon icon="linkedin" size={24} className="text-primary-icon hover:scale-110 transition-transform duration-200 ease-in-out hover:-translate-y-2"/>
      </Link>
      <Link href="https://github.com/Seo-the-platinum">
        <Icon icon="github" size={24} className="text-primary-icon hover:scale-110 transition-transform duration-200 ease-in-out hover:-translate-y-2"/>
      </Link>
    </div>
  )

export default Socials