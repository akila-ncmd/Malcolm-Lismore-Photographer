'use client'

import React from 'react'
import Link from 'next/link'

const packages = [
  { 
    name: 'Architectural Heritage', 
    price: '£1,850', 
    desc: 'Comprehensive study of residential or commercial projects. 15-20 hand-edited high-resolution plates.',
    details: ['Full day shoot', 'Advanced retouching', 'Usage license']
  },
  { 
    name: 'Cinematic Portrait Series', 
    price: '£750', 
    desc: 'Editorial-style portraiture in Highlands locations. 3-4 distinct looks with cinematic grading.',
    details: ['3 hours session', 'Location scouting', 'Digital delivery']
  },
  { 
    name: 'Luxury Event Documentation', 
    price: '£2,200', 
    desc: 'Candid yet refined coverage of high-end private events or gallery openings.',
    details: ['8 hours coverage', 'Storytelling focus', 'Private online gallery']
  }
]

export default function PricesPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 reveal-hidden reveal-visible">
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-none">
            INVESTMENT <br/>
            <span className="text-gold italic">& ARTISTRY</span>.
          </h1>
          <p className="text-white/40 font-light text-lg max-w-xl leading-relaxed">
            Transparent pricing for uncompromising quality. Every commission is treated as a unique project 
            with dedicated artistic direction and bespoke delivery.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {packages.map((pkg, i) => (
            <div 
              key={pkg.name}
              className="bg-white/5 border border-white/5 p-10 hover:border-gold transition-all duration-700 group flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
                <p className="text-gold text-lg font-mono mb-6 uppercase tracking-widest">{pkg.price}</p>
                <p className="text-white/40 text-sm font-light mb-8 leading-relaxed italic border-l border-gold/40 pl-4">
                  {pkg.desc}
                </p>
                <ul className="space-y-3 mb-12">
                  {pkg.details.map((detail) => (
                    <li key={detail} className="text-white/60 text-xs uppercase tracking-widest flex items-center gap-2">
                       <span className="w-1 h-1 bg-gold rounded-full" />
                       {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                href="/contact" 
                className="w-full py-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 text-[10px] uppercase tracking-[0.4em] font-bold text-center"
              >
                Reserve Now
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Section */}
        <div className="border-t border-white/5 pt-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl mb-6">BESPOKE <span className="text-gold italic">COMMISSIONS</span></h2>
            <p className="text-white/30 text-sm font-light leading-relaxed">
              For large-scale commercial assignments, international travel, or multi-day documentation projects, 
              we provide customized proposals tailored to your specific requirements and creative vision.
            </p>
          </div>
          <Link 
             href="/contact"
             className="px-12 py-6 bg-gold text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-colors duration-500"
          >
             Request A Quote
          </Link>
        </div>

      </div>
    </div>
  )
}
