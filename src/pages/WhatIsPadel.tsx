import { motion } from 'framer-motion'

const WhatIsPadel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>What is Padel Page</h1>
    </motion.div>
  )
}

export default WhatIsPadel