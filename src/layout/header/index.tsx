'use client';
import Link from 'next/link'
import { twMerge } from 'tailwind-merge';
import { useScrollWatcher } from '~/hooks/useScrollWatcher'
const Header= () => {
  const doo = useScrollWatcher();
  return (
    <header className="text-white sticky z-[999] top-0 bg-sephiroth">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-16 lg:px-8">
        <div className="relative flex h-18 w-full items-center justify-between gap-6 lg:h-20 lg:py-5">
          <div className="w-[140px] flex flex-row gap-4">
            <Link className={twMerge("nav-link", doo === 'about' ? 'active-link' : '')} href="/#about">About</Link>
            <Link className={twMerge("nav-link", doo === 'experience' ? 'active-link' : '')} href="/#experience">Experience</Link>
            <Link className={twMerge("nav-link", doo === 'projects' ? 'active-link' : '')} href="/#projects">Projects</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header