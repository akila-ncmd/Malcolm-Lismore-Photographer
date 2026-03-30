'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useScrollReveal, useCountUp } from '@/hooks/useAnimations'
import { useLoading } from './layout'

/* ── Stable Studio Assets ── */
const heroID = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400'

const featuredWork = [
  { id: 101, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200', title: 'Mountain Crest', cat: 'Landscape', top: '20%' },
  { id: 201, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200', title: 'The Gaze', cat: 'Editorial', top: '10%' },
  { id: 401, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200', title: 'The Promise', cat: 'Candid', top: '25%' },
  { id: 501, src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200', title: 'The Guardian', cat: 'Wildlife', top: '5%' },
]

export default function HomePage() {
  const { isFinished } = useLoading()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  
  useScrollReveal()

  const projects = useCountUp(850)
  const nations = useCountUp(32)
  const exhibits = useCountUp(14)

  // Advanced Interaction Logic
  useEffect(() => {
    if (!isFinished) return // Stabilize until loading settles

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 15 
      const y = (clientY / innerHeight - 0.5) * 15
      setTilt({ x, y })
    }
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isFinished])

  return (
    <div className="flex flex-col bg-[#050505] text-white overflow-hidden">
      
      {/* ═══════════ CINEMATIC HERO ═══════════ */}
      <section className="relative h-screen flex items-center justify-center perspective-[2000px] overflow-hidden">
        {/* Dynamic Image Canvas with Depth Scroll */}
        <div 
          className="absolute inset-x-[-10%] inset-y-[-10%] z-0 h-[120%] w-[120%] transition-transform duration-1000 ease-out will-change-transform"
          style={{ 
            transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg) translateY(${scrollY * 0.1}px)`,
          }}
        >
          <img 
            src={heroID} 
            alt="Studio Home" 
            className="w-full h-full object-cover brightness-[0.35]" 
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        {/* Floating Text Outline */}
        <div 
          className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-[5] transition-opacity duration-[1.5s] ${
            isFinished ? 'opacity-10' : 'opacity-0'
          }`}
        >
           <h2 className="text-outline font-serif text-[25vw] md:text-[20vw] leading-none select-none tracking-tighter animate-float translate-y-20 uppercase">LUMINA</h2>
        </div>

        {/* Content Engine (SYNCHRONIZED REVEAL) */}
        <div 
          className={`relative z-10 text-center px-8 transition-all duration-[2s] ease-out-expo ${
            isFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-6 reveal-hidden">
             <h1 className="font-serif text-7xl sm:text-9xl md:text-[14rem] tracking-tighter leading-[0.75] italic">
               The Art of
               <br />
               <span className="text-white not-italic">Silence</span>
             </h1>
          </div>
          
          <p className="text-white/20 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed reveal-hidden delay-100 italic">
             Capturing the architectural stillness of the wild and the human soul through a boutique lens.
          </p>

          <div className="pt-12 reveal-hidden delay-200">
             <Link 
               href="/gallery" 
               className="inline-block px-16 py-6 border border-gold/30 text-gold text-[11px] uppercase tracking-[0.8em] font-bold group relative transition-all duration-700 overflow-hidden"
             >
                <div className="absolute inset-0 bg-gold -translate-y-full group-hover:translate-y-0 transition-transform duration-1000 h-full w-full" />
                <span className="relative z-10 group-hover:text-obsidian transition-colors">Access Gallery</span>
             </Link>
          </div>
        </div>

        {/* Vertical Branding */}
        <div className="absolute left-10 md:left-20 h-[40%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 text-white/5 reveal-hidden">
           <div className="w-[1px] h-full bg-white/5" />
           <p className="rotate-90 text-[10px] uppercase tracking-[1.5em] whitespace-nowrap">LUMINA FRAME 2024</p>
        </div>
      </section>

      {/* ═══════════ EXPERIENCE TICKER (PREMIUM REFINEMENT) ═══════════ */}
      <section className="py-20 border-y border-white/5 bg-transparent relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {['LANDSCAPES', 'WEDDINGS', 'PORTRAITS', 'EDITORIAL', 'STUDIO PRINTING', 'WILDLIFE'].map((item, i) => (
             <span key={i} className="font-serif text-[11px] uppercase tracking-[0.8em] text-white/10 mx-24 hover:text-gold transition-all duration-1000">
                {item} <span className="text-gold/20 mx-10 opacity-30">×</span>
             </span>
          ))}
          {['LANDSCAPES', 'WEDDINGS', 'PORTRAITS', 'EDITORIAL', 'STUDIO PRINTING', 'WILDLIFE'].map((item, i) => (
             <span key={i} className="font-serif text-[11px] uppercase tracking-[0.8em] text-white/10 mx-24 hover:text-gold transition-all duration-1000">
                {item} <span className="text-gold/20 mx-10 opacity-30">×</span>
             </span>
          ))}
        </div>
      </section>

      {/* ═══════════ SHUTTER REVEAL SECTION ═══════════ */}
      <section className="py-60 relative">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 grid lg:grid-cols-2 gap-32 items-center">
          
          <div className="space-y-16 reveal-left">
             <div className="space-y-8">
                <p className="text-gold text-[10px] uppercase tracking-[1.2em] font-medium opacity-50">THE PHILOSOPHY</p>
                <h2 className="font-serif text-6xl md:text-9xl italic leading-[0.85]">
                   A Legacy of <br /><span className="text-white not-italic">Observation</span>
                </h2>
             </div>
             <p className="text-white/20 text-xl font-light leading-relaxed max-w-lg italic">
                Our approach is rooted in subtraction. We remove the clutter of reality to find the architectural soul of the subject. Every frame is a study in light and silence.
             </p>
             <Link href="/about" className="group flex items-center gap-12">
                <div className="w-16 h-[1px] bg-gold/40 group-hover:w-32 transition-all duration-1000" />
                <span className="text-[10px] uppercase tracking-[0.8em] text-gold font-bold">Discover More</span>
             </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 gap-y-24 items-start skew-scroll" style={{ transform: `rotateX(${scrollY * 0.005}deg)` }}>
             {featuredWork.map((f, i) => (
                <div 
                  key={f.id} 
                  className="reveal-hidden" 
                  style={{ marginTop: f.top, transitionDelay: `${i * 0.25}s` }}
                >
                   <div className="shutter-reveal mask-expand border border-white/5 relative bg-obsidian h-[300px] md:h-[450px] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                      <img 
                        src={f.src} 
                        alt={f.title} 
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[1.5s] scale-[1.4] hover:scale-100" 
                      />
                   </div>
                </div>
             ))}
          </div>

        </div>
      </section>

      {/* ═══════════ ARCHITECTURAL STATS ═══════════ */}
      <section className="py-60 bg-transparent border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <h4 className="font-serif text-[40rem] text-outline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">STUDIO</h4>
         </div>

         <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-24 text-center reveal-hidden relative z-10">
             <div className="space-y-6">
                <p className="font-serif text-7xl text-gold italic leading-none"><span ref={projects}>0</span>+</p>
                <div className="w-10 h-[1px] bg-gold/20 mx-auto" />
                <p className="text-[10px] uppercase tracking-[1em] text-white/20">Archives</p>
             </div>
             <div className="space-y-6">
                <p className="font-serif text-7xl text-gold italic leading-none"><span ref={nations}>0</span></p>
                <div className="w-10 h-[1px] bg-gold/20 mx-auto" />
                <p className="text-[10px] uppercase tracking-[1em] text-white/20">Expeditions</p>
             </div>
             <div className="space-y-6">
                <p className="font-serif text-7xl text-gold italic leading-none"><span ref={exhibits}>0</span></p>
                <div className="w-10 h-[1px] bg-gold/20 mx-auto" />
                <p className="text-[10px] uppercase tracking-[1em] text-white/20">Collections</p>
             </div>
         </div>
      </section>

      {/* ═══════════ MODERN CALL-TO-ACTION (ETHEREAL EXHIBITION) ═══════════ */}
      <section className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-[#050505]">
         
         {/* Background Typography Layers (Bidirectional Marquee) */}
         <div className="absolute inset-0 z-0 flex flex-col justify-center pointer-events-none opacity-[0.04]">
            <div className="marquee-track marquee-forward">
               {[...Array(6)].map((_, i) => (
                  <span key={i} className="font-serif text-[25vw] leading-none tracking-tighter mx-8">CAPTURE</span>
               ))}
            </div>
            <div className="marquee-track marquee-reverse -translate-y-24">
               {[...Array(6)].map((_, i) => (
                  <span key={i} className="font-serif text-[25vw] leading-none tracking-tighter mx-8 text-outline">ETERNITY</span>
               ))}
            </div>
         </div>

         {/* Floating Exhibition Tiles (Random Parallax Prints) */}
         <div className="absolute inset-x-0 inset-y-0 z-10 pointer-events-none overflow-hidden">
            <div className="absolute top-[15%] left-[10%] w-60 h-80 reveal-hidden animate-float-slow opacity-20 hidden md:block border border-white/5">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200" alt="" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute bottom-[20%] right-[15%] w-72 h-96 reveal-hidden delay-300 animate-float-slow opacity-20 hidden md:block border border-white/5">
               <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200" alt="" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute top-[40%] right-[10%] w-48 h-64 reveal-hidden delay-150 animate-float-slow opacity-10 hidden md:block border border-white/5">
               <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200" alt="" className="w-full h-full object-cover grayscale" />
            </div>
         </div>

         {/* Luxury CTA Content */}
         <div className="relative z-20 text-center space-y-12 max-w-4xl px-8">
            <div className="space-y-4 reveal-hidden">
               <p className="text-gold text-[10px] uppercase tracking-[1em] opacity-40">Private Bookings</p>
               <h2 className="font-serif text-7xl md:text-[10rem] tracking-tighter italic leading-[0.85]">
                  Start Your <br />
                  <span className="text-white not-italic">Legacy.</span>
               </h2>
            </div>

            <p className="text-white/20 text-sm md:text-xl font-light italic tracking-[0.2em] max-w-lg mx-auto reveal-hidden delay-150">
               Limited studio availability for 2024 global archives and limited-edition prints.
            </p>

            <div className="pt-12 reveal-hidden delay-300">
               <Link 
                  href="/contact" 
                  className="group relative inline-flex px-24 py-8 border border-gold/30 text-gold text-[12px] uppercase tracking-[1em] font-bold transition-all duration-1000 overflow-hidden"
               >
                  <span className="absolute inset-x-0 h-0 bottom-0 bg-gold group-hover:h-full transition-all duration-700 ease-out-expo z-0" />
                  <span className="relative z-10 group-hover:text-obsidian transition-colors">Contact Studio</span>
               </Link>
            </div>
         </div>

         {/* Final Floating Base Branding */}
         <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-[0.03] select-none text-outline pointer-events-none">
            <div className="font-serif text-[12rem] md:text-[18rem] tracking-tighter">LUMINA</div>
         </div>
      </section>

    </div>
  )
}