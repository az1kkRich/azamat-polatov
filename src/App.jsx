import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'
import Skills from './components/Skills'
import BlogSection from './components/Blog'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <HowIWork />
      <Projects />
      <Skills />
      <BlogSection />
    </>
  )
}

export default App
