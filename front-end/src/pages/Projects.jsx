import React, { Component } from 'react'
import DomeGallery from './DomeGallery';
import BlurText from '@/components/ui/BlurText';
export default class Projects extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <DomeGallery />
          </div>
          <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', justifyContent: 'center', display: 'flex' , marginTop: '2rem'}}>
            <BlurText
              text="Arts & Designs"
              delay={150}
              animateBy="words"
              direction="top"
              fontSize="3rem"
              
            />
          </div>
        </div>
      </div>
    )
  }
}
