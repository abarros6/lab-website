import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import ProjectPopup from './ProjectPopup'
import { useState } from 'react'
import Image from 'next/image'

import Blank from '@/images/students/blank.png'
import DenisProject from '@/images/projects/DenisKikinovProject.jpg'
import ventricle from '@/images/projects/ventricle.jpg'
import motorDevice from '@/images/projects/motorDevice.jpg'
import esteeProject from '@/images/projects/esteeProject.png'

import figure from '@/images/projects/figure.png'

import muscle from '@/images/projects/muscle.jpg'
import muscle1 from '@/images/projects/muscle1.png'
import trigger from '@/images/projects/trigger.jpg'

import laptop from '@/images/projects/laptop.jpg'

// Project Data Structure
// title
// image (thumbnail)
// media (video, image, etc.)
// description
// team
// link to publication
// link to github?


const projects = [
  {
    title: 'Pre-surgical Brain Visualization',
    image: DenisProject,
    description:"An augmented reality application, with a subject’s brain, where each structural brain fiber could be isolated, and interacted with, allowing the user to examine the brain in full detail. For each structural fiber, the associated functional connectivity is also shown. The user can also attempt different surgical paths, and any fibers that could be affected by that path will light up, along with their associated brain regions. This allows a partial or full brain to be examined in full detail in 3D, along with path testing.",
    media: [DenisProject],
  },
  {
    title: '3D Ultrasound in Babies with Intraventricular Hemorrhage',
    image: motorDevice,
    description:"This project involves premature babies who are afflicted with intraventricular hemorrhage or post-hemorrhagic hydrocephalus. Previously, our lab has developed a motor device to capture ultrasound images in 3D, and a software to process these images. The motor device houses the regular 2D ultrasound probe, and rotates it about its axis to serially acquire multiple 2D scans. In-house developed software then converts the series of 2D images into a 3D image, and allows user-guided processing to measure the volume of the ventricle. The goal of this project is to determine ventricular volume thresholds for optimal intervention timing. We are also investigating whether the posture of the baby can impact the volume measurements of the lateral ventricles.",
    media: [motorDevice, ventricle],
  },
  {
    title: 'The Developing Fetal Brain',
    image: esteeProject,
    description:"Observations of the rapidly developing brain in utero are scarce, therefore, fetal fMRI is a promising technique to gain understanding of the activity of the developing brain. We aim to develop a reliable paradigm to measure activation in the fetal brain in response to an auditory stimulus. Furthermore, using this methodology, we plan to acquire resting state fMRI data to determine fetal brain connectivity.",
    media:[esteeProject]
  },
  {
    title: 'Skill Development in Cerebral Angiography Coiling Procedures using Haptic Simulation',
    image: figure,
    description:"Using a haptic simulator, we showed dramatic improvements in skill development in aneurysm coiling in novices. We were able to show that simulation can significantly improve the acquisition of basic interventional skills, such as coil placement and aneurysm filling, in novice trainees. This progress is complemented by reduced navigational errors and procedural time, providing us with valuable information on the learning curves that novices exhibit in attaining clinical competency. Currently, we are looking to establish core actions made by expert interventionalists in clinical scenarios to build simulation-based training programs for future interventional angiography fellows.",
    media:[figure]
  },
  {
    title: 'Neurosurgical Training for Deep Muscle Injection',
    image: muscle,
    description:"The main goal of the project is to design a  conceptual framework for neurosurgical training to develop standardized training modules for technical skills required in Deep Muscle Injection (DMI). Inputs from neurosurgeons was used to define the simulation content by selecting the appropriate tasks needed. Cognitive task analysis of basic and complex surgical techniques was identified to select the appropriate tasks required in the training. Each task then was elaborated into training modules to include learning objectives, level of complexity, and various performance metrics. Some of the project expected outputs: Providing high-profiled modes of visualization and interaction to reduce the surgeon’s cognitive overload thus increasing their surgical performance. Elevating any technical burdens from surgeons by making the technology used user friendly and as simple as possible to achieve higher degrees of usability. Delivering instant realistic feedback from the tools used during the simulation training.",
    media:[muscle, muscle1, trigger]
  },
  {
    title: 'Brain Signal Variability',
    image: laptop,
    description:"Blood oxygen-level dependent (BOLD) signal variability is believed to reflect the brain’s dynamic ability to undergo fast moment-to-moment switching through network reconfigurations. One of the projects involving BOLD signal variability aims to examine its relationship to neuroanatomical metrics such as cortical thickness, grey matter volume and cortical area. Another branch of the project concerns examining BOLD signal variability changes across aging in the context of resting-state networks.    ",
    media:[laptop]
  },
]

export default function Example() {

    const[open, setOpen] = useState(false)
    const[project, setProject] = useState({})

    function handlePopup(project) {
        console.log('clicked')
        setProject(project)
        setOpen(true)
        console.log(project)
    }

  return (
    <>
      <ProjectPopup open={open} setOpen={setOpen} project={project}/>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {projects.map((p) => (
          <li
            key={p.title}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <a
              className="flex flex-1 flex-col p-8 hover:bg-gray-50"
              onClick={()=>handlePopup(p)}
            >
              <Image
                className="rounded mx-auto h-32 w-32 flex-shrink-0"
                src={p.image}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {p.title}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
