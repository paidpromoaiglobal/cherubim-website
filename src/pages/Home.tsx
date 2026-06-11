import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    name: 'Sakthi Yogalaya',
    type: 'Web Platform + Payments',
    tag: 'Education',
    year: '2026',
    desc: 'Multi-step enrollment system for a summer yoga camp with Razorpay payments, email notifications, and a weekly enrollment report dashboard.',
    highlight: '40+ enrollments in first week',
    tagStyle: { bg: 'rgba(27,57,144,0.08)', color: '#1B3990' },
  },
  {
    name: 'Guruji Platform',
    type: 'Full-Stack SaaS',
    tag: 'EdTech',
    year: '2025',
    desc: 'Educator platform connecting tutors with students — featuring course management, live session booking, and integrated payment processing.',
    highlight: '500+ active users at launch',
    tagStyle: { bg: 'rgba(27,57,144,0.08)', color: '#1B3990' },
  },
  {
    name: 'PaidPromo AI',
    type: 'AI Website Builder',
    tag: 'AI Automation',
    year: '2025',
    desc: 'AI product that generates complete business websites from a single prompt using n8n workflows and LLMs to produce and deploy static sites automatically.',
    highlight: 'Built by Cherubim internally',
    tagStyle: { bg: 'rgba(232,24,122,0.08)', color: '#E8187A' },
  },
];

const services = [
  { icon: '🤖', title: 'AI & Machine Learning', desc: 'Custom models, NLP, computer vision and intelligent automation.' },
  { icon: '🌐', title: 'Web Development', desc: 'React, Next.js and Node.js — from startups to enterprise scale.' },
  { icon: '⚙️', title: 'n8n Automation', desc: 'Connect your tools and eliminate repetitive manual work entirely.' },
  { icon: '💬', title: 'Chatbot & Voicebot', desc: 'Conversational AI for support, sales and internal operations.' },
  { icon: '📱', title: 'Mobile Apps', desc: 'Cross-platform iOS & Android apps with seamless backend.' },
  { icon: '🚀', title: 'Digital Transformation', desc: 'End-to-end strategy and execution for going digital-first.' },
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
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.8rem, 7vw, 6rem)', letterSpacing: '-0.04em' }}>
            <span className="text-white">Let's </span>
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #FF4DA6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
            <span style={{ background: 'linear-gradient(135deg, #2BA4D4, #1B3990)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>magine</span>
            <br />
            <span className="text-white">Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg mb-10 mx-auto max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
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
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>
              See Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-20 grid grid-cols-4 gap-px max-w-xl mx-auto"
            style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 16 }}>
            {stats.map(s => (
              <div key={s.n} className="py-5 text-center" style={{ background: 'transparent' }}>
                <div className="font-black text-2xl" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>{s.n}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
        </motion.div>
      </section>

      {/* Services preview */}
      <section className="py-24 px-6" style={{ background: '#F7F8FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>What we do</p>
            <h2 className="font-black mb-5" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              Services built for<br />
              <span style={{ color: '#1B3990' }}>the intelligent era.</span>
            </h2>
            <Link to="/services"
              className="inline-block text-sm font-semibold cursor-pointer transition-colors hover:opacity-70"
              style={{ color: '#E8187A' }}>
              All services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-7 rounded-2xl cursor-pointer group transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl"
                  style={{ background: 'rgba(232,24,122,0.08)' }}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0A0A0A' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>Portfolio</p>
            <h2 className="font-black mb-5" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              Work we're<br />
              <span style={{ color: '#1B3990' }}>proud of.</span>
            </h2>
            <Link to="/work"
              className="inline-block text-sm font-semibold cursor-pointer transition-colors hover:opacity-70"
              style={{ color: '#E8187A' }}>
              Our Work →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-2xl group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ background: '#F7F8FF', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: p.tagStyle.bg, color: p.tagStyle.color }}>
                    {p.tag}
                  </span>
                  <span className="text-xs font-mono" style={{ color: '#94a3b8' }}>{p.year}</span>
                </div>
                <h3 className="font-black text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#0A0A0A' }}>{p.name}</h3>
                <p className="text-xs font-medium mb-3" style={{ color: '#E8187A' }}>{p.type}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{p.desc}</p>
                <div className="pt-3 flex items-center gap-2" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-xs font-semibold" style={{ color: '#E8187A' }}>{p.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-16 px-6" style={{ background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-bold tracking-widest uppercase mb-8" style={{ color: 'rgba(0,0,0,0.25)' }}>
            Trusted by businesses across India & beyond
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-14">
            {clients.map(c => (
              <span key={c} className="text-sm font-bold" style={{ color: 'rgba(0,0,0,0.25)' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center">
            <h2 className="font-black text-white mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>
              Ready to AImagine your business?
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Let's talk about your project. We'll get back to you within 24 hours.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: '#E8187A', color: 'white' }}>
              Book a Free Consultation →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
