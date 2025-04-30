import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="publications"
      aria-label="Publications"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Check out a list of our projects and publications!
          </h2>
          {/* <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p> */}
          <Button href="/dashboard/projects" color="white" className="mt-10">
            Projects and Publications
          </Button>
        </div>
      </Container>
    </section>
  )
}
