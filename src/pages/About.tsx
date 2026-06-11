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
    desc: 'We don\'t bolt AI on at the end. We design systems with intelligence baked in from day one — making every product smarter, faster, and more autonomous.',
  },
  {
    title: 'Outcome Obsessed',
    desc: 'We measure success by the business results our work creates — reduced costs, increased revenue, time saved, problems solved. Not lines of code shipped.',
  },
  {
    title: 'Built to Last',
    desc: 'We write production-grade code, set up proper CI/CD, document everything, and design systems that scale. No shortcuts, no technical debt by default.',
  },
  {
    title: 'Transparent Partners',
    desc: 'Weekly updates, accessible team members, honest scoping. We tell you what will and won\'t work — before you pay for it.',
  },
];

const team = [
  { name: 'Vivek M', role: 'Founder & CEO', focus: 'AI Strategy, Product' },
  { name: 'Tech Lead', role: 'Lead Engineer', focus: 'Full-Stack, Cloud' },
  { name: 'AI Team', role: 'ML Engineers', focus: 'Models, Pipelines' },
  { name: 'Design Team', role: 'UI/UX Designers', focus: 'Product, Visual' },
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
      <section className="pt-36 pb-24 px-6 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
        </div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-8"
            style={{ background: 'rgba(232,24,122,0.12)', border: '1px solid rgba(232,24,122,0.25)', color: '#E8187A' }}>
            About us
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                className="font-black text-white mb-6"
                style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
                We are Cherubim.<br />
                <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Built in Chennai.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '480px' }}>
                Since 2019, we've been building AI-powered software, automation workflows, and digital products that help businesses grow faster and work smarter.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                className="grid grid-cols-4 gap-4">
                {stats.map(s => (
                  <div key={s.n}>
                    <div className="font-black text-2xl mb-0.5" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>{s.n}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Cherubim AI Infosoft Pvt Ltd is a Chennai-based technology company specialising in AI-driven software solutions, workflow automation, and digital product development.
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                We partner with startups, SMEs, and enterprises to build intelligent systems that reduce manual effort, improve decision-making, and accelerate growth — from first prototype to production at scale.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Our team of engineers, designers, and AI specialists has delivered 80+ projects across e-commerce, education, real estate, healthcare, and SaaS — and we've built our own AI products along the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: '#F7F8FF' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>What drives us</p>
            <h2 className="font-black" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              Our values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: '#E8187A' }} />
                <h3 className="font-bold text-lg mb-3" style={{ color: '#0A0A0A', fontFamily: 'Outfit, sans-serif' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>Our journey</p>
            <h2 className="font-black" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              From day one to today
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[88px] top-0 bottom-0 w-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-8">
                  <div className="w-16 text-right flex-shrink-0">
                    <span className="text-sm font-bold" style={{ color: '#E8187A', fontFamily: 'Outfit, sans-serif' }}>{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 rounded-full mt-1.5" style={{ background: '#E8187A' }} />
                  </div>
                  <p className="text-sm leading-relaxed pt-0.5" style={{ color: '#374151' }}>{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6" style={{ background: '#F7F8FF' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>The team</p>
            <h2 className="font-black" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              People behind the work
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-10 rounded-full mb-4 flex items-center justify-center font-bold text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #E8187A, #1B3990)' }}>
                  {t.name.charAt(0)}
                </div>
                <div className="font-bold text-sm mb-0.5" style={{ color: '#0A0A0A' }}>{t.name}</div>
                <div className="text-xs mb-2" style={{ color: '#E8187A' }}>{t.role}</div>
                <div className="text-xs" style={{ color: '#94a3b8' }}>{t.focus}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-black text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em' }}>
            Want to join us or work with us?
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We're always open to talented engineers, designers, and AI specialists.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: '#E8187A' }}>
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
