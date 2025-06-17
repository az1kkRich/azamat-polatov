import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import HowIWork from './components/HowIWork'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <HowIWork />
      <div className='h-[100vh] bg-gray-800' id='projects'></div>
      <div className='h-[100vh] bg-gray-700' id='skills'></div>
      <div className='h-[100vh] bg-gray-600' id='blog'></div>
    </>
  )
}

export default App
