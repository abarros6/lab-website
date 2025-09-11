import { useState } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(features.length - 1, prev + 1));
  };

  return (
    <div className="mt-8 px-4 sm:px-6 lg:hidden">
      <div className="relative">
        <Feature feature={features[currentIndex]} className="mx-auto max-w-2xl" isActive />
        <div className="relative mt-6 pb-6">
          <div className="absolute bottom-0 top-6 rounded-xl bg-slate-200" />
          <div className="relative mx-auto max-w-full overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
            {!features[currentIndex].video ? (
              <Image
                className="w-full h-auto"
                src={features[currentIndex].image}
                alt=""
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 52.75rem"
              />
            ) : (
              <video
                src={features[currentIndex].image}
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
          
          {/* Mobile Navigation Arrows - positioned below content on small screens */}
        </div>
        
        {/* Mobile Navigation - Below content to avoid overlap */}
        <div className="flex justify-center items-center mt-3 space-x-4">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={clsx(
              "p-3 rounded-full transition-all duration-200",
              currentIndex === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                : "bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-lg hover:shadow-xl"
            )}
            aria-label="Previous feature"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Mobile Indicators */}
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={clsx(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            disabled={currentIndex === features.length - 1}
            className={clsx(
              "p-3 rounded-full transition-all duration-200",
              currentIndex === features.length - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                : "bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-lg hover:shadow-xl"
            )}
            aria-label="Next feature"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function FeaturesDesktop() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex} as="div" className="hidden lg:mt-8 lg:block">
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
      <Tab.Panels className="relative mt-12 overflow-hidden rounded-4xl bg-slate-200 px-10 py-8 xl:px-12">
        <div className="relative w-full">
          {features.map((feature, featureIndex) => (
            <Tab.Panel
              static
              key={feature.name}
              className={clsx(
                'w-full transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                featureIndex !== selectedIndex && 'absolute inset-0 opacity-0',
                featureIndex === selectedIndex && 'opacity-100'
              )}
              aria-hidden={featureIndex !== selectedIndex}
            >
              <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                {!feature.video ? (
                  <Image
                    className="w-full h-auto"
                    src={feature.image}
                    alt=""
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 52.75rem"
                  />
                ) : (
                  <video
                    src={feature.image}
                    type="video/mp4"
                    controls
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </div>
            </Tab.Panel>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
          disabled={selectedIndex === 0}
          className={clsx(
            "absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10",
            selectedIndex === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
              : "bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-lg hover:shadow-xl"
          )}
          aria-label="Previous feature"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setSelectedIndex(Math.min(features.length - 1, selectedIndex + 1))}
          disabled={selectedIndex === features.length - 1}
          className={clsx(
            "absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10",
            selectedIndex === features.length - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
              : "bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-lg hover:shadow-xl"
          )}
          aria-label="Next feature"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
      </Tab.Panels>
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="projects"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-8 pb-6 sm:pb-8 sm:pt-12 lg:pb-12"
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
