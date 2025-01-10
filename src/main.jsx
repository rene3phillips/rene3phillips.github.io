import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Parallax from './Parallax.jsx'
import About from './About.jsx'
import Projects from './Projects'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parallax />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </StrictMode>,
)