import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  {
    name: 'Sakthi Yogalaya',
    type: 'Web Platform + Payments',
    tag: 'Education',
    year: '2026',
    desc: 'Multi-step enrollment system for a summer yoga camp with Razorpay payments, email notifications, and a weekly enrollment report dashboard.',
    services: ['Next.js', 'MySQL', 'Razorpay', 'Vercel'],
    highlight: '40+ enrollments in first week',
    initials: 'SY',
  },
  {
    name: 'Petal & Pin',
    type: 'Landing Page',
    tag: 'Retail',
    year: '2025',
    desc: 'Elegant product landing page for a floral gifting brand with online booking, gallery showcase, and WhatsApp inquiry flow.',
    services: ['React', 'Tailwind CSS', 'Vercel'],
    highlight: '3× inquiry conversion rate',
    initials: 'PP',
  },
  {
    name: 'Sri Hayagreeva Coaching',
    type: 'Website + CMS',
    tag: 'Education',
    year: '2026',
    desc: 'Academic coaching centre website featuring teacher profiles, board exam results gallery, Google Reviews integration, and course enquiry form.',
    services: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    highlight: 'Live student results showcase',
    initials: 'SH',
  },
  {
    name: 'Raj Construction',
    type: 'Business Website',
    tag: 'Construction',
    year: '2026',
    desc: 'Professional business website for a construction firm featuring project portfolio, service listings, and client testimonials.',
    services: ['HTML', 'CSS', 'Vercel'],
    highlight: 'SEO-optimised local presence',
    initials: 'RC',
  },
  {
    name: 'Guruji Platform',
    type: 'Full-Stack SaaS',
    tag: 'EdTech',
    year: '2025',
    desc: 'Educator platform connecting tutors with students — featuring course management, live session booking, and integrated payment processing.',
    services: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    highlight: '500+ active users at launch',
    initials: 'GP',
  },
  {
    name: 'PaidPromo AI',
    type: 'AI Website Builder',
    tag: 'AI Automation',
    year: '2025',
    desc: 'Our own AI product — a platform that generates complete business websites from a single prompt, using n8n workflows and LLMs to produce and deploy static sites automatically.',
    services: ['n8n', 'LLMs', 'GitHub API', 'Vercel API'],
    highlight: 'Built by Cherubim internally',
    initials: 'PA',
  },
];

const tagMeta: Record<string, { gradient: string; color: string; bg: string }> = {
  'Education':     { gradient: 'linear-gradient(135deg, #1B3990, #2BA4D4)', color: '#1B3990', bg: 'rgba(27,57,144,0.08)' },
  'Retail':        { gradient: 'linear-gradient(135deg, #E8187A, #FF4DA6)', color: '#E8187A', bg: 'rgba(232,24,122,0.08)' },
  'Construction':  { gradient: 'linear-gradient(135deg, #2BA4D4, #1B3990)', color: '#2BA4D4', bg: 'rgba(43,164,212,0.08)' },
  'EdTech':        { gradient: 'linear-gradient(135deg, #7c3aed, #1B3990)', color: '#7c3aed', bg: 'rgba(124,58,237,0.08)' },
  'AI Automation': { gradient: 'linear-gradient(135deg, #E8187A, #1B3990)', color: '#E8187A', bg: 'rgba(232,24,122,0.08)' },
};

const allTags = ['All', ...Array.from(new Set(projects.map(p => p.tag)))];

const heroStats = [
  { n: '80+', l: 'Projects Delivered' },
  { n: '6+',  l: 'Years Experience' },
  { n: '40+', l: 'Happy Clients' },
  { n: '100%', l: 'Satisfaction Rate' },
];

const testimonials = [
  {
    text: 'Cherubim built our enrollment system in under 2 weeks. The team was responsive and delivered exactly what we needed.',
    author: 'Sakthi Yogalaya',
    role: 'Education · Summer Camp 2026',
  },
  {
    text: 'The AI website builder they created for us generates full deployments in minutes. Genuinely impressive engineering.',
    author: 'PaidPromo AI',
    role: 'AI Automation · Internal Product',
  },
  {
    text: 'Our website now ranks #1 for local search terms. The Cherubim team understood our business, not just the tech.',
    author: 'Raj Construction',
    role: 'Construction · Business Website',
  },
];

export default function Work() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active);

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
        </div>

        <div className="work-hero-inner">
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E8187A', marginBottom: '1rem' }}>
            Case Studies
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'white', marginBottom: '1.25rem', maxWidth: '680px' }}>
            Work we're{' '}
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              proud of.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: 1.75, color: '#d1d5db', maxWidth: '500px', marginBottom: '3rem' }}>
            Real projects. Real clients. Real results — across education, retail, construction, and AI.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="work-hero-stats">
            {heroStats.map((s, i) => (
              <div key={s.n} className="work-hero-stat"
                style={{ borderRight: i < heroStats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: '#E8187A', lineHeight: 1 }}>
                  {s.n}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Projects ── */}
      <section className="work-projects-section">
        <div className="work-inner">

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="work-filter-row">
            {allTags.map(tag => (
              <button key={tag} onClick={() => setActive(tag)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: active === tag ? '1px solid #E8187A' : '1px solid rgba(0,0,0,0.12)',
                  background: active === tag ? '#E8187A' : 'white',
                  color: active === tag ? '#fff' : '#374151',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                }}>
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Cards grid */}
          <div className="work-grid">
            {filtered.map((p, i) => {
              const meta = tagMeta[p.tag] ?? { gradient: 'linear-gradient(135deg, #2BA4D4, #1B3990)', color: '#2BA4D4', bg: 'rgba(43,164,212,0.08)' };
              return (
                <motion.div key={p.name} layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="work-card">

                  {/* Gradient banner */}
                  <div style={{ height: '148px', background: meta.gradient, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                    {/* Dot-pattern overlay */}
                    <div style={{ position: 'absolute', inset: 0, opacity: 0.12, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                    {/* Project initials */}
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.6rem', fontWeight: 900, color: 'rgba(255,255,255,0.95)', position: 'relative', zIndex: 1, letterSpacing: '-0.04em' }}>
                      {p.initials}
                    </span>
                    {/* Year badge */}
                    <span style={{ position: 'absolute', top: '12px', right: '14px', background: 'rgba(0,0,0,0.25)', backdropFilter: 'blur(6px)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)' }}>
                      {p.year}
                    </span>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Tag chip */}
                    <span style={{ display: 'inline-block', alignSelf: 'flex-start', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: meta.color, background: meta.bg, padding: '3px 10px', borderRadius: '999px', marginBottom: '0.7rem' }}>
                      {p.tag}
                    </span>

                    {/* Title */}
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.2rem', fontWeight: 800, color: '#0A0A0A', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                      {p.name}
                    </h3>

                    {/* Type */}
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E8187A', marginBottom: '0.75rem' }}>
                      {p.type}
                    </p>

                    {/* Description */}
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: '#64748b', flex: 1, marginBottom: '1rem' }}>
                      {p.desc}
                    </p>

                    {/* Tech stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '0.9rem' }}>
                      {p.services.map(s => (
                        <span key={s} style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151', background: 'rgba(0,0,0,0.05)', padding: '3px 8px', borderRadius: '6px' }}>
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Result highlight */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.6rem 0.85rem', background: 'rgba(232,24,122,0.06)', borderRadius: '8px', borderLeft: '3px solid #E8187A' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E8187A' }}>{p.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="work-testimonials-section">
        <div className="work-inner">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E8187A', display: 'block', marginBottom: '0.5rem' }}>
              Client Feedback
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.03em' }}>
              What clients say
            </h2>
          </div>

          <div className="work-testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: '#F7F8FF', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                {/* Quote mark */}
                <div style={{ fontFamily: 'Georgia, serif', fontSize: '4rem', lineHeight: 0.8, color: '#E8187A', opacity: 0.25, marginBottom: '0.75rem', userSelect: 'none' }}>"</div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: '#374151', fontStyle: 'italic', flex: 1, marginBottom: '1.5rem' }}>
                  {t.text}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, #E8187A, #1B3990)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>
                    {t.author[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Outfit, sans-serif' }}>{t.author}</div>
                    <div style={{ fontSize: '0.77rem', color: '#94a3b8', marginTop: '2px' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)', padding: '5rem 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', fontWeight: 900, color: 'white', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Ready to be our next success story?
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', color: '#d1d5db', lineHeight: 1.7, marginBottom: '2rem' }}>
            Tell us about your project and let's figure out how we can help.
          </p>
          <Link to="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.9rem 2.25rem', background: '#E8187A', color: 'white', borderRadius: '999px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 4px 24px rgba(232,24,122,0.45)', transition: 'opacity 0.2s, transform 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}>
            Start your project →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
