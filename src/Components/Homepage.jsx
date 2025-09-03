import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Solutions from './Solutions'
import OnboardingJourney from './Journey'
import Platforms from './Platforms'
import Testimonials from './Testimonials'
import DemoSection from './Features'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Solutions/>
      <OnboardingJourney />
      <Platforms />
      <Testimonials />
      <DemoSection />
      <Footer />
    </div>
  )
}

export default Homepage