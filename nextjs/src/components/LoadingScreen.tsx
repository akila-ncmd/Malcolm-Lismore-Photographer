'use client'

import React, { useState, useEffect } from 'react'

const heroID = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400'

interface LoadingProps {
  onFinished: () => void
}

export default function LoadingScreen({ onFinished }: LoadingProps) {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showUI, setShowUI] = useState(true)

  useEffect(() => {
    // 1. Loading Phase
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100))
    }, 20)

    // 2. Structural Entrance Sequence (Horizontal Row to Full Screen)
    const timer = setTimeout(() => {
      setIsDone(true) // Start the structural expansion and fly-out
      
      setTimeout(() => {
        setIsExpanded(true) // Start the fade out
        onFinished() // Signal Home page reveal
        
        setTimeout(() => {
          setShowUI(false)
        }, 1500)
      }, 1500)
    }, 2800)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onFinished])

  if (!showUI) return null

  return (
    <div 
      className={`fixed inset-0 z-[500] flex items-center justify-center transition-colors duration-[1.2s] ease-in-out ${
        isExpanded ? 'bg-transparent' : 'bg-[#050505]'
      }`}
    >
      
      {/* ── Horizontal Branding Container ── */}
      <div className="relative flex items-center justify-center w-full h-full">

        {/* ── Lumina (Left) ── */}
        <div 
          className={`absolute transition-all duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1) ${
            isDone 
              ? '-translate-x-[100vw] opacity-0 blur-2xl' 
              : 'translate-x-[-28vw] opacity-100'
          }`}
        >
          <div className="text-right">
             <p className="text-gold text-[8px] uppercase tracking-[1em] mb-4 opacity-40">ARCHIVAL</p>
             <h2 className="font-serif text-[7vw] md:text-[8vw] leading-none tracking-tighter text-white uppercase font-bold italic">LUMINA</h2>
          </div>
        </div>

        {/* ── Central Portal ── */}
        <div 
          className={`fixed z-[510] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1.8s] cubic-bezier(0.16, 1, 0.3, 1) rounded-none ${
            isDone 
              ? 'w-[120vw] h-[120vh] shadow-none' 
              : 'w-[22vw] h-[40vh] shadow-[0_50px_100px_rgba(0,0,0,1)]'
          } ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
        >
          {!isDone && (
            <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none" />
          )}

          <img 
            src={heroID} 
            alt="Portal" 
            className="w-full h-full object-cover brightness-[0.35]" 
          />

          {!isDone && (
            <div className="absolute bottom-6 left-6 z-20">
               <div className="flex items-end gap-2 text-white">
                  <span className="font-serif text-4xl italic leading-none">{progress}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-20 pb-1">%</span>
               </div>
            </div>
          )}
        </div>

        {/* ── Frame (Right) ── */}
        <div 
          className={`absolute transition-all duration-[1.5s] cubic-bezier(0.16, 1, 0.3, 1) ${
            isDone 
              ? 'translate-x-[100vw] opacity-0 blur-2xl' 
              : 'translate-x-[28vw] opacity-100'
          }`}
        >
          <div className="text-left">
             <p className="text-gold text-[8px] uppercase tracking-[1em] mb-4 opacity-40">STUDIO</p>
             <h2 className="font-serif text-[7vw] md:text-[8vw] leading-none tracking-tighter text-white uppercase font-bold">FRAME</h2>
          </div>
        </div>

      </div>

    </div>
  )
}
