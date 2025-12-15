import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const FindYourClub = () => {
  const clubs = [
    { name: 'Alderley Park', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1740&auto=format&fit=crop' },
    { name: 'Manchester', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1740&auto=format&fit=crop' },
    { name: 'Stockport', image: 'https://images.unsplash.com/photo-1617883861744-1197c9a3b90b?q=80&w=1740&auto=format&fit=crop' },
    { name: 'North Leeds', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1740&auto=format&fit=crop' },
    { name: 'Darlington', image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1740&auto=format&fit=crop' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clubs.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [clubs.length])

  const handleClubClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <h2 className="font-bison text-4xl md:text-5xl text-center mb-12">Find your club</h2>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 33.33}%` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {[...clubs, ...clubs.slice(0, 3)].map((club, index) => (
            <div key={`${club.name}-${index}`} className="w-1/3 flex-shrink-0 px-2">
              <div className="relative rounded-2xl overflow-hidden cursor-pointer h-80 md:h-96" onClick={handleClubClick}>
                <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-bison text-2xl md:text-3xl mb-2">{club.name}</h3>
                  <div className="flex items-center font-inter text-base md:text-lg">
                    View Club <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-8 rounded-lg max-w-md mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-bison text-2xl mb-4">Coming Soon</h3>
              <p className="font-inter text-gray-600 mb-6">This club is coming soon. Stay tuned for updates!</p>
              <button
                onClick={closeModal}
                className="bg-[#009FF3] text-white px-6 py-2 font-inter font-medium hover:bg-[#0080cc] transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FindYourClub