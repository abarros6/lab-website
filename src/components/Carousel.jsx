import Image from 'next/image'
import { Carousel } from '@mantine/carousel';

export default function Demo({media}) {
  return (
    <Carousel maw={320} mx="auto" withIndicators height={400}>
      {media.map((item, index) => (
      <Carousel.Slide key={index}>
        <Image
              src={item}
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
      </Carousel.Slide>
      ))}
    </Carousel>
  );
}

// function Example({ media }) {
//   return (
//     <div
//       id="default-carousel"
//       className="relative w-full"
//       data-carousel="slide"
//     >
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {media.map((item, index) => (
//           <div
//             className='hidden duration-700 ease-in-out'
            
//             data-carousel-item
//             key={'media' + index}
//           >
//             <Image
//               src={item}
//               className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
//               alt="..."
//             />
//           </div>
//         ))}
//       </div>
//       <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
//         {media.map((item, index) => (
//           <button
//             type="button"
//             className="h-3 w-3 rounded-full"
//             aria-current={index === 0 ? "true": "false"}
//             aria-label={"Slide "+index}
//             data-carousel-slide-to={""+index}
//             key={'button' + index}
//           ></button>
//         ))}
//       </div>
//       <button
//         type="button"
//         className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//         data-carousel-prev
//       >
//         <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
//           <svg
//             aria-hidden="true"
//             className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             ></path>
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//         data-carousel-next
//       >
//         <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
//           <svg
//             aria-hidden="true"
//             className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             ></path>
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   )
// }
