import React from 'react'
import Navbar from '../FrontPage/Navbar'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Footer from '../FrontPage/Footer'
import Project from '../FrontPage/Project'
import { Galaxy } from '../library/Galaxy'
export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Project/>
      <Skills/>
    <Contact/>
      <Footer/>
     
    </div>
  )
}
