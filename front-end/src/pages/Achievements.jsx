import React, { Component } from 'react'
import MagicBento from '@/components/ui/MagicBento'
import BlurText from '@/components/ui/BlurText'
import './Achievements.css'

export default class Achievements extends Component {
  render() {
    return (
      <div className="achievements-container">
        <BlurText
          text="Achievements and Experiences"
          delay={150}
            animateBy="words"
            direction="top"
            className="achievements-blur-text"
        />
        <MagicBento 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        />
      </div>
    )
  }
}
