import React, { useEffect, useRef } from 'react';
import './Projects.css';
import mercury from './assets/images/mercury.png';
import venus from './assets/images/venus.png';
import earth from './assets/images/earth.png';
import mars from './assets/images/mars.png';
import jupiter from './assets/images/jupiter.png';
import saturn from './assets/images/saturn.png';

function Projects() {
  // References to Projects
  const blueskyRef = useRef(null);
  const booknookRef = useRef(null);
  const toshtoolsRef = useRef(null);
  const replayRef = useRef(null);
  const fairyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Helper function to toggle the 'active' class
      const toggleActiveClass = (ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            ref.current.classList.add('active'); // Add class when visible
          } else {
            ref.current.classList.remove('active'); // Remove class when out of view
          }
        }
      };

      // Apply the function to all project references
      toggleActiveClass(blueskyRef);
      toggleActiveClass(booknookRef);
      toggleActiveClass(toshtoolsRef);
      toggleActiveClass(replayRef);
      toggleActiveClass(fairyRef);
    };

    // Scroll Event Listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Projects">
      <main>
        {/* Projects Section */}
        <h1 className="projects-header">My Projects</h1>
        <section className="projects-section" id="projects">

          {/* Bluesky Bot */}
          <a
            ref={blueskyRef}
            className="project-item project-item-blusky"
            href="https://github.com/rene3phillips/bsky_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-bsky"></div>
            <div className="project-title">Automation Tool for Bluesky</div>
            <div className="description">
              A bot that uses the AT Protocol API to automate interactions and streamline activities on the Bluesky social media platform.
            </div>
            <div className="keywords">
              <div>Python</div>
              <div>RESTful APIs</div>
              <div>JSON</div>
              <div>Git</div>
              <div>GitHub</div>
            </div>
          </a>
          <div className="planet">

            <img className="venus" src={venus} alt="venus"/>
          </div>

          {/* BookNook */}
          <div className="planet">

            <img className="earth" src={earth} alt="earth"/>
          </div>
          <a
            ref={booknookRef}
            className="project-item project-item-book-nook"
            href="https://www.rene3phillips.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-book-nook"></div>
            <div className="project-title">Book Tracking App: bookNook</div>
            <div className="description">
              A book organization app with Google Books API, user authentication, and real-time Firebase syncing.            </div>
            <div className="keywords">
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <div>React.js</div>
            </div>
            <div className="keywords"> 
              <div>RESTful APIs</div>
              <div>SEO</div>
              <div>Git</div>
              <div>GitHub</div>
            </div>
          </a>
          <div>
          </div>

          {/* ToshTools */}
          <div></div>
          <a
            ref={toshtoolsRef}
            className="project-item project-item-tosh-tools"
            href="https://github.com/rene3phillips/tosh_tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-tosh-tools"></div>
            <div className="project-title">Command-Line Interface: ToshTools</div>
            <div className="description">
              An all-in-one utility suite that streamlines tasks with a calculator and customizable options.
            </div>
            <div className="keywords">
              <div>C</div>
              <div>Git</div>
              <div>GitHub</div>
            </div>
          </a>
          <div className="planet">

            <img className="mars" src={mars} alt="mars"/>
          </div>

          {/* 90s Replay */}
          <div className="planet">

            <img className="jupiter" src={jupiter} alt="jupiter"/>
          </div>
          <a
            ref={replayRef}
            className="project-item project-item-90s-replay"
            href="https://www.90sreplay.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-checklist"></div>
            <div className="project-title">E-Commerce Website for 90sReplay</div>
            <div className="description">
              A nostalgic website for retro games and '90s memorabilia, complete with a checkout system.
            </div>
            <div className="keywords">
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <div>SEO</div>
              <div>JSON</div>
              <div>Git</div>
              <div>GitHub</div>
            </div>
          </a>
          <div>
            
          </div>

          {/* Fairy Godmother */}
          <div></div>
          <a
            ref={fairyRef}
            className="project-item project-item-fairy"
            href="https://zombiequeenxoxo.wixsite.com/fairygodmother"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-alien"></div>
            <div className="project-title">E-Commerce Website for Fairy Godmother, LLC</div>
            <div className="description">
              A responsive website for a cleaning business, featuring service information and booking options.
            </div>
            <div className="keywords">
              <div>Wix</div>
              <div>SEO</div>
            </div>
          </a>
          <div className="planet">
             <img className="saturn" src={saturn} alt="saturn"/>

          </div>
          
        </section>
      </main>
    </div>
  );
}

export default Projects;