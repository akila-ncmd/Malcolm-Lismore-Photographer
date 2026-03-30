'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Prices', href: '/prices' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled
            ? 'py-4 bg-obsidian/95 backdrop-blur-xl border-b border-white/5'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 z-50">
            <div className="w-10 h-10 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-all duration-500">
              <span className="font-serif text-gold text-xl">L</span>
            </div>
            <div className="tracking-[0.2em] text-sm font-light">
              <span className="text-white">LUMINA</span>{' '}
              <span className="text-gold italic font-serif">FRAME</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.3em] font-medium transition-all duration-300 py-1 relative group ${
                  pathname === link.href ? 'text-gold' : 'text-white/40 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-gold transition-all duration-500 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden z-50 flex flex-col gap-1.5 p-3"
          >
            <span className={`block h-[1px] bg-white transition-all duration-500 ${menuOpen ? 'w-7 rotate-45 translate-y-[7px]' : 'w-8'}`} />
            <span className={`block h-[1px] bg-white transition-all duration-500 ${menuOpen ? 'opacity-0' : 'w-8'}`} />
            <span className={`block h-[1px] bg-white transition-all duration-500 ${menuOpen ? 'w-7 -rotate-45 -translate-y-[7px]' : 'w-8'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[90] bg-obsidian transition-all duration-700 flex flex-col items-center justify-center gap-8 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-serif text-4xl tracking-widest transition-all duration-500 hover:text-gold ${
              pathname === link.href ? 'text-gold' : 'text-white/90'
            }`}
            style={{
              transitionDelay: menuOpen ? `${i * 0.1}s` : '0s',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}