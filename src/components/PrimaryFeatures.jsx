import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotImage from '@/images/neuro.jpg'
import surgicalSim from '@/images/surgicalSim.jpg'
import oculus from '@/images/oculus2.jpg'

const features = [
  {
    title: 'Surgical Simulation',
    description:
      'Our surgical simulation software allows for safe and realistic practice of surgical procedures, enabling neurosurgeons to hone their skills and improve patient outcomes.',
    image: surgicalSim,
  },
  {
    title: 'Neuroimaging',
    description:
      'Our neuro visualization tools provide high-quality rendering of neuroimaging data, allowing researchers to see the brain in new and exciting ways. These powerful visualization tools provide insights into brain function and potential treatment options.',
    image: screenshotImage,
  },
  {
    title: '3D Visualizations',
    description:
      'Our 3D visualization software allows for dynamic and interactive exploration of complex data sets, enabling researchers to gain deeper insights and make more informed decisions. With our user-friendly interface and advanced visualizations, you can easily identify patterns, relationships, and outliers that would be difficult to spot otherwise.',
    image: oculus,
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <h3
        className={clsx(
          'text-xl font-bold tracking-tight',
          isActive ? 'text-white' : 'text-blue-100'
        )}
      >
        {feature.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-blue-50">{feature.description}</p>
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
    <div className="mt-12 lg:hidden">
      <div className="relative px-4 sm:px-6">
        <Feature feature={features[currentIndex]} className="mx-auto max-w-2xl mb-6" isActive />
        <div className="relative">
          <div className="absolute bg-slate-200 rounded-xl" />
          <div className="relative pt-6 pb-8 px-4 sm:px-6">
            <div className="mx-auto max-w-full overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full h-auto"
                src={features[currentIndex].image}
                alt=""
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 52.75rem"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation - Below content to avoid overlap */}
        <div className="flex justify-center items-center mt-4 space-x-4">
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

  const goToPrevious = () => {
    setSelectedIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => Math.min(features.length - 1, prev + 1));
  };

  return (
    <div className="hidden lg:mt-12 lg:block">
      <div className="grid grid-cols-12 gap-8 items-center">
        {/* Feature Navigation - Left Side */}
        <div className="col-span-4 space-y-3">
          {features.map((feature, featureIndex) => (
            <button
              key={feature.title}
              onClick={() => setSelectedIndex(featureIndex)}
              className={clsx(
                'w-full text-left p-4 rounded-2xl transition-all duration-300 border-2',
                featureIndex === selectedIndex
                  ? 'bg-white/20 border-white/40 shadow-2xl'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              )}
            >
              <h3 className={clsx(
                'text-lg font-bold tracking-tight mb-2',
                featureIndex === selectedIndex ? 'text-white' : 'text-blue-100'
              )}>
                {feature.title}
              </h3>
              <p className="text-xs text-blue-50 leading-relaxed">
                {feature.description}
              </p>
            </button>
          ))}
        </div>

        {/* Feature Content - Right Side */}
        <div className="col-span-8 relative">
          <div className="relative overflow-hidden rounded-2xl bg-white/10 p-6">
            <div className="relative w-full">
              {features.map((feature, featureIndex) => (
                <div
                  key={feature.title}
                  className={clsx(
                    'w-full transition duration-500 ease-in-out',
                    featureIndex !== selectedIndex && 'absolute inset-0 opacity-0',
                    featureIndex === selectedIndex && 'opacity-100'
                  )}
                >
                  <div className="overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/20 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full h-auto"
                      src={feature.image}
                      alt=""
                      sizes="(max-width: 1024px) 90vw, 60rem"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows - Below content */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button
              onClick={goToPrevious}
              disabled={selectedIndex === 0}
              className={clsx(
                "p-3 rounded-full transition-all duration-200",
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
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={clsx(
                    "w-3 h-3 rounded-full transition-colors",
                    index === selectedIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              disabled={selectedIndex === features.length - 1}
              className={clsx(
                "p-3 rounded-full transition-all duration-200",
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
          </div>
        </div>
      </div>
    </div>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="about"
      aria-label="Features for running your books"
      className="relative w-full overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-custom-blue pt-12 pb-16 sm:pt-16 sm:pb-20"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-blue-800/90"></div>
      <div className="absolute inset-0 w-full h-full bg-blue-700 opacity-10"></div>
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-3xl md:text-4xl">
            Showcasing the Latest Advances in Neuroscience Research from Our
            Lab.
          </h2>
          <p className="mt-4 text-base tracking-tight text-blue-100">
            Our website provides a platform for our lab to showcase the latest
            research in the field of neuroscience. We aim to share our findings
            with the world and promote collaboration and innovation in the
            field. Explore our website to learn more about our cutting-edge
            research and stay up-to-date with the latest advances in
            neuroscience.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
