 import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/itspadel-homehero-bg.webp)' }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex items-end min-h-screen pl-8 md:pl-16 lg:pl-32 pb-20">
        <motion.div
          className="max-w-2xl text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-bison font-bold text-6xl lg:text-8xl text-white mb-4 tracking-tighter"
            variants={itemVariants}
          >
            DISCOVER THE <br/> PADEL LIFESTYLE
          </motion.h1>
          <motion.p
            className="font-inter text-base md:text-xl font-medium text-white mb-8 tracking-tight"
            variants={itemVariants}
          >
            Where the rallies bring you in, but the people make you stay.<br />
            Play, connect and feel part of something real.
          </motion.p>
          <motion.div
            className="flex gap-4"
            variants={itemVariants}
          >
            <Link to="/clubs" className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium tracking-tight hover:bg-[#0080cc] transition-colors">
              SELECT YOUR CLUB
            </Link>
            <Link to="/how-to-book" className="bg-white text-black px-6 py-3 font-inter font-medium tracking-tight hover:bg-gray-100 transition-colors">
              HOW TO BOOK
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero