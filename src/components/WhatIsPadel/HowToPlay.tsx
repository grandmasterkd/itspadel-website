import { motion } from 'framer-motion'
import { useState } from 'react'
import whatIsPadelData from '../../../languages/padelwhatispadel.json'

interface TabContent {
  racket?: { headline: string; paragraph: string };
  shoes?: { headline: string; paragraph: string };
  balls?: { headline: string; paragraph: string };
}

const HowToPlay = () => {
  const [activeTab, setActiveTab] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section className="py-20 px-8 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bison text-4xl md:text-5xl mb-4">{whatIsPadelData.howToPlay.headline}</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whatIsPadelData.howToPlay.tabs.map((tab: {title: string, content: string | TabContent}, index: number) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 mb-2 rounded-lg font-inter font-medium transition-colors ${
                  activeTab === index
                    ? 'bg-[#009FF3] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(index)}
                variants={itemVariants}
              >
                {tab.title}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="lg:w-2/3 bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bison text-2xl mb-6">{whatIsPadelData.howToPlay.tabs[activeTab].title}</h3>
            {activeTab === 0 ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-bison text-xl mb-2">{(whatIsPadelData.howToPlay.tabs[activeTab].content as TabContent).racket?.headline}</h4>
                  <p className="font-inter text-gray-700">{(whatIsPadelData.howToPlay.tabs[activeTab].content as TabContent).racket?.paragraph}</p>
                </div>
                <div>
                  <h4 className="font-bison text-xl mb-2">{(whatIsPadelData.howToPlay.tabs[activeTab].content as TabContent).shoes?.headline}</h4>
                  <p className="font-inter text-gray-700">{(whatIsPadelData.howToPlay.tabs[activeTab].content as TabContent).shoes?.paragraph}</p>
                </div>
                <div>
                  <h4 className="font-bison text-xl mb-2">{(whatIsPadelData.howToPlay.tabs[activeTab].content as TabContent).balls?.headline}</h4>
                  <p className="font-inter text-gray-700">{(whatIsPadelData.howToPlay.tabs[activeTab].content as TabContent).balls?.paragraph}</p>
                </div>
              </div>
            ) : (
              <p className="font-inter text-gray-700 leading-relaxed">{whatIsPadelData.howToPlay.tabs[activeTab].content as string}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowToPlay