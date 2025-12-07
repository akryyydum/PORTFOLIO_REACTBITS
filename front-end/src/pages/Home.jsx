import React, { Component } from 'react'
import Navbar from './Navbar';
import SplitText from "./SplitText";
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
export default class Home extends Component {
  render() {
    return (
            <>
        <div className="home-container" style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Navbar />
            
<SplitText
  text="Hello, GSAP!"
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
        </div>
        </>
    )
  }
}
