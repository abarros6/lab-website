import Image from 'next/image'
import { useState } from 'react'

export default function Demo({media}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!media || media.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
      {/* Single Image Display */}
      <div className="relative w-full h-full">
        <Image
          src={media[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 70vw"
        />
      </div>

      {/* Navigation Arrows */}
      {media.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {media.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-[#13bfd5]' 
                  : 'bg-black/30 hover:bg-black/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {media.length > 1 && (
        <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-sm z-10">
          {currentIndex + 1} / {media.length}
        </div>
      )}
    </div>
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
