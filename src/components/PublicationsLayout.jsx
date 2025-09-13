
import { useState } from 'react'

function PublicationDropdown({ title, publications, bgColor = "bg-white" }) {
  const [isOpen, setIsOpen] = useState(false);

  if (publications.length === 0) {
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
              {title} ({publications.length})
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
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 animate-fade-in">
            {publications.map((publication, index) => {
              // Create a more unique key using hash of title + index
              const uniqueKey = `${publication.title?.substring(0, 20) || 'untitled'}-${index}-${publication.year || 'no-year'}`;
              return (
                <div
                  key={uniqueKey}
                  className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                  <div className="min-w-0 flex-1">
                    <a href={publication.link} className="focus:outline-none" target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">
                        {publication.year && publication.year !== "" ? `${publication.year}, ${publication.title}` : publication.title}
                      </p>
                      <p className="text-sm text-gray-500">{publication.body}</p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
}

// Group publications by year
function groupPublicationsByYear(publications) {
  const grouped = {};
  
  publications.forEach(pub => {
    let year = pub.year;
    
    // Handle empty or missing years
    if (!year || year.trim() === '') {
      year = 'Other';
    }
    
    const yearInt = parseInt(year);
    
    // Group 2015 and earlier together, but exclude 'Other'
    let groupKey;
    if (year === 'Other') {
      groupKey = 'Other';
    } else if (yearInt && yearInt <= 2015) {
      groupKey = '2015 and Earlier';
    } else {
      groupKey = year;
    }
    
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(pub);
  });
  
  // Sort years in descending order, but keep "2015 and Earlier" and "Other" at the end
  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === 'Other') return 1;
    if (b === 'Other') return -1;
    if (a === '2015 and Earlier') return 1;
    if (b === '2015 and Earlier') return -1;
    
    // Handle numeric years
    const aNum = parseInt(a);
    const bNum = parseInt(b);
    
    if (!isNaN(aNum) && !isNaN(bNum)) {
      return bNum - aNum;
    }
    
    // Fallback to string comparison
    return b.localeCompare(a);
  });
  
  return sortedYears.map(year => ({
    year,
    publications: grouped[year]
  }));
}

export default function Example({publications}) {
  // Group publications by year
  const publicationsByYear = groupPublicationsByYear(publications);
  
  // Optional: Debug log for missing publications (can be removed in production)
  const totalGrouped = publicationsByYear.reduce((sum, group) => sum + group.publications.length, 0);
  if (totalGrouped !== publications.length) {
    console.warn(`Missing publications: Expected ${publications.length}, but grouped ${totalGrouped}`);
  }

  return (
    <div className="flex flex-col gap-4">
      {publicationsByYear.map(({ year, publications }) => (
        <PublicationDropdown 
          key={year}
          title={year}
          publications={publications}
          bgColor="bg-gray-50"
        />
      ))}
    </div>
  )
}