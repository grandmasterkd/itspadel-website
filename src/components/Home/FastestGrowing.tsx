import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import homeData from '../../../languages/padelhome.json'

const FastestGrowing = () => {
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={homeData.fastestGrowing.image}
              alt="Padel court"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-bison text-4xl md:text-5xl mb-6"
              variants={itemVariants}
            >
              {homeData.fastestGrowing.headline}
            </motion.h2>
            <motion.p
              className="font-inter text-lg text-gray-700 mb-8"
              variants={itemVariants}
            >
              {homeData.fastestGrowing.paragraph}
            </motion.p>
            <motion.div
              className="flex gap-4"
              variants={itemVariants}
            >
              <Link
                to={homeData.fastestGrowing.cta1Link}
                className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
              >
                {homeData.fastestGrowing.cta1Text}
              </Link>
              <Link
                to={homeData.fastestGrowing.cta2Link}
                className="bg-white text-black px-6 py-3 font-inter font-medium border border-gray-300 hover:bg-gray-50 transition-colors uppercase"
              >
                {homeData.fastestGrowing.cta2Text}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FastestGrowing