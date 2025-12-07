import React, { Component } from 'react'
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack'
import './Education.css'
import BlurText from '@/components/ui/BlurText'
export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      showIndicator: true
    };
  }

  componentDidMount() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  checkIfMobile = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  handleScroll = () => {
    if (this.state.showIndicator) {
      this.setState({ showIndicator: false });
    }
  };

  render() {
    
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

    return (
      <div className="education-container">
        <BlurText
  text="Education"
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
                <img src="https://i.ibb.co/nsHdPW6n/246000915-104309308714294-2650184785006124055-n-removebg-preview.png" alt="Saint Vincent School Logo" />
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
                <img src="https://i.ibb.co/wZsxX86Z/327258096-530064095601002-1302641570849325418-n-removebg-preview.png" alt="Adamson University Logo" />
              </div>
            </div>
          </ScrollStackItem>
          <ScrollStackItem>
            <div className="education-card-content">
              <div className="education-info">
                <h2>Saint Mary's University</h2>
                <p>Bachelor of Science in Information Technology</p>
                <p>2022-Present</p>
              </div>
              <div className="education-logo">
                <img src="https://i.ibb.co/cS74wj3b/207187920-4412100725477161-5409234827718222029-n-removebg-preview.png" alt="Saint Mary's University Logo" />
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
        {this.state.showIndicator && (
          <div className="scroll-indicator">
            {this.state.isMobile ? (
              <div className="swipe-indicator">
                <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                  <path
                    d="M20 5 L20 45 M10 35 L20 45 L30 35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Swipe Down</span>
              </div>
            ) : (
              <div className="scroll-down-indicator">
                <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
                  <rect
                    x="10"
                    y="5"
                    width="10"
                    height="30"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="15"
                    cy="12"
                    r="2"
                    fill="currentColor"
                    className="scroll-wheel"
                  />
                  <path
                    d="M10 40 L15 45 L20 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Scroll Down</span>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}
