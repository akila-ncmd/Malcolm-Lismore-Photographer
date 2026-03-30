'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Prices', href: '/prices' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const gmt = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date())
      setCurrentTime(gmt)
    }
    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <h2 className="font-serif text-4xl md:text-5xl tracking-widest text-white transition-all duration-700 group-hover:text-gold">
                LUMINA <span className="text-gold italic">FRAME</span>
              </h2>
            </Link>
            <p className="text-white/30 text-sm font-light max-w-sm tracking-wide leading-relaxed">
              Documenting the raw beauty of Highlands architecture and cinematic landscapes through a luxury lens.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="group relative px-10 py-5 border border-gold/20 hover:border-gold transition-all duration-700 mt-2"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold relative z-10 group-hover:text-white transition-colors duration-500">
              SAY HELLO
            </span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-0" />
          </Link>
        </div>

        {/* Detailed Grid Section - Aligned Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 md:gap-8 mb-24 border-b border-white/5 pb-20 items-start">
          
          {/* Column 1: Studio Info */}
          <div className="col-span-2 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold h-4">THE STUDIO</h4>
            <div className="space-y-4 pt-1">
               <p className="text-white/60 text-sm font-light leading-relaxed">
                  Based in London & Highlands.<br/>
                  Available for worldwide commissions.
               </p>
               <div className="space-y-1">
                  <p className="text-white/30 text-[10px] tracking-[0.2em] font-sans uppercase">HELLO@LUMINAFRAME.COM</p>
                  <p className="text-white/30 text-[10px] tracking-[0.2em] font-sans uppercase">+44 (0) 131 496 0244</p>
               </div>
            </div>
          </div>

          {/* Column 2: Directory */}
          <div className="col-span-1 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold h-4">DIRECTORY</h4>
            <ul className="space-y-3 pt-1">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link 
                    href={l.href}
                    className="text-white/40 hover:text-white transition-all duration-500 text-sm font-light hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="col-span-1 space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold h-4">CONNECT</h4>
            <ul className="space-y-3 pt-1">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a 
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-gold transition-all duration-500 text-sm font-light hover:translate-x-1 inline-block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Time / Status */}
          <div className="col-span-2 lg:text-right space-y-8">
             <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold h-4">STATUS</h4>
             <div className="space-y-4 pt-1">
                <div className="space-y-1">
                   <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] whitespace-nowrap">LOCAL TIME (UK)</p>
                   <p className="text-white font-mono text-2xl tracking-tighter">{currentTime}</p>
                </div>
                <p className="text-gold text-[9px] uppercase tracking-[0.3em] font-medium flex items-center lg:justify-end gap-2">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse capitalize" />
                   Accepting Commissions
                </p>
             </div>
          </div>

        </div>

        {/* Brand Signature Row - Perfectly Level Alignment */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/20 relative">
          <p className="text-[9px] uppercase tracking-[0.5em] font-light md:w-1/3">
            © {new Date().getFullYear()} LUMINA FRAME
          </p>
          
          <div className="md:w-1/3 text-center hidden md:block opacity-40">
             <span className="font-serif italic text-lg tracking-[0.3em] text-white/60">
                Malcolm Lismore <span className="text-gold/50">Photography</span>
             </span>
          </div>

          <div className="flex justify-end gap-10 text-[9px] uppercase tracking-[0.4em] md:w-1/3">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}