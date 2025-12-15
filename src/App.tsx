import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Coaching from './pages/Coaching'
import Events from './pages/Events'
import WhatIsPadel from './pages/WhatIsPadel'
import Clubs from './pages/Clubs'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/events" element={<Events />} />
        <Route path="/what-is-padel" element={<WhatIsPadel />} />
        <Route path="/clubs" element={<Clubs />} />
      </Routes>
    </>
  )
}

export default App