import Navbar from '@/component/Navbar'
import AIProjects from '@/component/section/Aisection'
import ConsultingSection from '@/component/section/Consiltant'
import ContactSection from '@/component/section/Contact'
import Footer from '@/component/section/Footer'
import Hero from '@/component/section/Hero'
import HowItWorksFestival from '@/component/section/HowItWorks'
import TestimonialSection from '@/component/section/Testimonials'
import WhyUs from '@/component/section/Whyus'
import React from 'react'


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <AIProjects />
      <ConsultingSection />
      <HowItWorksFestival />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page