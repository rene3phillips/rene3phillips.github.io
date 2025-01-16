import React, { useRef } from 'react'; // Import useRef
import './Skills.css';

function Skills() {
  const skillsRef = useRef(null);

  const handleMouseMove = (e) => {
    const skillsElement = skillsRef.current;
    if (!skillsElement) return;

    const rect = skillsElement.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    const moveAmount = 150; 
    const xMovement = (offsetX / rect.width) * moveAmount;
    const yMovement = (offsetY / rect.height) * moveAmount;

    skillsElement.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
  };

  const handleMouseLeave = () => {
    if (skillsRef.current) {
      skillsRef.current.style.transform = 'translate(0, 0)'; 
    }
  };

  return (
    <>
      <div className="my-skills-container" id="skills">
        <h1>My Skills</h1>
        <div
          ref={skillsRef}
          className="skills-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2>Web Development:</h2>
          <p>HTML, CSS, JavaScript, React.js, Three.js, API Integration, SEO</p>

          <h2>Programming Languages:</h2>
          <p>C, C++, Python, Java</p>

          <h2>Database & Information Management:</h2>
          <p>XML, SQL, PHP, JSON</p>

          <h2>Version Control:</h2>
          <p>Git, GitHub</p>

          <h2>Design Tools:</h2>
          <p>Blender, Procreate</p>

          <h2>Operating Systems:</h2>
          <p>MacOS, Windows</p>
        </div>
      </div>
    </>
  );
}

export default Skills;
