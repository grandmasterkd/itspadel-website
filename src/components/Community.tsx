import communityData from '../../languages/padelcommunity.json'



export default function Community() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-32 overflow-visible">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="w-full mx-auto grid place-items-center text-center mb-16">
          <h2 className="font-bison max-w-[500px] text-4xl md:text-6xl leading-tight">
            {communityData.headline}
          </h2>
        </div>

        {/* Cards */}
        <div className="relative w-full h-[40rem] mx-auto flex justify-center">
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(-20rem, 7.3rem) rotate(-28deg) scale(0.7756)',
              zIndex: 1,
            }}
          >
            <img
              src={communityData.images[0].image}
              alt={communityData.images[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(-11rem, 4rem) rotate(-14deg) scale(0.8498)',
              zIndex: 2,
            }}
          >
            <img
              src={communityData.images[1].image}
              alt={communityData.images[1].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(0rem, 0rem) scale(0.98)',
              zIndex: 20,
            }}
          >
            <img
              src={communityData.images[2].image}
              alt={communityData.images[2].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(20rem, 7.3rem) rotate(28deg) scale(0.7756)',
              zIndex: 1,
            }}
          >
            <img
              src={communityData.images[3].image}
              alt={communityData.images[3].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute w-[22rem] h-[28rem] rounded-[2rem] overflow-hidden shadow-lg"
            style={{
              transform: 'translate(11rem, 4rem) rotate(14deg) scale(0.8498)',
              zIndex: 2,
            }}
          >
            <img
              src={communityData.images[5].image}
              alt={communityData.images[5].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro */}
        <p className="text-center mt-0 mb-0 font-inter text-lg">
          Follow us on social media
        </p>

        {/* Links */}
        <div className="flex justify-center gap-8 text-lg font-inter">
          {[
            { label: 'tiktok', href: 'https://www.tiktok.com/@padel' },
            { label: 'instagram', href: 'https://www.instagram.com/padel' },
            { label: 'youtube', href: 'https://www.youtube.com/padel' },
            { label: 'twitch', href: 'https://www.twitch.tv/padel' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span className="transition-colors group-hover:text-[#009FF3]">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#009FF3] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
