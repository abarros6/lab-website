import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Students } from '@/components/Students'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brain3DViz - Neurosurgery, Neuroimaging, Visualization Simulation</title>
        <meta
          name="description"
          content="Multidisciplinary Lab at Western University: Researching AR/VR in surgical training and advanced neuro visualizations."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />

        <Students />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
