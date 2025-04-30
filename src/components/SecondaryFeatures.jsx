import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

import screenshotGlove from '@/images/glove.jpg'
import ar from '@/images/ar.jpg'
//import videoDemo from '@/images/clip.mp4'

import Brain from '@/images/brain.svg'

const features = [
  {
    name: 'Neuroimaging',
    summary: 'Visualize brain function and structure with cutting-edge tools.',
    description:
      'Our neuro visualization tools provide high-quality rendering of neuroimaging data, enabling researchers to study the brain in new and exciting ways. Gain insights into brain function and potential treatments.',
    image: '/clip.mp4',
    video: true,
    icon: function NeuroimagingIcon() {
      return (
        <>
          <path
            fill="#6692F1"
            d="M26 15.71v8.58A2.47 2.47 0 0 1 23.56 27H8.44A2.47 2.47 0 0 1 6 24.29V15.71A2.47 2.47 0 0 1 8.44 13h15.12A2.47 2.47 0 0 1 26 15.71ZM16 23.3a3.3 3.3 0 1 0-3.3-3.3A3.3 3.3 0 0 0 16 23.3Zm7.48-8.46A4.43 4.43 0 1 0 19.9 10.4 4.43 4.43 0 0 0 23.48 14.84Z"
          />
        </>
      )
    },
  },
  {
    name: 'Virtual Reality',
    summary:
      'Experience immersive simulations and virtual environments for research.',
    description:
      'Our VR platform allows researchers to create and explore immersive simulations and environments, enabling them to study brain function and behavior in new and innovative ways.',
    image: screenshotGlove,
    video: false,
    icon: function VirtualRealityIcon() {
      return (
        <>
          <path
            fill="#6692F1"
            d="M26 15.71v8.58A2.47 2.47 0 0 1 23.56 27H8.44A2.47 2.47 0 0 1 6 24.29V15.71A2.47 2.47 0 0 1 8.44 13h15.12A2.47 2.47 0 0 1 26 15.71ZM16 23.3a3.3 3.3 0 1 0-3.3-3.3A3.3 3.3 0 0 0 16 23.3Zm7.48-8.46A4.43 4.43 0 1 0 19.9 10.4 4.43 4.43 0 0 0 23.48 14.84Z"
          />
        </>
      )
    },
  },
  {
    name: 'Augmented Reality',
    summary: 'Enhance research with real-time visualization and data overlay.',
    description:
      'Our AR technology enables real-time visualization and data analysis. Explore brain function and behavior in new and innovative ways.',
    image: ar,
    video: false,
    icon: function AugmentedRealityIcon() {
      return (
        <>
          <path
            fill="#6692F1"
            d="M19.88 8.44a2.87 2.87 0 0 0-4 0l-.89.89-.89-.89a2.87 2.87 0 0 0-4 4l.89.89-.89.89a2.87 2.87 0 0 0 4 4l.89-.89.89.89a2.87 2.87 0 0 0 4-4l-.89-.89.89-.89a2.87 2.87 0 0 0 0-4Z"
          />
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              {!feature.video ? (
                <Image
                  className="w-full"
                  src={feature.image}
                  alt=""
                  sizes="52.75rem"
                />
              ) : (
                <video
                  src={feature.image}
                  className="w-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    {!feature.video ? (
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        sizes="52.75rem"
                        
                      />
                    ) : (
                      <video
                        src={feature.image}
                        //width="640" 
                        //height="480"
                        type="video/mp4"
                        controls
                        className="w-full"
                        autoPlay
                        loop
                        muted
                        //playsInline
                      />
                    )}
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="projects"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Revolutionize Neuroscience research.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            With our cutting-edge technology, we aim to revolutionize the way
            neuroscience research is conducted, providing researchers with new
            and exciting tools to explore the brain and the mind.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
