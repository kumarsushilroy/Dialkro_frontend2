import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleContentCount, setVisibleContentCount] = useState(6)
  // Your list of available content
  const availableContent = [
    {
      images: '/Restaurant/indianfood.webp',
      prompt: 'Indian Food',
      onClick: '/restaurantcategory/indianfood'
    },
    {
      images: '/Restaurant/globalcuisines.webp',
      prompt: 'Global Cuisines',
      onClick: '/restaurantcategory/indianfood'
    },
    {
      images: '/Restaurant/nightlife.webp',
      prompt: 'Night Style',
      onClick: '/restaurantcategory/indianfood'
    },
    {
      images: '/Restaurant/sweettooth.webp',
      prompt: 'Sweet Tooth',
      onClick: '/restaurantcategory/indianfood'
    },
    {
      images: '/Restaurant/quickbites.webp',
      prompt: 'Quick Bites',
      onClick: '/restaurantcategory/indianfood'
    },
    {
      images: '/Restaurant/foodie.webp',
      prompt: 'Foodie',
      onClick: '/restaurantcategory/indianfood'
    }
  ]

  const filteredContent = availableContent.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSuggestionClick = () => {
    // Handle the card click here, e.g., navigate to the corresponding route
    navigate('/restaurant')
  }

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      // Enter key pressed
      redirectToFirstSuggestion()
    }
  }
  // Function to automatically redirect to the first suggestion
  const redirectToFirstSuggestion = () => {
    if (filteredContent.length > 0) {
      handleSuggestionClick(filteredContent[0])
    }
  }

  // Render the filtered content
  const renderFilteredContent = () => {
    if (filteredContent.length === 0) {
      return (
        <div className="ml-16 flex items-center justify-center gap-10">
          <p>No matching content found.</p>
        </div>
      )
    }

    const handleViewMoreClick = () => {
      // Show 6 more cards when the "View More" button is clicked
      setVisibleContentCount((prevCount) => prevCount + 6)
    }

    return (
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="grid items-center justify-center gap-7 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {filteredContent.slice(0, visibleContentCount).map((content, index) => (
            <div key={index}>
              <AlignmentSubCards
                images={content.images}
                prompt={content.prompt}
                onClick={content.onClick}
              />
            </div>
          ))}
        </div>
        {filteredContent.length > visibleContentCount && (
          <div className="mt-7 flex items-end justify-end">
            <button
              onClick={handleViewMoreClick}
              className="h-10 w-40 rounded-md bg-blue-500 text-white hover:bg-blue-400">
              View More Category
            </button>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className=" container flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <form className="mt-3 w-96 px-6">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border bg-gray-50 py-2 pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={redirectToFirstSuggestion}
              onKeyDown={handleEnterKeyPress}
            />
          </div>
        </form>
      </div>
      <div className="flex items-start justify-start">{renderFilteredContent()}</div>
    </div>
  )
}

export default SearchBar
