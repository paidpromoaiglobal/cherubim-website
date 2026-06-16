import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const stats = [
  { n: '6+', l: 'Years' },
  { n: '80+', l: 'Projects' },
  { n: '40+', l: 'Clients' },
  { n: '15+', l: 'Experts' },
];

const values = [
  {
    title: 'AI-First Thinking',
    desc: "We don't bolt AI on at the end. We design systems with intelligence baked in from day one — making every product smarter, faster, and more autonomous.",
  },
  {
    title: 'Outcome Obsessed',
    desc: 'We measure success by the business results our work creates — reduced costs, increased revenue, time saved, problems solved. Not lines of code shipped.',
  },
  {
    title: 'Built to Last',
    desc: "We write production-grade code, set up proper CI/CD, document everything, and design systems that scale. No shortcuts, no technical debt by default.",
  },
  {
    title: 'Transparent Partners',
    desc: "Weekly updates, accessible team members, honest scoping. We tell you what will and won't work — before you pay for it.",
  },
];

const team = [
  { name: 'Vivek M', role: 'Founder & CEO', focus: 'AI Strategy, Product', avatarColor: '#7c3aed' },
  { name: 'Tech Lead', role: 'Lead Engineer', focus: 'Full-Stack, Cloud', avatarColor: '#9333ea' },
  { name: 'AI Team', role: 'ML Engineers', focus: 'Models, Pipelines', avatarColor: '#a855f7' },
  { name: 'Design Team', role: 'UI/UX Designers', focus: 'Product, Visual', avatarColor: '#c084fc' },
];

const milestones = [
  { year: '2019', event: 'Founded in Chennai, first project delivered' },
  { year: '2020', event: 'Expanded into AI/ML services and automation' },
  { year: '2021', event: 'Built our first chatbot platform for enterprise clients' },
  { year: '2022', event: 'Crossed 30 clients across India, UAE, and the US' },
  { year: '2023', event: 'Launched PaidPromo AI — our own AI SaaS product' },
  { year: '2024', event: 'Team of 15, 70+ projects delivered' },
  { year: '2025', event: 'Incorporated as Cherubim AI Infosoft Pvt Ltd' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
        </div>
        <div className="about-hero-grid">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, color: 'white', margin: 0 }}>
              We are Cherubim.<br />
              <span style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Built in Chennai.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontSize: '1rem', lineHeight: 1.75, opacity: 0.8, maxWidth: '480px', color: '#d1d5db', marginTop: '1.25rem' }}>
              Since 2019, we've been building AI-powered software, automation workflows, and digital products that help businesses grow faster and work smarter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="about-stats">
              {stats.map(s => (
                <div key={s.n} className="about-stat">
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ff007a', lineHeight: 1 }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: '0.78rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#d1d5db', marginTop: '0.25rem' }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderRadius: '16px', padding: '2rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.75, color: '#d1d5db', margin: 0 }}>
              Cherubim AI Infosoft Pvt Ltd is a Chennai-based technology company specialising in AI-driven software solutions, workflow automation, and digital product development.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.75, color: '#d1d5db', margin: 0 }}>
              We partner with startups, SMEs, and enterprises to build intelligent systems that reduce manual effort, improve decision-making, and accelerate growth — from first prototype to production at scale.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.75, color: '#d1d5db', margin: 0 }}>
              Our team of engineers, designers, and AI specialists has delivered 80+ projects across e-commerce, education, real estate, healthcare, and SaaS — and we've built our own AI products along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#F7F8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff007a', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              What drives us
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0A0A0A', margin: 0 }}>
              Our values
            </h2>
          </div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="about-value-card"
                style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.75rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff007a', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.6rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, opacity: 0.72, color: '#374151', margin: 0 }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff007a', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              Our journey
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0A0A0A', margin: 0 }}>
              From day one to today
            </h2>
          </div>
          <div>
            {milestones.map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="timeline-row">
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ff007a', textAlign: 'right', paddingTop: '2px' }}>
                  {m.year}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff007a', flexShrink: 0 }} />
                  {i < milestones.length - 1 && (
                    <div style={{ width: '2px', background: 'rgba(255,0,122,0.2)', minHeight: '24px', flex: 1 }} />
                  )}
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#374151', margin: 0, paddingTop: '2px', paddingBottom: i < milestones.length - 1 ? '1.25rem' : 0 }}>
                  {m.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#F7F8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff007a', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              The team
            </span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0A0A0A', margin: 0 }}>
              People behind the work
            </h2>
          </div>
          <div className="about-team-grid">
            {team.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '1.5rem' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: t.avatarColor,
                  color: '#fff',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  {t.name.charAt(0)}
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.25rem' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#ff007a', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {t.role}
                </div>
                <div style={{ fontSize: '0.78rem', opacity: 0.6, color: '#374151' }}>
                  {t.focus}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)', textAlign: 'center', padding: '4rem 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#fff', margin: 0 }}>
            Want to join us or work with us?
          </h2>
          <p style={{ fontSize: '1rem', opacity: 0.8, maxWidth: '480px', margin: '0.75rem auto', color: '#d1d5db', lineHeight: 1.7 }}>
            We're always open to talented engineers, designers, and AI specialists.
          </p>
          <Link to="/contact" className="about-join-link">
            Get in touch →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
