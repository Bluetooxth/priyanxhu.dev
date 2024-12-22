import Contact from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Skills from '@/components/Home/Skills'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <main className='py-12 space-y-10'>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
    </>
  )
}

export default HomePage