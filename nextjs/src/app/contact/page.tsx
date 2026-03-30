'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useAnimations'

export default function ContactPage() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28 reveal-hidden">
          <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Contact Us</h1>
          <p className="text-white/30 text-base font-light max-w-xl mx-auto">
            Ready to bring your vision to life? Let&apos;s start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* ─── Left: Info ─── */}
          <div className="space-y-16 reveal-left">
            {/* Studio info cards */}
            <div className="space-y-10">
              {[
                {
                  label: 'Email',
                  value: 'hello@luminaframe.com',
                  sub: 'We respond within 24 hours',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  label: 'Phone',
                  value: '+44 (0) 131 496 0244',
                  sub: 'Mon – Fri, 9am – 6pm GMT',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                },
                {
                  label: 'Studio',
                  value: 'Edinburgh Old Town, Scotland',
                  sub: 'By appointment only',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 group">
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:border-gold/40 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/25 mb-1">{item.label}</p>
                    <p className="text-white/80 text-lg font-light">{item.value}</p>
                    <p className="text-white/25 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="border border-white/5 overflow-hidden h-[250px] relative group">
              <img
                src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1000&q=80"
                alt="Edinburgh Scotland"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-3 animate-float" />
                  <p className="font-serif text-lg text-white">Edinburgh, Scotland</p>
                  <p className="text-white/25 text-[10px] uppercase tracking-[0.3em] mt-1">55.9533° N, 3.1883° W</p>
                </div>
              </div>
            </div>

            {/* Availability note */}
            <div className="p-8 border border-gold/15 bg-gold/[0.03] space-y-3">
              <p className="text-gold text-[10px] uppercase tracking-[0.35em] font-semibold">Availability Note</p>
              <p className="text-white/40 text-sm font-light italic leading-relaxed">
                Our summer season (June – September) books up fast.
                We recommend reaching out at least 8 weeks in advance to secure your preferred dates.
              </p>
            </div>
          </div>

          {/* ─── Right: Form ─── */}
          <div className="reveal-right">
            <div className="p-8 md:p-12 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <h3 className="font-serif text-2xl mb-2">Contact Us</h3>
              <p className="text-white/25 text-xs mb-10">All fields marked with * are required</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.35em] text-white/30 block mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 pb-3 text-white text-sm font-light focus:border-gold outline-none transition-colors duration-300 placeholder:text-white/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.35em] text-white/30 block mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 pb-3 text-white text-sm font-light focus:border-gold outline-none transition-colors duration-300 placeholder:text-white/10"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.35em] text-white/30 block mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 pb-3 text-white text-sm font-light focus:border-gold outline-none transition-colors duration-300 placeholder:text-white/10"
                      placeholder="+44 7XXX XXXXXX"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.35em] text-white/30 block mb-3">
                      Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 pb-3 text-white/60 text-sm font-light focus:border-gold outline-none transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-obsidian">Select a service</option>
                      <option value="landscape" className="bg-obsidian">Landscape & Travel</option>
                      <option value="portrait" className="bg-obsidian">Portrait & Editorial</option>
                      <option value="wedding" className="bg-obsidian">Wedding & Events</option>
                      <option value="wildlife" className="bg-obsidian">Wildlife & Nature</option>
                      <option value="commercial" className="bg-obsidian">Commercial & Brand</option>
                      <option value="other" className="bg-obsidian">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-[0.35em] text-white/30 block mb-3">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-white/10 p-4 text-white text-sm font-light focus:border-gold outline-none transition-colors duration-300 resize-none placeholder:text-white/10"
                    placeholder="Describe your vision, preferred dates, location..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full py-5 border border-gold text-gold text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-colors duration-500 hover:text-obsidian"
                >
                  <span className="absolute inset-0 bg-gold -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative flex items-center justify-center gap-3">
                    Send Inquiry
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>

                {submitted && (
                  <div className="text-center py-4 border border-gold/20 bg-gold/[0.05]">
                    <p className="text-gold text-xs uppercase tracking-widest">
                      ✓ Inquiry received — we&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
