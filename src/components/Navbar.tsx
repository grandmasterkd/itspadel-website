import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10">
      <div className="container mx-auto px-8 md:px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src="/itspadel-logo-main.svg" alt="Itspadel Logo" className="h-8" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/about" className="font-inter tracking-tight hover:text-blue-600">About</Link>
          <Link to="/coaching" className="font-inter tracking-tight hover:text-blue-600">Coaching</Link>
          <Link to="/events" className="font-inter tracking-tight hover:text-blue-600">Events</Link>
          <Link to="/what-is-padel" className="font-inter tracking-tight hover:text-blue-600">What is Padel</Link>
          <Link to="/clubs" className="font-inter tracking-tight hover:text-blue-600">Clubs</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-2">
            <Link to="/about" className="block font-inter tracking-tight hover:text-blue-600" onClick={toggleMenu}>About</Link>
            <Link to="/coaching" className="block font-inter tracking-tight hover:text-blue-600" onClick={toggleMenu}>Coaching</Link>
            <Link to="/events" className="block font-inter tracking-tight hover:text-blue-600" onClick={toggleMenu}>Events</Link>
            <Link to="/what-is-padel" className="block font-inter tracking-tight hover:text-blue-600" onClick={toggleMenu}>What is Padel</Link>
            <Link to="/clubs" className="block font-inter tracking-tight hover:text-blue-600" onClick={toggleMenu}>Clubs</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar