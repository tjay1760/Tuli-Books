import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Solutions from './Solutions'
import OnboardingJourney from './Journey'
import Platforms from './Platforms'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solutions/>
      <OnboardingJourney />
      <Platforms />
    </div>
  )
}

export default Homepage