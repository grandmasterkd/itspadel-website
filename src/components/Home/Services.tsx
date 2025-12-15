import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import homeData from '../../../languages/padelhome.json'

const Services = () => {
  const services = homeData.services

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Row 1: 40% - 60% */}
        <div className="grid grid-cols-[30%_70%] gap-8">
          {services.slice(0, 2).map((service, index) => (
            <motion.div
              key={service.headline}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={service.image} alt={service.headline} className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bison text-2xl mb-2">{service.headline}</h3>
                <p className="font-inter text-sm mb-4 max-w-xs text-white">{service.paragraph}</p>
                <Link to={service.ctaLink} className="inline-flex items-center bg-white text-[#009FF3] px-4 py-2 font-inter font-medium hover:bg-gray-100 transition-colors">
                  {service.ctaText} <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Row 2: 70% - 30% */}
        <div className="grid grid-cols-[70%_30%] gap-8">
          {services.slice(2, 4).map((service, index) => (
            <motion.div
              key={service.headline}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 2) * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={service.image} alt={service.headline} className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-bison text-2xl mb-2">{service.headline}</h3>
                <p className="font-inter text-sm mb-4 max-w-xs text-white">{service.paragraph}</p>
                <Link to={service.ctaLink} className="inline-flex items-center bg-white text-[#009FF3] px-4 py-2 font-inter font-medium hover:bg-gray-100 transition-colors">
                  {service.ctaText} <ChevronRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services