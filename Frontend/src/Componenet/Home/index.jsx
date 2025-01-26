import React from 'react'
import Hero from './Hero'
import Features from './Features'
import NewsletterSubscription from './NewsLetter'
import ReviewsSection from './Review'
import FAQ from '../FAQ'
import Latest from '../Latest'

export const Home = () => {
  return (
    <>
      <Hero/>
      <Features/>
      <Latest/>
      <NewsletterSubscription/>
      <ReviewsSection/>
      <FAQ/>
    
    </>
  )
}
