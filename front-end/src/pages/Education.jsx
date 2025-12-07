import React, { Component } from 'react'
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack'
import './Education.css'
import BlurText from '@/components/ui/BlurText'
export default class Education extends Component {

    
  render() {
    
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

    return (
      <div className="education-container">
        <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="education-blur-text"
/>
        <ScrollStack>
          <ScrollStackItem>
            <div className="education-card-content">
              <div className="education-info">
                <h2>Saint Vincent School</h2>
                <p>Elementary and Secondary Education</p>
                <p>2011-2021</p>
              </div>
              <div className="education-logo">
                <img src="https://via.placeholder.com/120?text=SVS" alt="Saint Vincent School Logo" />
              </div>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="education-card-content">
              <div className="education-info">
                <h2>Adamson University</h2>
                <p>Bachelor of Science in Computer Engineering</p>
                <p>2021-2022</p>
              </div>
              <div className="education-logo">
                <img src="https://via.placeholder.com/120?text=AdU" alt="Adamson University Logo" />
              </div>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="education-card-content">
              <div className="education-info">
                <h2>Saint Mary's University</h2>
                <p>Bachelor of Science in Computer Information Technology</p>
                <p>2022-Present</p>
              </div>
              <div className="education-logo">
                <img src="https://via.placeholder.com/120?text=SMU" alt="Saint Mary's University Logo" />
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>  
      </div>
    )
  }
}
