'use client'

import React, { useEffect, useRef, useState, createContext, useContext } from 'react'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const LoadingContext = createContext<{ isFinished: boolean; setFinished: (val: boolean) => void }>({
  isFinished: false,
  setFinished: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [isFinished, setFinished] = useState(false)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!dotRef.current || !ringRef.current) return
      const { clientX, clientY } = e
      dotRef.current.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0)`
      ringRef.current.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`
      const target = e.target as HTMLElement
      setHovered(!!target.closest('button, a, .gallery-card, .premium-card'))
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={hovered ? 'hover-active' : ''}>
        <LoadingContext.Provider value={{ isFinished, setFinished }}>
          
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="glow-spot -top-40 -left-60" />
            <div className="glow-spot -bottom-80 -right-40" />
            <div className="absolute inset-0 bg-[#050505]" />
          </div>

          <LoadingScreen onFinished={() => setFinished(true)} />
          
          <div ref={dotRef} className="cursor-dot hidden md:block" />
          <div ref={ringRef} className="cursor-ring hidden md:block" />

          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
          <Analytics />
        </LoadingContext.Provider>
      </body>
    </html>
  )
}