import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/itspadel-homehero-bg.webp)' }}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex items-end min-h-screen pl-8 md:pl-16 lg:pl-32 pb-20">
        <div className="max-w-2xl text-left">
          <h1 className="font-bison font-bold text-6xl lg:text-8xl text-white mb-4 tracking-tighter">
            DISCOVER THE <br/> PADEL LIFESTYLE
          </h1>
          <p className="font-inter text-base md:text-xl font-medium text-white mb-8 tracking-tight">
            Where the rallies bring you in, but the people make you stay.<br />
            Play, connect and feel part of something real.
          </p>
          <div className="flex gap-4">
            <Link to="/clubs" className="bg-[#009FF3] text-white px-6 py-3 font-inter font-medium tracking-tight hover:bg-[#0080cc] transition-colors">
              SELECT YOUR CLUB
            </Link>
            <Link to="/how-to-book" className="bg-white text-black px-6 py-3 font-inter font-medium tracking-tight hover:bg-gray-100 transition-colors">
              HOW TO BOOK
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero