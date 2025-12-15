import { motion } from 'framer-motion'

const Events = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Events Page</h1>
    </motion.div>
  )
}

export default Events