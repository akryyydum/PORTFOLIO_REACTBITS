import React, { Component } from 'react'
import SplitText from "./SplitText";
import SpotifyPill from '../components/ui/SpotifyPill';
import './Hero.css';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
export default class Hero extends Component {
  componentDidMount() {
    // Show Spotify pill only when Hero is mounted
    const spotifyContainer = document.querySelector('.hero-section .spotify-container');
    if (spotifyContainer) {
      spotifyContainer.style.display = 'block';
    }
  }

  componentWillUnmount() {
    // Hide Spotify pill when leaving Hero section
    const spotifyContainer = document.querySelector('.hero-section .spotify-container');
    if (spotifyContainer) {
      spotifyContainer.style.display = 'none';
    }
  }

  render() {
    return (
      <div className="hero-section">
        <SplitText
        text="Hello, Welcome to my Portfolio!"
        className="text-2xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
        />
        
        <div className="glass-button-container">
          <button className="glass-button">
            <span className="button-text">Explore My Work</span>
            <span className="button-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>
        
        <div className="spotify-container">
          <SpotifyPill />
        </div>
      </div>
    )
  }
}
