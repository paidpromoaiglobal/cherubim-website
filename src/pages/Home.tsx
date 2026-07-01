import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const whatWeDo = [
  {
    color: '#993556',
    bg: '#FBEAF0',
    icon: 'ti ti-speakerphone',
    title: 'Social Media Marketing',
    badge: '',
    features: [
      'Branded posters & reels every week',
      'AI-powered promotional videos',
      'Facebook & Instagram ad campaigns',
      'Smart audience targeting & retargeting',
      'Caption & hashtag strategy',
      'Google Ads management',
      'Competitor analysis & trend tracking',
      'Monthly performance report & insights',
      'Dedicated account manager',
    ],
    tags: ['Instagram', 'Facebook', 'YouTube Shorts', 'Google Ads', '100% branded'],
  },
  {
    color: '#0F6E56',
    bg: '#E1F5EE',
    icon: 'ti ti-brand-whatsapp',
    title: 'WhatsApp Automation',
    badge: '',
    features: [
      'Instant AI-powered auto-replies',
      'Automated lead capture & follow-up',
      'Bulk broadcast & promotional campaigns',
      'Order & appointment confirmations',
      'Payment reminders & invoice sharing',
      'Customer support chatbot',
      'CRM & Google Sheets sync',
      'Multi-agent team inbox',
      'Detailed chat analytics & reports',
    ],
    tags: ['WhatsApp Business API', 'Chatbot', 'CRM sync', '24/7 active'],
  },
  {
    color: '#534AB7',
    bg: '#EEEDFE',
    icon: 'ti ti-building-store',
    title: 'Complete Business Solution',
    badge: 'All-in-one',
    features: [
      'Website, landing pages & branding',
      'Backend systems & database setup',
      'End-to-end workflow & task automation',
      'CRM, lead & pipeline management',
      'WhatsApp & email automation',
      'Invoicing, billing & payment systems',
      'Social media & content marketing',
      'Team collaboration & project tools',
      'AI tools & smart integrations',
      'Analytics dashboard & growth reports',
      'Ongoing support & system maintenance',
    ],
    tags: ['Website', 'Backend', 'Automation', 'CRM', 'AI tools', 'Marketing', 'Support'],
  },
  {
    color: '#185FA5',
    bg: '#E6F1FB',
    icon: 'ti ti-layout-2',
    title: 'Website Design',
    badge: '',
    features: [
      'Custom design tailored to your brand',
      '100% mobile & tablet responsive',
      'SEO-optimised from day one',
      'WhatsApp & contact form integration',
      'Google Maps & social media links',
      'E-commerce & payment gateway ready',
      'Speed optimised & SSL secured',
      '1 year free hosting & domain',
      'Live in just 3–5 business days',
    ],
    tags: ['Mobile-first', 'E-commerce', 'SEO-ready', 'Fast delivery', 'SSL secured'],
  },
];

const stats = [
  { n: '3+', l: 'Years' },
  { n: '50+', l: 'Projects' },
  { n: '40+', l: 'Clients' },
  { n: '15+', l: 'Experts' },
];

const clients = ['Sakthi Yogalaya', 'Petal & Pin', 'Sri Hayagreeva', 'Raj Construction', 'Guruji Platform', 'PaidPromo AI'];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="home-hero relative flex flex-col items-center justify-center overflow-hidden"
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

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-10 text-center">

          {/* Badge — max-w-full + ellipsis so it never overflows on small phones */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-4 md:mb-6"
            style={{ background: 'rgba(232,24,122,0.15)', border: '1px solid rgba(232,24,122,0.3)', color: '#E8187A', maxWidth: '100%', overflow: 'hidden' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse flex-shrink-0" />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              Cherubim AI Infosoft Pvt Ltd · Chennai, India
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black leading-tight mb-4 md:mb-5"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 7vw, 5rem)', letterSpacing: '-0.04em' }}>
            <span className="text-white">Let's </span>
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #FF4DA6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span>
            <span style={{ background: 'linear-gradient(135deg, #2BA4D4, #1B3990)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>magine</span>
            <br />
            <span className="text-white">Together.</span>
          </motion.h1>

          {/* Paragraph — text-base (16px) on mobile, text-lg on md+ */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg"
            style={{ color: '#d1d5db', lineHeight: 1.7, textAlign: 'center', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '3.5rem', display: 'block' }}>
            We build intelligent software — AI models, automation workflows, and digital products — that help businesses grow faster and work smarter.
          </motion.p>

          {/* CTA buttons — stack on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="hero-cta-buttons"
            style={{ marginBottom: '3.5rem' }}>
            <Link to="/contact"
              className="home-cta-primary rounded-full font-bold cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #E8187A, #C41060)', textDecoration: 'none', color: '#fff', border: '1px solid transparent' }}>
              Start Your Project →
            </Link>
            <Link to="/work"
              className="home-cta-secondary rounded-full font-bold cursor-pointer transition-all duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#d1d5db', textDecoration: 'none' }}>
              See Our Work
            </Link>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
            className="home-stats-flex">
            {stats.map(s => (
              <div key={s.n} className="home-stat-cell text-center">
                <div className="font-black text-2xl" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>{s.n}</div>
                <div className="text-sm mt-1" style={{ color: '#d1d5db' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
        </motion.div>
      </section>

      {/* Services preview */}
      <section className="home-services-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="text-center mb-5 md:mb-12">
            <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>What we do</p>
            <h2 className="font-black mb-5 md:mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              Services built for the intelligent era.
            </h2>
            <Link to="/services"
              className="inline-block text-base font-semibold cursor-pointer transition-colors hover:opacity-70"
              style={{ color: '#E8187A' }}>
              All services →
            </Link>
          </div>

          <div className="services-grid">
            {whatWeDo.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: 'white',
                  border: s.badge ? `2px solid ${s.color}` : '1px solid #e0e0e0',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: s.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <i className={s.icon} style={{ fontSize: '22px', color: s.color }} />
                    </div>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: 0, lineHeight: 1.3 }}>
                      {s.title}
                    </h3>
                  </div>
                  {s.badge && (
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, color: s.color, background: s.bg, border: `1px solid ${s.color}`, borderRadius: '4px', padding: '2px 7px', whiteSpace: 'nowrap' }}>
                      {s.badge}
                    </span>
                  )}
                </div>
                <div style={{ height: '2px', background: s.color, borderRadius: '2px', opacity: 0.25 }} />
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#374151', lineHeight: 1.5 }}>
                      <span style={{ color: s.color, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.68rem', fontWeight: 600, color: s.color, background: s.bg, borderRadius: '4px', padding: '2px 7px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section style={{ background: 'white', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '2rem 0' }}>
        <span style={{ display: 'block', textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'linear-gradient(90deg, #1a1a6e 0%, #ff007a 50%, #00c8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent', padding: '0 1rem', marginBottom: '1rem' }}>
          Trusted by businesses across India &amp; beyond
        </span>
        <div className="trusted-clients">
          {clients.map(c => (
            <span key={c} className="trusted-client">{c}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '700px', width: '100%' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.75rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'white' }}>
            Ready to AImagine your business?
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', maxWidth: '560px', margin: '1rem auto', color: '#d1d5db', lineHeight: 1.7 }}>
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
