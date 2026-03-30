'use client'

import Link from 'next/link'
import { useScrollReveal, useCountUp } from '@/hooks/useAnimations'

const timeline = [
  { year: '2008', title: 'The Beginning', text: 'Founded in the Scottish Highlands with a single camera and an infinite curiosity for light.' },
  { year: '2012', title: 'First Exhibition', text: 'Debuted "Shadows of Alba" at the Edinburgh Art Festival, selling out all 40 prints.' },
  { year: '2016', title: 'Going Global', text: 'Expanded operations to cover editorial and commercial projects across 20+ countries.' },
  { year: '2020', title: 'Studio Launch', text: 'Opened our flagship studio in Edinburgh\'s Old Town, featuring a 2,000 sq ft shooting space.' },
  { year: '2024', title: 'Award Season', text: 'Recognized by IPA, Sony World Photo Awards, and featured in National Geographic.' },
]

const philosophy = [
  {
    icon: '◈',
    title: 'Light as Language',
    text: 'We believe light is the most honest storyteller. Every frame begins with understanding how shadows and highlights sculpt emotion from the mundane.',
  },
  {
    icon: '◇',
    title: 'The Art of Patience',
    text: 'Great photographs are never rushed. We invest hours — sometimes days — waiting for that singular convergence of light, subject, and atmosphere.',
  },
  {
    icon: '△',
    title: 'Architectural Composition',
    text: 'Every image follows an invisible geometry. We obsess over leading lines, negative space, and the golden ratio to create frames that feel inevitable.',
  },
  {
    icon: '○',
    title: 'Emotional Authenticity',
    text: 'We never stage truth. Whether capturing a wedding, a landscape, or a portrait, our role is to observe and preserve — never to manufacture.',
  },
]

const equipment = [
  {
    category: 'Camera Bodies',
    items: ['Hasselblad X2D 100C', 'Leica SL3', 'Sony A1'],
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Cinema',
    items: ['RED V-Raptor XL', 'ARRI Alexa Mini LF', 'DJI Ronin 4D'],
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Optics',
    items: ['Zeiss Otus Series', 'Leica Summilux', 'Canon L Series'],
    img: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80',
  },
]

export default function AboutPage() {
  useScrollReveal()
  const yearsRef = useCountUp(15)
  const projectsRef = useCountUp(850)
  const countriesRef = useCountUp(32)

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* ─── Hero Split ─── */}
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-44">
          <div className="space-y-10 reveal-hidden">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">About Us</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              The Art of
              <br />
              <span className="italic text-gold pl-8 md:pl-16">Observation</span>
            </h1>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-lg">
              Lumina Frame was born from a singular obsession: the way light reshapes the world when no one is watching.
              Founded in the rugged Scottish Highlands, we&apos;ve evolved into a global creative studio while keeping our roots
              firmly planted in the wild landscapes that first inspired us.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="font-serif text-3xl text-gold"><span ref={yearsRef}>0</span>+</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mt-2">Years</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold"><span ref={projectsRef}>0</span>+</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mt-2">Projects</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold"><span ref={countriesRef}>0</span></p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mt-2">Countries</p>
              </div>
            </div>
          </div>

          <div className="relative reveal-right">
            <div className="img-zoom border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=80"
                alt="Studio"
                className="w-full h-[500px] md:h-[650px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-obsidian border border-white/5 p-6 md:p-8 max-w-[200px]">
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] mb-1">Est.</p>
              <p className="font-serif text-2xl text-white">2008</p>
              <p className="text-white/25 text-[9px] tracking-widest mt-1">Scotland</p>
            </div>
          </div>
        </div>

        {/* ─── Full-width Image Break ─── */}
        <div className="reveal-hidden mb-32 md:mb-44">
          <div className="relative h-[50vh] md:h-[60vh] overflow-hidden border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=2400&q=80"
              alt="Behind the scenes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-obsidian/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <blockquote className="text-center max-w-2xl px-8">
                <p className="font-serif text-2xl md:text-4xl text-white/90 italic leading-relaxed">
                  &ldquo;Photography is the only language that can be understood anywhere in the world.&rdquo;
                </p>
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] mt-6">— Bruno Barbey</p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* ─── Timeline ─── */}
        <div className="mb-32 md:mb-44">
          <div className="text-center mb-20 reveal-hidden">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-[0.5px]" />

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-2 h-2 bg-gold rounded-full -translate-x-[3px] md:-translate-x-[3px] z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16'}`}>
                    <p className="font-serif text-3xl text-gold mb-2">{item.year}</p>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-white/35 font-light text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Philosophy & Approach ─── */}
        <div className="mb-32 md:mb-44">
          <div className="text-center mb-20 reveal-hidden">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">Our Craft</p>
            <h2 className="font-serif text-4xl md:text-5xl">Philosophy &amp; Approach</h2>
            <p className="text-white/25 text-sm font-light mt-6 max-w-xl mx-auto leading-relaxed italic">
              Every image we create is guided by four foundational principles that define our artistic identity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-white/5">
            {philosophy.map((item, i) => (
              <div 
                key={item.title} 
                className={`group relative p-10 md:p-14 reveal-hidden transition-all duration-700 hover:bg-white/[0.02] ${
                  i < 2 ? 'border-b border-white/5' : ''
                } ${i % 2 === 0 ? 'md:border-r border-white/5' : ''}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/30 transition-all duration-700" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/0 group-hover:border-gold/30 transition-all duration-700" />
                
                {/* Number */}
                <p className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-[10px] text-white/5 group-hover:text-gold/20 transition-colors duration-700">
                  {String(i + 1).padStart(2, '0')}
                </p>

                <div className="space-y-6">
                  <span className="text-gold/60 text-3xl group-hover:text-gold transition-colors duration-700">{item.icon}</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-gold/90 transition-colors duration-700">{item.title}</h3>
                  <p className="text-white/30 text-sm font-light leading-relaxed max-w-sm">{item.text}</p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-10 w-0 group-hover:w-16 h-[1px] bg-gold/40 transition-all duration-1000" />
              </div>
            ))}
          </div>
        </div>

        {/* ─── Equipment Showcase ─── */}
        <div className="mb-32 md:mb-44">
          <div className="text-center mb-20 reveal-hidden">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">Our Arsenal</p>
            <h2 className="font-serif text-4xl md:text-5xl">The Tools We Trust</h2>
            <p className="text-white/25 text-sm font-light mt-6 max-w-xl mx-auto leading-relaxed italic">
              Premium equipment, mastered through years of field experience across every continent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {equipment.map((eq) => (
              <div key={eq.category} className="group reveal-hidden">
                <div className="relative overflow-hidden border border-white/5 mb-8">
                  <img
                    src={eq.img}
                    alt={eq.category}
                    className="w-full h-[350px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.1] group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-gold text-[9px] uppercase tracking-[0.6em] mb-2">{eq.category}</p>
                    <div className="w-8 h-[1px] bg-gold/30 group-hover:w-16 transition-all duration-700" />
                  </div>
                </div>
                <ul className="space-y-3 pl-1">
                  {eq.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 text-white/35 text-sm font-light group-hover:text-white/50 transition-colors duration-500">
                      <span className="w-1 h-1 bg-gold/40 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div className="text-center pt-20 border-t border-white/5 reveal-hidden">
          <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-6 opacity-40">Begin Your Story</p>
          <h2 className="font-serif text-3xl md:text-6xl mb-4">
            Let&apos;s Create Something <span className="italic text-gold">Timeless.</span>
          </h2>
          <p className="text-white/20 text-sm font-light max-w-md mx-auto mb-12 leading-relaxed">
            Whether it&apos;s a wedding, an expedition, or a private commission — every collaboration starts with a conversation.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-6 px-16 py-6 border border-gold/30 text-gold text-[11px] uppercase tracking-[0.6em] font-bold overflow-hidden transition-all duration-700"
          >
            <span className="absolute inset-0 bg-gold -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            <span className="relative group-hover:text-obsidian transition-colors duration-500">Start a Conversation</span>
            <span className="relative group-hover:text-obsidian transition-colors duration-500">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}