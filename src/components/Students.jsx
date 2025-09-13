import Image from 'next/image'
import { useState } from 'react'

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
import Anthony from '@/images/students/anthony.jpg'
import Fatima from '@/images/students/fatima.jpg'
import Parjanya from '@/images/students/parjanya.jpg'
import Diya from '@/images/students/diya.jpg'
import James from '@/images/students/james.jpg'
import Kathleen from '@/images/students/kathleen.jpeg'
import Beryl from '@/images/students/beryl.jpeg'


function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

const Link = ({ site, text }) => {
  return (
    <a 
      href={`https://${site}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
    >
      {text || site}
    </a>
  )
}

const alumni = [
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
  }
]

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
  },
  {
    name:'Beryl Chung',
    role: 'Medical Student',
    degree: 'BScH, PhD, MD Candidate 2026',
    imageUrl: Beryl,
    bio:'Beryl is a medical student at Western University. She completed her PhD in Biomedical Sciences and Neuroscience. She is currently working on projects exploring long-term post-surgical outcomes in craniosynostosis and infantile hydrocephalus. Her work involves the use of fMRI and behavioural testing to better understand recovery and developmental trajectories. Outside of her academic pursuits, she enjoys yoga and pottery.'
  }
]


const phd_students = [
  {
    name:'Xiang Li',
    role: 'Software Engineering',
    degree: 'PhD',
    imageUrl: Xiang,
    bio:`I completed my undergraduate studies in Computer Engineering at Western. In my third year, I worked with Professor Roy on Bill & Barbara Etherington Undergraduate summer Research Fellowship Project and later collaborated with him again on my fourth-year capstone project. In the summer of 2024, I joined this Lab and began pursuing a PhD. My current research mainly focuses on applying technologies such as AI, VR, FPGA, and robotics to the field of neurosurgery. So far, I have developed some VR-based simulators, and I am now working on applications involving AI and FPGA. Following that, I will begin research related to robotics.`
  },
  {
    name:'James Nicholls',
    role: 'Software Engineering',
    degree: 'PhD',
    imageUrl: James,
    bio:`James graduated from Western's Software Engineering program with Distinction and is currently a PhD student. He has contributed to many projects in the lab involving AR/VR and Unreal Engine. He has also deployed valuable infrastructure used to store and share projects internally within the lab. His research focuses on using AI to develop Personal Life Automations, a new kind of software that securely and privately interconnects all aspects of one's digital life through simple input-output flows. He aspires to learn all that he can to make technology convenient — and not confusing — for everyone.`
  },   
  {
    name: 'Maryum Khan',
    role: 'Neuroscience',
    degree: 'PhD',
    imageUrl: Blank,
    bio: 'Maryum is interested in pediatric neurorehabilitation and the use of technology to support cognitive development in children with infantile hydrocephalus. Her current research investigates whether interactive tablet and immersive virtual reality (VR) games can help improve visuospatial skills in this population. She will compare the effects of VR and tablet-based training, alongside behavioural assessments and resting-state fMRI. This work aims to explore brain plasticity and inform the development of engaging, tech-based tools for long-term cognitive support. ',
  },
]

const masters_students = [
  {
    name: 'Parjanya Parikh',
    role: 'Neuroscience',
    degree: 'MSc',
    imageUrl: Parjanya,
    bio: 'Parjanya Parikh is currently researching the long-term effects of shunt-treated hydrocephalus in school-age children, with a particular emphasis on working memory development. Using neuroimaging methods, Parjanya is investigating how early neurosurgical interventions shape cognitive outcomes and brain connectivity patterns, with the goal of informing both clinical care and educational support strategies.',
  },
  {
    name: 'Matthew Peck',
    role: 'Software Engineering',
    degree: 'MESc',
    imageUrl: Matthew,
    bio: "Matthew is a graduate of Western's Computer Engineering program who works with the lab in VR. His research focus is on the viability of sonification techniques in VR settings for training, specifically on medical education and surgical training. He is interested in VR, game development, signal processing, sound synthesis, and psychoacoustics.",
  },
  {
    name: 'Kathleen McCombe',
    role: 'Biomedical Engineering',
    degree: 'MESc',
    imageUrl: Kathleen,
    bio: 'I completed my BMSc degree in Interdisciplinary Medical Sciences at Western University. I am now pursuing a MESc in Biomedical Engineering at Western, where my research focuses on developing and testing a gamified, realistic Virtual Reality (VR) simulation of Victoria Hospital in London, Ontario. The goal of this project is to reduce anxiety in pediatric patients prior to appointments, scans, and surgeries by providing an interactive way to familiarize themselves with the hospital environment.'
  },
  {
    name: 'Anthony Barros',
    role: 'Software Engineering', 
    degree: 'MESc',
    imageUrl: Anthony,
    bio: "Anthony is a graduate of the software engineering program and a Masters student. His research is concerned with implementing machine learning algorithms on modern FPGAs with an interest in clinical applications for improved diagnostic methods.",
    link: <Link site="anthonybarros.ca" text="Personal Website" />
  }
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
  },
  {
    name: 'Fatima Sajid',
    role: 'Medical Sciences',//'Research assistant and research fellowship recipient',
    degree: 'BMSc',//'Bachelors of Medical Sciences (BMSc)',
    imageUrl: Fatima,
    bio:" Fatima is researching brain variability and neural networking in children with pediatric epilepsy using Diffusion Tensor Imaging (DTI) and Functional Magnetic Resonance Imaging (fMRI). Her work focuses on understanding language representation in children with focal epilepsy."
  },
  {
    name: 'Diya Gupta',
    role: 'Neuroscience',
    degree: 'BSc',
    imageUrl: Diya,
    bio: 'I am currently investigating how infantile hydrocephalus affects the dorsal and ventral visual processing streams in children through segmentation and visuospatial analyses.'
  }
]

function Example({ title, students, bgColor = "bg-white" }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Filter out students with blank images and empty bios
  const filteredStudents = students.filter(person => 
    person.imageUrl !== Blank && person.bio && person.bio.trim() !== ''
  );

  // Don't render the section if no students remain after filtering
  if (filteredStudents.length === 0) {
    return null;
  }

  return (
    <div className={`rounded-xl ${bgColor} py-4 sm:py-6 transition-all duration-300`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl sm:text-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-full group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1"
            aria-expanded={isOpen}
          >
            <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl group-hover:text-blue-600 transition-colors">
              {title} {title !== 'Alumni' && 'Students'} ({filteredStudents.length})
            </h2>
            <svg 
              className={`ml-2 w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <ul
            role="list"
            className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-6 xl:max-w-none overflow-hidden animate-fade-in"
          >
            {filteredStudents.map((person) => (
            <li key={person.name} className="flex flex-col gap-4 xl:flex-row">
              <div className="h-32 w-32 sm:h-40 sm:w-40 flex-none overflow-hidden rounded-xl mx-auto xl:mx-0">
                <Image
                  className="h-full w-full object-cover"
                  src={person.imageUrl}
                  alt=""
                  width={240}
                  height={240}
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm font-semibold leading-6 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-5 text-gray-600">
                  {person.role}, {person.degree}
                </p>
                { person.link &&
                  <p>
                    {person.link}
                  </p>
                }
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export function Students() {
  return (
    <section
      id="students"
      aria-label="Students"
      className="bg-slate-900 py-12 sm:py-16"
    >
      <Container className="relative">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-4">
            Student Reseachers
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-7">
            Meet the diverse team of researchers, students, and alumni advancing neuroscience through innovative technology and dedicated research.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <Example title="Medical" students={medical_students} bgColor="bg-white" />
          <Example title="PhD" students={phd_students} bgColor="bg-white" />
          <Example title="Master's" students={masters_students} bgColor="bg-white" />
          <Example title="Bachelor's" students={undergrad_students} bgColor="bg-white" />
          <Example title="Alumni" students={alumni} bgColor="bg-white"/>
        </div>
      </Container>
    </section>
  )
}
