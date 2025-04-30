import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import backgroundImage from '@/images/backgroundTest.svg'
import Sandrine from '@/images/dr._sandrine_de_ribaupierre.jpg'
import Roy from '@/images/Roy.jpg'
import Matea from '@/images/matea.jpg'




function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

const researchers = [
  {
    name: 'Dr. Sandrine De Ribaupierre',
    role: 'Principal Investigator',
    imageUrl:
    Sandrine,
    bio: 'Dr. de Ribaupierre is a pediatric neurosurgeon at London Health Sciences Centre, ON, Canada. Her main research interests include functional brain imaging, especially during development (fetal, neonatal and pediatric). This would include healthy subjects or patients with epilepsy or hydrocephalus. Another focus or interest is surgical simulation and its evaluation.',
  },
  {
    name: 'Dr. Roy Eagleson',
    role: 'Principal Investigator',
    imageUrl:
    Roy,
    bio: 'Dr. Eagleson is a professor specializing in computer and electrical engineering at Western University, ON, Canada. His main research interests include 3D Biomedical Visualization and Surgical Simulation, Human-Computer Interface Design for Surgical Skills Training, haptic Interfaces, and Interactive Immersive graphical Interfaces (Volumetric Visualization with GPU programming).',
  },
  
  // More people...
]

const reserachCoordinators = [
  {
    name: 'Matea Zuljevic',
    role: 'Research Associate',
    imageUrl: Matea,
    bio: "Matea is a Research Associate at London Health Sciences Centre, ON, Canada. She completed a Master’s of Science degree in the School of Public Health Sciences at the University of Waterloo. She received a Bachelor's degree in Health Sciences with a minor in Psychology from the University of Ottawa. Before coming to LHSC, she worked as a Research Assistant at the University Health Network in the Neurology Department. Matea has expertise in population health and clinical epidemiology research. Her major research interests include epidemiology and cognitive function.",
  },
]


function Example() {
  return (
    <div className="bg-white py-24 sm:py-24 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Researchers</h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {researchers.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <div className="h-60 w-60 flex-none overflow-hidden rounded-2xl">
                <Image
                  className="h-full w-full object-cover"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto pt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research Coordinators</h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {reserachCoordinators.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <div className="h-60 w-60 flex-none overflow-hidden rounded-2xl">
                <Image
                  className="h-full w-full object-cover"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="researchers"
      aria-label="What our customers are saying"
      className="relative overflow-hidden bg-[#13BFD5] py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <Example/>
      </Container>
    </section>
  )
}
