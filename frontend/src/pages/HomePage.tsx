import React from 'react'
import { APP_NAME } from '../constants/content'
import Hero from '../components/Home/Hero'
import Features from '../components/common/Features'
import Testimonials from '../components/Home/Testimonials'
import CTA from '../components/common/CTA'

const HomePage = () => {
  return (
    <div className='space-y-4'>
      <Hero/>
      <Features/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default HomePage