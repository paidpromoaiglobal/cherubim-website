import { motion } from 'motion/react';

const projects = [
  { name: 'Sakthi Yogalaya', type: 'Web + Payments', tag: 'Education', year: '2026' },
  { name: 'Petal & Pin', type: 'Landing Page', tag: 'Retail', year: '2025' },
  { name: 'Sri Hayagreeva', type: 'Website + CMS', tag: 'Education', year: '2026' },
  { name: 'Raj Construction', type: 'Business Website', tag: 'Construction', year: '2026' },
  { name: 'Guruji Platform', type: 'Full-Stack App', tag: 'SaaS', year: '2025' },
  { name: 'PaidPromo AI', type: 'AI Website Builder', tag: 'AI Automation', year: '2025' },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-6" style={{ background: '#EDEEF5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-3">Our work</p>
            <h2 className="font-light text-[#1a1a1a]"
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}>
              Projects we're proud of.
            </h2>
          </div>
          <a href="#contact" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer">
            Start your project →
          </a>
        </div>

        <div className="flex flex-col" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-between py-5 cursor-pointer group"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center gap-6">
                <span className="text-xs text-zinc-300 font-mono w-5">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-base font-medium text-[#1a1a1a] group-hover:translate-x-1 transition-transform duration-200">
                  {p.name}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden sm:block text-xs text-zinc-400">{p.type}</span>
                <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: 'rgba(0,0,0,0.05)', color: '#555' }}>
                  {p.tag}
                </span>
                <span className="text-xs text-zinc-300 font-mono">{p.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
