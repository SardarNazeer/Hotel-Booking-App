import React from 'react'
import Hero from '../components/Hero'
import FeaturedsDestination from '../components/FeaturedsDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedsDestination/>
      <ExclusiveOffer/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home
