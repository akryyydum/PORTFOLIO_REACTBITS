import React, { Component } from 'react'
import Shuffle from '@/components/ui/Shuffle'
import ProfileCard from '@/components/ui/ProfileCard'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-content">
          <div className="about-left">
            <Shuffle
              text="About Me"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
            />
            <div className="about-description">
              <p>
                Hi, I'm Lance Andres, a passionate web developer specializing in creating 
                beautiful and functional digital experiences. With expertise in modern web 
                technologies, I bring ideas to life through clean code and innovative design.
              </p>
              <p>
                I love exploring new technologies and continuously improving my skills. 
                When I'm not coding, you can find me learning about the latest trends in 
                web development and UI/UX design.
              </p>
            </div>
          </div>
          <div className="about-right">
            <ProfileCard
              name="Lance Andres"
              title="Web Developer"
              handle="krystiandres"
              status="Online"
              contactText="Contact Me"
              avatarUrl="https://i.ibb.co/j9MhVCSm/473029323-8909794689068234-5708124434895071915-n-removebg-preview.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>
      </div>
    )
  }
}
