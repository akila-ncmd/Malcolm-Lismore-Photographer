'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useAnimations'

const services = [
  {
    num: '01',
    title: 'Landscape & Travel',
    desc: 'Multi-day expeditions capturing the raw beauty of remote locations. From the Scottish Highlands to Icelandic glaciers, we chase extraordinary light across the globe.',
    features: ['Full Day Expedition', 'Fine Art Print Collection', 'Location Scouting', 'Commercial Licensing'],
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900',
  },
  {
    num: '02',
    title: 'Portrait & Editorial',
    desc: 'Intimate, cinematic portraiture that reveals the soul behind the surface. Designed for individuals, artists, creatives, and brands seeking authentic visual identity.',
    features: ['Studio or On-Location', 'Professional Styling', 'Digital Gallery Delivery', 'Retouching'],
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=900',
  },
  {
    num: '03',
    title: 'Wedding & Events',
    desc: 'Cinematic coverage of your most important day. We prioritize candid, emotional moments to create an heirloom collection that ages like fine wine.',
    features: ['Full Day Coverage', 'Engagement Pre-shoot', 'Heirloom Album Design', 'Second Photographer'],
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900',
  },
  {
    num: '04',
    title: 'Wildlife & Nature',
    desc: 'Patient, respectful documentation of the natural world. From coastal puffins to highland stags at dawn — we wait for the perfect moment.',
    features: ['Multi-Day Field Sessions', 'Telephoto Specialist', 'Conservation Projects', 'Print Sales'],
    img: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=900',
  },
  {
    num: '05',
    title: 'Commercial & Brand',
    desc: 'High-concept visual storytelling for modern brands, architects, and luxury hospitality. We create imagery that elevates your brand narrative.',
    features: ['Creative Direction', 'Product Photography', 'Social Media Assets', 'Global Licensing'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=900',
  },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'We begin with a conversation to understand your vision, goals, and aesthetic preferences.' },
  { step: '02', title: 'Planning', desc: 'We craft a detailed creative brief including location scouting and mood boards.' },
  { step: '03', title: 'The Shoot', desc: 'The session itself — where preparation meets opportunity and magic happens naturally.' },
  { step: '04', title: 'Selection', desc: 'We hand-select and meticulously edit each image to ensure a cohesive, professional collection.' },
  { step: '05', title: 'Delivery', desc: 'Your final collection is delivered in a private online gallery with high-resolution files.' },
]

export default function ServicesPage() {
  useScrollReveal()

  return (
    <div className="pt-32 md:pt-40 pb-28 relative">
      {/* Decorative Glows */}
      <div className="glow-spot -top-40 -left-60" />
      <div className="glow-spot top-1/3 -right-60" />
      <div className="glow-spot top-2/3 -left-60" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-28 reveal-hidden group">
          <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 delay-100">Our Expertise</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 delay-200">Services</h1>
          <div className="w-16 h-[1px] bg-gold/50 mx-auto delay-300 transition-all duration-1000 group-[.reveal-visible]:w-32" />
        </div>

        {/* Services List */}
        <div className="space-y-32">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className={`grid lg:grid-cols-2 gap-12 md:gap-20 items-center overflow-hidden ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`${i % 2 === 1 ? 'lg:col-start-2 reveal-right' : 'reveal-left'}`}>
                <div className="gallery-card border border-white/5 relative group shutter-reveal">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-[400px] md:h-[550px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute top-8 left-8 font-serif text-6xl text-white/5">{svc.num}</div>
                </div>
              </div>

              <div className={`space-y-8 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 reveal-left' : 'reveal-right'} delay-200`}>
                <div className="flex items-center gap-4">
                  <span className="text-gold font-mono text-sm">{svc.num}</span>
                  <div className="w-12 h-[1px] bg-gold/30" />
                </div>
                <h2 className="font-serif text-3xl md:text-5xl">{svc.title}</h2>
                <p className="text-white/40 text-base font-light leading-relaxed">{svc.desc}</p>

                <ul className="space-y-3 pt-4">
                  {svc.features.map((f, idx) => (
                    <li 
                      key={f} 
                      className="flex items-center gap-4 text-white/50 text-sm transition-all duration-700"
                      style={{ transitionDelay: `${(idx + 1) * 100 + 400}ms` }}
                    >
                      <span className="w-1.5 h-1.5 bg-gold/50 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-gold text-[10px] uppercase tracking-[0.3em] font-bold group pt-6 overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-500 z-10">→</span>
                  <div className="h-[1px] w-0 bg-gold/50 group-hover:w-full transition-all duration-700 absolute bottom-0 left-0" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-40">
          <div className="text-center mb-20 reveal-hidden">
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">The Workflow</p>
            <h2 className="font-serif text-4xl md:text-5xl">Our Process</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((p, idx) => (
              <div
                key={p.step}
                className="text-center space-y-4 p-8 border border-white/5 hover:border-gold/20 transition-all duration-700 reveal-hidden"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <p className="font-serif text-3xl text-gold/20">{p.step}</p>
                <h3 className="text-sm font-medium uppercase tracking-widest">{p.title}</h3>
                <p className="text-white/30 text-xs font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-40 text-center py-24 border border-white/5 bg-obsidian-light/30 reveal-hidden shutter-reveal">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl mb-8">Ready to start?</h2>
            <Link
              href="/contact"
              className="relative inline-block px-12 py-5 border border-gold text-gold text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden group"
            >
              <span className="relative z-10 group-hover:text-obsidian transition-colors duration-500">Contact Us</span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
