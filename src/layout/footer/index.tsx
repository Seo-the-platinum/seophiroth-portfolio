import Socials from "./components/Socials"
const Footer = () => {
  const socialIcons = [
    { name: 'Twitter', url: 'https://x.com/Seophiroth', icon: '/icons/twitter.svg' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '/icons/linkedin.svg' },
    { name: 'GitHub', url: 'https://github.com', icon: '/icons/github.svg' },
  ]
  return (
    <footer className="mx-auto w-full max-w-screen-xl px-4 sm:px-16 lg:px-8 pb-10">
      <div className="flex flex-col gap-4">
        <Socials />
      </div>
    </footer>
  )
}

export default Footer