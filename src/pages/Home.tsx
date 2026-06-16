import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><circle cx="12" cy="13" r="2"/>
        <line x1="12" y1="6" x2="12" y2="11"/><line x1="10.3" y1="14.3" x2="5.7" y2="18.3"/><line x1="13.7" y1="14.3" x2="18.3" y2="18.3"/><line x1="6" y1="20" x2="18" y2="20"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Custom models, NLP, computer vision and intelligent automation.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'React, Next.js and Node.js — from startups to enterprise scale.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    title: 'n8n Automation',
    desc: 'Connect your tools and eliminate repetitive manual work entirely.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/>
      </svg>
    ),
    title: 'Chatbot & Voicebot',
    desc: 'Conversational AI for support, sales and internal operations.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS & Android apps with seamless backend.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Digital Transformation',
    desc: 'End-to-end strategy and execution for going digital-first.',
  },
];

const stats = [
  { n: '6+', l: 'Years' },
  { n: '80+', l: 'Projects' },
  { n: '40+', l: 'Clients' },
  { n: '15+', l: 'Experts' },
];

const clients = ['Sakthi Yogalaya', 'Petal & Pin', 'Sri Hayagreeva', 'Raj Construction', 'Guruji Platform', 'PaidPromo AI'];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
        style={{ background: '#0A0A0A' }}>

        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #2BA4D4, transparent)' }} />
        </div>

        {/* Video bg */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8"
            style={{ background: 'rgba(232,24,122,0.15)', border: '1px solid rgba(232,24,122,0.3)', color: '#E8187A' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Cherubim AI Infosoft Pvt Ltd · Chennai, India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black leading-none mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 7vw, 5.5rem)', letterSpacing: '-0.04em' }}>
            <span className="text-white">Let's </span>
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #FF4DA6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
            <span style={{ background: 'linear-gradient(135deg, #2BA4D4, #1B3990)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>magine</span>
            <br />
            <span className="text-white">Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-lg mb-8 md:mb-10 mx-auto max-w-2xl"
            style={{ color: '#d1d5db', lineHeight: 1.7 }}>
            We build intelligent software — AI models, automation workflows, and digital products — that help businesses grow faster and work smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact"
              className="px-8 py-4 rounded-full font-bold text-white text-sm cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #E8187A, #C41060)' }}>
              Start Your Project →
            </Link>
            <Link to="/work"
              className="px-8 py-4 rounded-full font-bold text-sm cursor-pointer transition-all duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#d1d5db' }}>
              See Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px max-w-xl mx-auto"
            style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 16 }}>
            {stats.map(s => (
              <div key={s.n} className="py-5 text-center" style={{ background: 'transparent' }}>
                <div className="font-black text-2xl" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>{s.n}</div>
                <div className="text-xs mt-1" style={{ color: '#d1d5db' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
        </motion.div>
      </section>

      {/* Services preview */}
      <section style={{ background: '#F7F8FF', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="text-center mb-8 md:mb-12">
            <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#E8187A' }}>What we do</p>
            <h2 className="font-black mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              Services built for<br />
              <span style={{ color: '#1B3990' }}>the intelligent era.</span>
            </h2>
            <Link to="/services"
              className="inline-block text-base font-semibold cursor-pointer transition-colors hover:opacity-70"
              style={{ color: '#E8187A' }}>
              All services →
            </Link>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="services-card"
                style={{
                  background: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'rgba(232,24,122,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 600, color: '#0A0A0A', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#64748b', margin: 0 }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-8 md:py-16 px-8 md:px-14 xl:px-20" style={{ background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="w-full">
          <p className="text-center text-xs font-bold tracking-widest uppercase mb-8" style={{ color: '#94a3b8' }}>
            Trusted by businesses across India & beyond
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-14">
            {clients.map(c => (
              <span key={c} className="text-sm font-bold" style={{ color: '#94a3b8' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '700px', width: '100%' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'white' }}>
            Ready to AImagine your business?
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '560px', margin: '1rem auto', color: '#d1d5db', lineHeight: 1.7 }}>
            Let's talk about your project. We'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="cta-btn cursor-pointer transition-opacity duration-200 hover:opacity-90"
            style={{ background: '#E8187A', color: 'white', boxShadow: '0 4px 20px rgba(232,24,122,0.4)', textDecoration: 'none' }}>
            Book a Free Consultation →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
