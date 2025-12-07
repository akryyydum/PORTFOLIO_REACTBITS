import React, { Component } from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import ColorBlends from '../bg/ColorBlends';
import './Home.css';
import Achievements from './Achievements';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollWrapperRef = React.createRef();
    this.state = {
      currentSection: 0,
      totalSections:4
    };
  }

  componentDidMount() {
    const wrapper = this.scrollWrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const scrollLeft = wrapper.scrollLeft;
      const sectionWidth = window.innerWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      
      if (newSection !== this.state.currentSection) {
        this.setState({ currentSection: newSection });
      }
    };

    wrapper.addEventListener('scroll', handleScroll);
    
    // Cleanup
    this.scrollCleanup = () => {
      wrapper.removeEventListener('scroll', handleScroll);
    };
  }

  componentWillUnmount() {
    if (this.scrollCleanup) {
      this.scrollCleanup();
    }
  }

  scrollToSection = (direction) => {
    const wrapper = this.scrollWrapperRef.current;
    if (!wrapper) return;

    const sectionWidth = window.innerWidth;
    const newSection = this.state.currentSection + direction;

    if (newSection >= 0 && newSection < this.state.totalSections) {
      wrapper.scrollTo({
        left: sectionWidth * newSection,
        behavior: 'smooth'
      });
      this.setState({ currentSection: newSection });
    }
  };

  render() {
    const { currentSection, totalSections } = this.state;

    return (
      <>
        {/* Background */}
        <div className="background-container">
          <ColorBlends
            rotation={45}
            speed={0.2}
            colors={['#ff6b6b', '#ffd93d', '#6bcB77']}
            transparent={true}
            autoRotate={5}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
          />
        </div>

        {/* Navigation Arrows */}
        {currentSection > 0 && (
          <button 
            className="scroll-arrow left-arrow"
            onClick={() => this.scrollToSection(-1)}
            aria-label="Previous section"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}

        {currentSection < totalSections - 1 && (
          <button 
            className="scroll-arrow right-arrow"
            onClick={() => this.scrollToSection(1)}
            aria-label="Next section"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}

        {/* Horizontal Scroll Container */}
        <div className="horizontal-scroll-wrapper" ref={this.scrollWrapperRef}>
          <div className="horizontal-scroll-container">
            <section className="scroll-section">
              <Hero key={`hero-${currentSection === 0}`} />
            </section>
            <section className="scroll-section">
              <About key={`about-${currentSection === 1}`} />
            </section>
            <section className="scroll-section">
              <Education key={`education-${currentSection === 2}`} />
            </section>
            <section className="scroll-section">
              <Achievements key={`achievements-${currentSection === 3}`} />
            </section>
          </div>
        </div>
      </>
    )
  }
}
