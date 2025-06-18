import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import HowIWork from './components/HowIWork'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <HowIWork />
      <Projects />
      <div className='h-[100vh] bg-gray-700' id='skills'></div>
      <div className='h-[100vh] bg-gray-600' id='blog'></div>
    </>
  )
}

export default App
