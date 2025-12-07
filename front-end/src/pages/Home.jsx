import React, { Component } from 'react'
import ColorBlends from '../bg/ColorBlends';
import Navbar from './Navbar';
export default class Home extends Component {
  render() {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundColor: '#000', zIndex: -1 }}>
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
        <Navbar />
      </div>
    )
  }
}
