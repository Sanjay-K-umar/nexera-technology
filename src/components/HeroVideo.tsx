'use client'

import { useEffect, useState } from 'react'

export function HeroVideo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="hero-video-container">
      {/* Dynamic gradient background that follows mouse */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(59, 130, 246, 0.8) 0%, 
              rgba(147, 51, 234, 0.6) 25%, 
              rgba(29, 78, 216, 0.8) 50%,
              rgba(30, 58, 138, 1) 100%
            )
          `,
        }}
      />
      
      {/* Floating orbs for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float"
          style={{ 
            top: '10%', 
            left: '10%',
            animationDelay: '0s',
            animationDuration: '8s'
          }} 
        />
        <div 
          className="absolute w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float"
          style={{ 
            top: '60%', 
            right: '15%',
            animationDelay: '2s',
            animationDuration: '10s'
          }} 
        />
        <div 
          className="absolute w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl animate-float"
          style={{ 
            bottom: '10%', 
            left: '50%',
            animationDelay: '4s',
            animationDuration: '12s'
          }} 
        />
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-grid-move" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
