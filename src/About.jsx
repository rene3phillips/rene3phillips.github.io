import react from 'react'
import './About.css'

function About() {

  return (
    <>
      <div className="about-me-container">
        <h1>About Me</h1>
        <p>
          <span className="hello">Hello!</span> My name is Natasha, and I'm a computer engineering student at the 
          University of Central Florida with a strong interest in the space industry. I’m fascinated by space, 
          mathematics, and computers, and I'm always looking for ways to combine these interests in my work. 
          My academic journey has been a bit unconventional, but I love diving into hands-on projects that challenge 
          my skills. I’m particularly excited about the idea of contributing to fields like aerospace engineering, 
          satellite technology, or even software development for space missions. There’s so much potential 
          in this area, and I’m eager to explore where I can make an impact.
        </p>
        <div className="about-me-links">
          <a href="#projects">My Projects</a>
          <a href="#skills">My Skills</a>
          <a href="#contact-me">Contact Me!</a>
        </div>
      </div>
    </>
  )
}

export default About