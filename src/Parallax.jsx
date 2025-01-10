import React, { useEffect, useRef } from 'react';
import './Parallax.css';
import background from './assets/images/parallax/background.png';
import moon from './assets/images/parallax/moon.png';
import teal from './assets/images/parallax/teal.png';
import leftCloud from './assets/images/parallax/left-cloud.png';
import rightCloud from './assets/images/parallax/right-cloud.png';
import avatar from './assets/images/parallax/avatar.png';
import purple from './assets/images/parallax/purple.png';

const Parallax = () => {
  // References to Parallax Images
  const leftCloudRef = useRef(null);
  const rightCloudRef = useRef(null);
  const avatarRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      // Parallax Movement
      if (leftCloudRef.current) leftCloudRef.current.style.left = `${value * -1.5}px`;
      if (rightCloudRef.current) rightCloudRef.current.style.left = `${value * 1.5}px`;
      if (avatarRef.current) {
        avatarRef.current.style.left = `${value * 1.5}px`;
        avatarRef.current.style.top = `${value * -1.5}px`;
      }
      if (textRef.current) textRef.current.style.marginTop = `${value * 2.5}px`;
    };

    // Scroll Event Listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Parallax Section
    <div className="parallax-section">
        <img src={background} alt="background" />
        <img src={moon} alt="moon" />
        <img src={teal} alt="teal" />
        <img ref={leftCloudRef} src={leftCloud} alt="left cloud" />
        <img ref={rightCloudRef} src={rightCloud} alt="right cloud" />
        <div className="name" ref={textRef}>Natasha R. Phillips</div>
        <img className="avatar" ref={avatarRef} src={avatar} alt="avatar" />
        <img src={purple} alt="purple" />
    </div>
  );
}

export default Parallax;