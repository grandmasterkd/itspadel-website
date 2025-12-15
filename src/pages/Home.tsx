import Hero from '../components/Hero'
import DownloadPadel from '../components/Home/DownloadPadel'
import FindYourClub from '../components/Home/FindYourClub'
import FastestGrowing from '../components/Home/FastestGrowing'
import Services from '../components/Home/Services'
import homeData from '../../languages/padelhome.json'

const Home = () => {
  return (
    <div>
      <Hero
        image={homeData.hero.backgroundImage}
        headline={homeData.hero.headline}
        paragraph={homeData.hero.paragraph}
        ctaText={homeData.hero.ctaText}
        ctaLink={homeData.hero.ctaLink}
        cta2Text={homeData.hero.cta2Text}
        cta2Link={homeData.hero.cta2Link}
      />
      <DownloadPadel />
      <FindYourClub />
      <FastestGrowing />
      <Services />
    </div>
  )
}

export default Home