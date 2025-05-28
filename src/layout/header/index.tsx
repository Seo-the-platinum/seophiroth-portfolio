import Link from 'next/link'

const Header= () => {
  return (
    <header className="text-white sticky z-[999] top-0">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-16 lg:px-8">
        <div className="relative flex h-18 w-full items-center justify-between gap-6 lg:h-20 lg:py-5">
          <div className="w-[140px] flex flex-row gap-4">
            <Link className="nav-link active-link" href="/#about">About</Link>
            <Link className="nav-link" href="/experience">Experience</Link>
            <Link className="nav-link" href="/projects">Projects</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header