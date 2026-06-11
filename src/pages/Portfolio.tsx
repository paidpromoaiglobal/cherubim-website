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
    emoji: '🧘',
  },
  {
    name: 'Petal & Pin',
    type: 'Landing Page',
    tag: 'Retail',
    year: '2025',
    desc: 'Elegant product landing page for a floral gifting brand with online booking, gallery showcase, and WhatsApp inquiry flow.',
    services: ['React', 'Tailwind CSS', 'Vercel'],
    highlight: '3x inquiry conversion rate',
    emoji: '🌸',
  },
  {
    name: 'Sri Hayagreeva Coaching',
    type: 'Website + CMS',
    tag: 'Education',
    year: '2026',
    desc: 'Academic coaching centre website featuring teacher profiles, board exam results gallery, Google Reviews integration, and course enquiry form.',
    services: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    highlight: 'Live student results showcase',
    emoji: '📚',
  },
  {
    name: 'Raj Construction',
    type: 'Business Website',
    tag: 'Construction',
    year: '2026',
    desc: 'Professional business website for a construction firm featuring project portfolio, service listings, and client testimonials.',
    services: ['HTML', 'CSS', 'Vercel'],
    highlight: 'SEO-optimised local presence',
    emoji: '🏗️',
  },
  {
    name: 'Guruji Platform',
    type: 'Full-Stack SaaS',
    tag: 'EdTech',
    year: '2025',
    desc: 'Educator platform connecting tutors with students — featuring course management, live session booking, and integrated payment processing.',
    services: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    highlight: '500+ active users at launch',
    emoji: '🎓',
  },
  {
    name: 'PaidPromo AI',
    type: 'AI Website Builder',
    tag: 'AI Automation',
    year: '2025',
    desc: 'Our own AI product — a platform that generates complete business websites from a single prompt, using n8n workflows and LLMs to produce and deploy static sites automatically.',
    services: ['n8n', 'LLMs', 'GitHub API', 'Vercel API'],
    highlight: 'Built by Cherubim internally',
    emoji: '🤖',
  },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  Education:     { bg: 'rgba(27,57,144,0.1)',   color: '#1B3990' },
  Retail:        { bg: 'rgba(232,24,122,0.1)',   color: '#E8187A' },
  Construction:  { bg: 'rgba(43,164,212,0.1)',   color: '#2BA4D4' },
  EdTech:        { bg: 'rgba(27,57,144,0.1)',    color: '#1B3990' },
  'AI Automation': { bg: 'rgba(232,24,122,0.1)', color: '#E8187A' },
};

const allTags = ['All', ...Array.from(new Set(projects.map(p => p.tag)))];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-8 md:px-14 xl:px-20 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
        </div>

        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8"
            style={{ background: 'rgba(232,24,122,0.12)', border: '1px solid rgba(232,24,122,0.25)', color: '#E8187A' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Our Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '-0.03em', maxWidth: '800px' }}>
            Work we're{' '}
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              proud of.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg max-w-2xl mb-10" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
            Real projects. Real clients. Real results — across education, retail, construction, and AI.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-10">
            {[
              { n: '6+', l: 'Completed Projects' },
              { n: '5', l: 'Industries Served' },
              { n: '100%', l: 'Client Satisfaction' },
              { n: '2025–26', l: 'Active Projects' },
            ].map(s => (
              <div key={s.n}>
                <div className="font-black text-3xl" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>{s.n}</div>
                <div className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-20 px-8 md:px-14 xl:px-20" style={{ background: '#F7F8FF' }}>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{
                background: active === tag ? 'linear-gradient(135deg, #E8187A, #1B3990)' : 'white',
                color: active === tag ? 'white' : '#374151',
                border: active === tag ? 'none' : '1px solid rgba(0,0,0,0.1)',
                boxShadow: active === tag ? '0 4px 12px rgba(232,24,122,0.3)' : 'none',
              }}>
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-3xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>

              {/* Card colour banner */}
              <div className="h-36 flex items-center justify-center text-6xl relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${tagColors[p.tag]?.color ?? '#1B3990'}18, ${tagColors[p.tag]?.color ?? '#1B3990'}08)` }}>
                <span className="group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono px-2 py-1 rounded-lg"
                    style={{ background: 'rgba(255,255,255,0.7)', color: '#94a3b8', backdropFilter: 'blur(4px)' }}>
                    {p.year}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={tagColors[p.tag] ?? { background: 'rgba(0,0,0,0.06)', color: '#555' }}>
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-black text-2xl mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#0A0A0A' }}>
                  {p.name}
                </h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#E8187A' }}>{p.type}</p>
                <p className="text-base leading-relaxed mb-6" style={{ color: '#64748b' }}>{p.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.services.map(s => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(0,0,0,0.04)', color: '#374151', border: '1px solid rgba(0,0,0,0.06)' }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Highlight */}
                <div className="flex items-center gap-2 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(232,24,122,0.1)' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#E8187A' }}>{p.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 md:px-14 xl:px-20" style={{ background: 'white' }}>
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>What clients say</p>
          <h2 className="font-black" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
            Words from our clients
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: 'Cherubim built our enrollment system in under 2 weeks. The team was responsive and delivered exactly what we needed.', author: 'Sakthi Yogalaya', role: 'Summer Camp 2026' },
            { text: 'The AI website builder they created for us generates full deployments in minutes. Genuinely impressive engineering.', author: 'PaidPromo AI', role: 'Internal Product' },
            { text: 'Our website now ranks #1 for local search terms. The Cherubim team understood our business, not just the tech.', author: 'Raj Construction', role: 'Business Website' },
          ].map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl"
              style={{ background: '#F7F8FF', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#E8187A" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-base leading-relaxed mb-5" style={{ color: '#374151' }}>"{t.text}"</p>
              <div className="text-sm font-black" style={{ color: '#0A0A0A', fontFamily: 'Outfit, sans-serif' }}>{t.author}</div>
              <div className="text-sm mt-0.5" style={{ color: '#94a3b8' }}>{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-14 xl:px-20" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-black text-white mb-4"
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>
              Ready to be our next success story?
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Tell us about your project and let's figure out how we can help.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: '#E8187A', boxShadow: '0 4px 20px rgba(232,24,122,0.4)' }}>
              Start your project →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
