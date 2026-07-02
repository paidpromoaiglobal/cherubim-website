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
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=380&fit=crop&auto=format&q=80',
    link: 'https://www.sakthiyogalaya.com/',
  },
  {
    name: 'Petal & Pin',
    type: 'Landing Page',
    tag: 'Retail',
    year: '2025',
    desc: 'Elegant product landing page for a floral gifting brand with online booking, gallery showcase, and WhatsApp inquiry flow.',
    services: ['React', 'Tailwind CSS', 'Vercel'],
    highlight: '3x inquiry conversion rate',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=380&fit=crop&auto=format&q=80',
    link: 'https://www.petalnpin.com/',
  },
  {
    name: 'Sri Hayagreeva Coaching',
    type: 'Website + CMS',
    tag: 'Education',
    year: '2026',
    desc: 'Academic coaching centre website featuring teacher profiles, board exam results gallery, Google Reviews integration, and course enquiry form.',
    services: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    highlight: 'Live student results showcase',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=380&fit=crop&auto=format&q=80',
    link: 'https://www.hayagreevatuitioncenter.co.in/',
  },
  {
    name: 'Nalam Yogaa',
    type: 'Business Website',
    tag: 'Yoga',
    year: '2026',
    desc: 'Professional wellness website for a yoga centre featuring class schedules, service listings, and client testimonials.',
    services: ['HTML', 'CSS', 'Vercel'],
    highlight: 'SEO-optimised local presence',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=380&fit=crop&auto=format&q=80',
    link: 'https://www.nalamyogaa.in/',
  },
  {
    name: 'Guruji Platform',
    type: 'Full-Stack SaaS',
    tag: 'EdTech',
    year: '2025',
    desc: 'Educator platform connecting tutors with students — featuring course management, live session booking, and integrated payment processing.',
    services: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    highlight: '500+ active users at launch',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=380&fit=crop&auto=format&q=80',
    link: 'https://guruji.support/',
  },
  {
    name: 'PaidPromo AI',
    type: 'AI Website Builder',
    tag: 'AI Automation',
    year: '2025',
    desc: 'Our own AI product — a platform that generates complete business websites from a single prompt, using n8n workflows and LLMs to produce and deploy static sites automatically.',
    services: ['n8n', 'LLMs', 'GitHub API', 'Vercel API'],
    highlight: 'Built by Cherubim internally',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=380&fit=crop&auto=format&q=80',
    link: 'https://www.paidpromo.ai/',
  },
];

const allTags = ['All', ...Array.from(new Set(projects.map(p => p.tag)))];

const stats = [
  { n: '6+', l: 'Completed Projects' },
  { n: '5', l: 'Industries Served' },
  { n: '100%', l: 'Client Satisfaction' },
  { n: '2025–26', l: 'Active Projects' },
];

const testimonials = [
  { text: 'Cherubim built our enrollment system in under 2 weeks. The team was responsive and delivered exactly what we needed.', author: 'Sakthi Yogalaya', role: 'Summer Camp 2026' },
  { text: 'The AI website builder they created for us generates full deployments in minutes. Genuinely impressive engineering.', author: 'PaidPromo AI', role: 'Internal Product' },
  { text: 'Our website now ranks #1 for local search terms. The Cherubim team understood our business, not just the tech.', author: 'Nalam Yogaa', role: 'Yoga · Business Website' },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active);

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
        </div>
        <div className="page-hero-inner" style={{ maxWidth: '900px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.2, color: 'white', margin: 0 }}>
            Work we're{' '}
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              proud of.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '580px', margin: '1rem auto 0', lineHeight: 1.7, color: '#d1d5db', opacity: 0.8 }}>
            Real projects. Real clients. Real results — across education, retail, construction, and AI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="portfolio-stats">
            {stats.map(s => (
              <div key={s.n} className="portfolio-stat">
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#ff007a', lineHeight: 1 }}>
                  {s.n}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section style={{ background: '#F7F8FF' }}>
        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', padding: '1.5rem 1rem', margin: '0 auto' }}>
          {allTags.map(tag => (
            <button key={tag} onClick={() => setActive(tag)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: active === tag ? '1px solid #ff007a' : '1px solid rgba(0,0,0,0.15)',
                background: active === tag ? '#ff007a' : 'white',
                color: active === tag ? '#fff' : '#374151',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="portfolio-grid">
          {filtered.map((p, i) => (
            <motion.div key={p.name} layout
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="portfolio-card"
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}>
              {/* Image */}
              <div style={{ position: 'relative' }}>
                <img src={p.image} alt={p.name}
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }} />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255,255,255,0.9)',
                  color: '#111',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '999px',
                }}>
                  {p.year}
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.25rem 1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ff007a' }}>
                  {p.tag}
                </span>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0A0A0A' }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#ff007a', fontWeight: 500, margin: 0 }}>
                  {p.type}
                </p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, opacity: 0.75, margin: '0.3rem 0', color: '#374151' }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '0.5rem' }}>
                  {p.services.map(s => (
                    <span key={s} style={{ fontSize: '0.72rem', color: '#555' }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 600, color: '#ff007a', marginTop: '0.75rem' }}>
                  <span>✓</span>
                  <span>{p.highlight}</span>
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 700, color: '#E8187A', textDecoration: 'none', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.8rem', marginTop: '0.4rem', width: '100%' }}>
                  View Live Site
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: 'white' }}>
        <div className="page-section-inner" style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff007a', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
            What clients say
          </span>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#0A0A0A', marginBottom: '2.5rem' }}>
            Words from our clients
          </h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  textAlign: 'left',
                  background: 'white',
                }}>
                <div style={{ color: '#ff007a', fontSize: '1rem' }}>★★★★★</div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, opacity: 0.85, fontStyle: 'italic', margin: 0, color: '#1a1a1a', flex: 1 }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#ff007a',
                    color: '#fff',
                    fontWeight: 700,
                    fontFamily: 'Outfit, sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1rem',
                  }}>
                    {t.author[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0A0A0A', fontFamily: 'Outfit, sans-serif' }}>{t.author}</div>
                    <div style={{ fontSize: '0.78rem', opacity: 0.6, color: '#374151' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)', textAlign: 'center', padding: '5rem 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff' }}>
            Ready to be our next success story?
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.8, margin: '0.75rem auto', maxWidth: '520px', color: '#d1d5db', lineHeight: 1.7 }}>
            Tell us about your project and let's figure out how we can help.
          </p>
          <Link to="/contact" className="cta-btn-outline">
            Start your project →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
