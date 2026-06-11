import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Sakthi Yogalaya',
    type: 'Web Platform + Payments',
    tag: 'Education',
    year: '2026',
    desc: 'Multi-step enrollment system for a summer yoga camp with Razorpay payments, email notifications, and a weekly enrollment report dashboard.',
    services: ['Next.js', 'MySQL', 'Razorpay', 'Vercel'],
    highlight: '40+ enrollments in first week',
  },
  {
    name: 'Petal & Pin',
    type: 'Landing Page',
    tag: 'Retail',
    year: '2025',
    desc: 'Elegant product landing page for a floral gifting brand with online booking, gallery showcase, and WhatsApp inquiry flow.',
    services: ['React', 'Tailwind CSS', 'Vercel'],
    highlight: '3x inquiry conversion rate',
  },
  {
    name: 'Sri Hayagreeva Coaching',
    type: 'Website + CMS',
    tag: 'Education',
    year: '2026',
    desc: 'Academic coaching centre website featuring teacher profiles, board exam results gallery, Google Reviews integration, and course enquiry form.',
    services: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    highlight: 'Live student results showcase',
  },
  {
    name: 'Raj Construction',
    type: 'Business Website',
    tag: 'Construction',
    year: '2026',
    desc: 'Professional business website for a construction firm featuring project portfolio, service listings, and client testimonials.',
    services: ['HTML', 'CSS', 'Vercel'],
    highlight: 'SEO-optimised local presence',
  },
  {
    name: 'Guruji Platform',
    type: 'Full-Stack SaaS',
    tag: 'EdTech',
    year: '2025',
    desc: 'Educator platform connecting tutors with students — featuring course management, live session booking, and integrated payment processing.',
    services: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    highlight: '500+ active users at launch',
  },
  {
    name: 'PaidPromo AI',
    type: 'AI Website Builder',
    tag: 'AI Automation',
    year: '2025',
    desc: 'Our own AI product — a platform that generates complete business websites from a single prompt, using n8n workflows and LLMs to produce and deploy static sites automatically.',
    services: ['n8n', 'LLMs', 'GitHub API', 'Vercel API'],
    highlight: 'Built by Cherubim internally',
  },
];

const tagColors: Record<string, { bg: string; color: string }> = {
  'Education': { bg: 'rgba(27,57,144,0.08)', color: '#1B3990' },
  'Retail': { bg: 'rgba(232,24,122,0.08)', color: '#E8187A' },
  'Construction': { bg: 'rgba(43,164,212,0.08)', color: '#2BA4D4' },
  'EdTech': { bg: 'rgba(27,57,144,0.08)', color: '#1B3990' },
  'AI Automation': { bg: 'rgba(232,24,122,0.08)', color: '#E8187A' },
};

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #2BA4D4, transparent)' }} />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
        </div>
        <div className="max-w-[1600px] mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-8"
            style={{ background: 'rgba(232,24,122,0.12)', border: '1px solid rgba(232,24,122,0.25)', color: '#E8187A' }}>
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.03em', maxWidth: '700px' }}>
            Work we're{' '}
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              proud of.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            A selection of projects across education, retail, construction, and AI — each one built with a specific business outcome in mind.
          </motion.p>
        </div>
      </section>

      {/* Projects list */}
      <section className="py-24 px-6" style={{ background: '#F7F8FF' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={tagColors[p.tag] || { bg: 'rgba(0,0,0,0.06)', color: '#555' }}>
                      {p.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: '#94a3b8' }}>{p.year}</span>
                </div>
                <h3 className="font-black text-xl mb-1" style={{ fontFamily: 'Outfit, sans-serif', color: '#0A0A0A' }}>
                  {p.name}
                </h3>
                <p className="text-xs font-medium mb-4" style={{ color: '#E8187A' }}>{p.type}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {p.services.map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded font-medium"
                        style={{ background: 'rgba(0,0,0,0.04)', color: '#374151' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-4 flex items-center gap-2" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
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

      {/* Testimonial strip */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="p-7 rounded-2xl"
                style={{ background: '#F7F8FF', border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#E8187A" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#374151' }}>"{t.text}"</p>
                <div className="text-xs font-bold" style={{ color: '#0A0A0A' }}>{t.author}</div>
                <div className="text-xs mt-0.5" style={{ color: '#94a3b8' }}>{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-black text-white mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em' }}>
            Ready to be our next success story?
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us about your project and let's figure out how we can help.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: '#E8187A' }}>
            Start your project →
          </Link>
        </div>
      </section>
    </>
  );
}
