import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import backgroundImage from '@/images/backgroundTest.svg'
import Roy from '@/images/Roy.jpg'
import Blank from '@/images/students/blank.png'

import Mashal from '@/images/students/mashal.jpg'
import Denis from '@/images/students/denis.jpg'
import Juan from '@/images/students/juan.jpeg'
import Neel from '@/images/students/neel.jpg'
import Rutva from '@/images/students/rutva.jpg'
import Chandan from '@/images/students/chandan.jpg'
import Jackie from '@/images/students/jackie.jpg'
import Daniel from '@/images/students/daniel.jpg'
import Lili from '@/images/students/lili.jpg'
import Jane from '@/images/students/jane.jpeg'
import Jonah from '@/images/students/jonah.jpeg'
import Henna from '@/images/students/henna.jpg'
import Xiang from '@/images/students/Xiang.jpg'
import Matthew from '@/images/students/Matthew.jpg'

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

const medical_students = [
  {
    name:'Mashal Ahmed',
    role: 'Medical Student',
    degree: 'MD',
    imageUrl: Mashal,
    bio:'Mashal is a second-year medical student at Western. She earned her BSc from the University of Waterloo and her MSc from the University of Toronto. She is currently working on a project which explores the use of virtual reality in paediatric patients prior to and following neurosurgical procedures. Beyond academics, Mashal loves trying out new baking recipes and painting.'
  },
  {
    name:'Renee-Marie Ragguett',
    role: 'Medical Student',
    degree: 'MD',
    imageUrl: Blank,
    bio:''
  }
]


const phd_students = [
  {
    name: 'Denis Kikinov',
    role: 'Software Engineering',
    degree: 'PhD',
    imageUrl: Denis,
    bio: 'My name is Denis Kikinov and I completed my undergraduate degree in software engineering at Western University. My interest in the field of augmented reality and virtual reality was sparked when I had the opportunity to work with Dr. Eagleson in my culminating fourth year project, which eventually became the basis for my master’s thesis. I am currently pursuing a Master of Engineering Science degree in Electrical and Computer Engineering focused on Software Engineering.',
  },
  {
    name:'Oleksiy Zaika',
    role: 'Anatomy & Cell Biology',
    degree: 'PhD',
    imageUrl: Blank,
    bio:'My research is focused on skill development in cerebral angiography coiling procedures using haptic simulation. During an endovascular intervention with a cerebral aneurysm, an interventionalist manipulates a set of wires and catheters in order to fill and stabilize the aneurysmal space. This procedure uses limited fluoroscopy monitoring to navigate a 3D endovascular network – a combination of obstacles that make the procedure difficult. Currently, fellowships specializing in teaching these procedures are limited to offering most technical training in the operating room. With the appropriate implementation of simulation, it would be advantageous to target and develop core procedural skills and competencies.'
  },
  {
    name:'Xiang Li',
    role: 'Software Engineering',
    degree: 'PhD',
    imageUrl: Xiang,
    bio:''
  }
]

const masters_students = [
  {
    name: 'Juan Santiago Bottan',
    role: 'Neurosurgery',
    degree: 'MSc',
    imageUrl: Juan,
    bio: "I received my MD at the University of Buenos Aires in 2009. I completed my residency in Neurosurgery at the Central Military Hospital in Buenos Aires and pursued a research fellowship in cerebrovascular and skull base surgery at the Arkansas Neuroscience Institute in Little Rock, AR in 2014. Following this, I was appointed as staff neurosurgeon in the Pedro de Elizalde Children’s Hospital in Buenos Aires. In 2019, I completed a clinical fellowship in epilepsy surgery at Western University in London, ON. For my master's project, I am investigating the role of resting-state functional MRI and functional NIRS in pediatric epilepsy surgery with special focus in preoperative language mapping and postoperative cognitive outcomes.",
  },
  {
    name: 'Susana Correa',
    role: 'Neuroscience',
    degree: 'MSc',
    imageUrl: Blank,
    bio: '',
  },
  {
    name: 'Virat Tripathi',
    role: 'Biomedical Engineering',
    degree: 'MESc',
    imageUrl: Blank,
    bio: '',
  },
  {
    name: 'Neel Patel',
    role: 'Biomedical Engineering',
    degree: 'MESc',
    imageUrl: Neel,
    bio: '',
  },
  {
    name: 'Rutva Master',
    role: 'Neuroscience',
    degree: 'MSc',
    imageUrl: Rutva,
    bio: 'My main research interest is studying the rapidly developing brain in utero using fetal fMRI. Specifically, my project uses fetal fMRI scans to investigate functional connectivity of the primary auditory cortex in terms of language acquisition and behavior in children.',
  },
  {
    name: 'Connor Burgess',
    role: 'Software Engineering',
    degree: 'MESc',
    imageUrl: Blank,
    bio: "I completed my undergraduate degree at Western University in Computer Engineering. My research interest is in leveraging Virtual and Augmented Reality hardware devices to allow for the development and testing of software systems in the healthcare domain. This includes researching and building programs that improve both pre- and post-operative workflows via collaborative planning and analyzing patient data in a virtual environment. I'm also deeply interested in working towards building and validating programs that can be used for skill acquisition before clinicians move on to their next stage of surgical pipeline.",
  },
  {
    name: 'Chandan Chandel',
    role: 'Software Engineering',
    degree: 'MESc',
    imageUrl: Chandan,
    bio: 'Chandan is a masters student focusing on Artificial Intelligence and AR/VR in the Brain3DViz lab at Western University. He completed his bachelors in electrical engineering at the same institution. During his masters he has completed multiple software engineering internship, enabling him to apply his academic learning in private sector settings.',
  },
  {
    name: 'Liam Bilbie',
    role: 'Software Engineering',
    degree: 'MESc',
    imageUrl: Blank,
    bio: '',
  },
  {
    name: 'Matthew Peck',
    role: 'Software Engineering',
    degree: 'MESc',
    imageUrl: Matthew,
    bio: "Matthew is a graduate of Western's Computer Engineering program who works with the lab in VR. His research focus is on the viability of sonification techniques in VR settings for training, specifically on medical education and surgical training. He is interested in VR, game development, signal processing, sound synthesis, and psychoacoustics.",
  },
]

const undergrad_students = [
  {
    name: 'Jackie Han',
    role: 'Medical Sciences',
    degree: 'BSc',
    imageUrl: Jackie,
    bio: 'Jackie is currently helping on the hospital VR project.',
  },
  {
    name: 'Mehul Satish Prabha',
    role: 'Medical Sciences',
    degree: 'BSc',
    imageUrl: Blank,
    bio: 'Mahul is currently helping with a project on how post-surgical executive functioning outcomes can be predicted by pre-surgical resting-state fMRI in surgical cases of epilepsy.',
  },
  {
    name: 'Verena Rafael',
    role: 'Medical Sciences',
    degree: 'BSc',
    imageUrl: Blank,
    bio: 'Verena is currently helping with a project related to examining the functional effects of hydrocephalus based on changes in brain volume.',
  },
  {
    name: 'Yihan (Jane) Wang',
    role: 'Psychology',
    degree: 'BSc',
    imageUrl: Jane,
    bio: "Jane's research is focusing on exploring the cognitive attention deficits in pediatric hydrocephalus children.",
  },
  {
    name: 'Michael Dinatolo',
    role: 'Biology',
    degree: 'BSc',
    imageUrl: Blank,
    bio: 'Michael is helping out with the hospital VR project.',
  },
  {
    name: 'Sherwin Sherkat-Mahichian',
    role: 'Genetics',
    degree: 'BSc',
    imageUrl: Blank,
    bio: '',
  },
  {
    name: 'Lili Meng',
    role: 'Medical Sciences',
    degree: 'BSc',
    imageUrl: Lili,
    bio: 'My research focus is exploring how pediatric hydrocephalus affects the structure and function of the hippocampus through methods that employ volume segmentation and behavioural testing.',
  },
  {
    name: 'Daniel Roozbeh',
    role: 'Medical Sciences',
    degree: 'BSc',
    imageUrl: Daniel,
    bio: "Daniel's research is targeted toward how post-surgical executive functioning outcomes can be predicted by pre-surgical resting state fMRI in surgical cases of epilepsy and discovering volumes of cerebral spinal fluid present in patients with hydrocephalus and their implications.",
  },
  {
    name: 'Jonah Boutin',
    role: 'Medical Sciences',
    degree: 'BSc',
    imageUrl: Jonah,
    bio:"Currently collaborating on a project that is investigating the use of haptic technologies combined with virtual environments to improve surgical education."
  },
  {
    name: 'Henna Patel',
    role: 'Medical Sciences',
    degree: 'BSc',
    imageUrl: Henna,
    bio:"Henna is presently engaged in research focused on combining resting state fMRI and fNIRS to map language preoperatively in children with drug-resistant Epilepsy and is contributing to understanding the safety and effectiveness of vagal nerve stimulator implantation in children under the age of 5."
  }
]

function Example({ title, students }) {
  return (
    <div className="rounded-2xl bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title} Students
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {students.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <div className="h-60 w-60 flex-none overflow-hidden rounded-2xl">
                <Image
                  className="h-full w-full object-cover"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}, {person.degree}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Students() {
  return (
    <section
      id="students"
      aria-label="Students"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="flex flex-col gap-6">
          <Example title="Medical" students={medical_students} />
          <Example title="PhD" students={phd_students} />
          <Example title="Master's" students={masters_students} />
          <Example title="Bachelor's" students={undergrad_students} />

          {/* <Example /> */}
        </div>
      </Container>
    </section>
  )
}
