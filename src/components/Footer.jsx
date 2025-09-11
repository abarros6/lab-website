import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-12 sm:py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-8 text-sm" aria-label="quick links">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center gap-x-8">
              <NavLink href="#about">About Us</NavLink>
              <NavLink href="/dashboard/projects">Projects and Publications</NavLink>
              <NavLink href="#researchers">Researchers</NavLink>
              <NavLink href="#students">Students</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden flex flex-col items-center space-y-3">
              <NavLink href="#about">About Us</NavLink>
              <NavLink href="/dashboard/projects">Projects and Publications</NavLink>
              <NavLink href="#researchers">Researchers</NavLink>
              <NavLink href="#students">Students</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </nav>
        </div>
        
        <div className="flex flex-col items-center border-t border-slate-400/10 py-8">
          <p className="text-sm text-slate-500 text-center">
            Copyright &copy; {new Date().getFullYear()} Brain3DViz Lab, Western University.<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>All rights reserved.
          </p>
          <p className="text-xs text-slate-400 mt-2">
            London, Ontario, Canada
          </p>
        </div>
      </Container>
    </footer>
  )
}
