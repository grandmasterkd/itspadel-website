import Hero from '../components/Hero'
import Description from '../components/Events/Description'
import Companies from '../components/Events/Companies'
import WhatMakesDifferent from '../components/Events/WhatMakesDifferent'
import Experience from '../components/Events/Experience'
import eventsData from '../../languages/padelevents.json'

const Events = () => {
  return (
    <div>
      <Hero
        image={eventsData.hero.backgroundImage}
        headline={eventsData.hero.headline}
        paragraph={eventsData.hero.paragraph}
      />
      <Description />
      <Companies />
      <WhatMakesDifferent />
      <Experience />
    </div>
  )
}

export default Events