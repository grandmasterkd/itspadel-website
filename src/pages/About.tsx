import Hero from '../components/Hero'
import Mission from '../components/About/Mission'
import Values from '../components/About/Values'
import Team from '../components/About/Team'
import Testimonials from '../components/About/Testimonials'
import aboutData from '../../languages/padelabout.json'

const About = () => {
  return (
    <div>
      <Hero
        image={aboutData.hero.backgroundImage}
        headline={aboutData.hero.headline}
        paragraph={aboutData.hero.paragraph}
        ctaText={aboutData.hero.ctaText}
        ctaLink={aboutData.hero.ctaLink}
      />
      <Mission />
      <Values />
      <Team />
      <Testimonials />
    </div>
  )
}

export default About