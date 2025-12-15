import { motion } from 'framer-motion'
import communityData from '../../languages/padelcommunity.json'

const Community = () => {


  const transforms = [
    'translate(-15rem, 7.3rem) rotate(-21deg) scale(0.7756)',
    'translate(-11rem, 4rem) rotate(-14deg) scale(0.8498)',
    'translate(-6rem, 1.3rem) rotate(-7deg) scale(0.9346)',
    'translate(0rem)',
    'translate(6rem, 1.3rem) rotate(7deg) scale(0.9346)',
    'translate(11rem, 4rem) rotate(14deg) scale(0.8498)',
    'translate(15rem, 7.3rem) rotate(21deg) scale(0.7756)'
  ]

  const zIndexes = [1, 2, 3, 10, 3, 2, 1]

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bison text-4xl md:text-5xl mb-4">CONNECT WITH OUR ONLINE<br />COMMUNITY</h2>
          <p className="font-inter text-lg text-gray-600">Follow us on social media</p>
        </motion.div>

        <div className="relative h-96 flex justify-center items-center">
            {communityData.map((item: {image: string, alt: string}, index: number) => (
            <motion.div
              key={index}
              className="absolute w-40 h-40 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                transform: transforms[index],
                zIndex: zIndexes[index],
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
         </div>

         <div className="text-center mt-8">
           <p className="font-inter text-lg text-gray-600 mb-4">Follow us on social media</p>
           <div className="flex justify-center space-x-6">
             <a href="https://www.instagram.com/padel" target="_blank" rel="noopener noreferrer" className="text-[#009FF3] hover:text-blue-700 font-inter">Instagram</a>
             <a href="https://www.tiktok.com/@padel" target="_blank" rel="noopener noreferrer" className="text-[#009FF3] hover:text-blue-700 font-inter">TikTok</a>
             <a href="https://www.youtube.com/padel" target="_blank" rel="noopener noreferrer" className="text-[#009FF3] hover:text-blue-700 font-inter">YouTube</a>
             <a href="https://www.twitch.tv/padel" target="_blank" rel="noopener noreferrer" className="text-[#009FF3] hover:text-blue-700 font-inter">Twitch</a>
           </div>
         </div>
       </div>
     </section>
   )
 }

export default Community