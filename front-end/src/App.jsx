import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import ColorBlends from './bg/ColorBlends'
function App() {
  return (
    <>
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
      <Home />
      
    </>
  )
}

export default App
