import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import faqData from '../../languages/faq.json'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bison text-4xl md:text-5xl mb-4">{faqData.headline}</h2>
          <p className="font-inter text-lg text-gray-600 mb-8">{faqData.subtext}</p>
          <Link
            to={faqData.ctaLink}
            className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium hover:bg-[#0080cc] transition-colors uppercase"
          >
            {faqData.ctaText}
          </Link>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.faqs.map((faq: { question: string; answer: string }, index: number) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors"
              >
                <span className="font-inter font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-500 transition-transform duration-300" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="font-inter text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ