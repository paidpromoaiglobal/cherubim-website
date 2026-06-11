import { motion } from 'motion/react';

const stats = [
  { n: '6+', l: 'Years of experience' },
  { n: '80+', l: 'Projects delivered' },
  { n: '40+', l: 'Happy clients' },
  { n: '15+', l: 'Team members' },
];

export default function About() {
  return (
    <section id="about-us" className="py-24 px-6" style={{ background: '#f5f5f0' }}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-3">About us</p>
          <h2 className="font-light text-[#1a1a1a] mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}>
            We are Cherubim AI Infosoft.<br />
            <span style={{ color: '#8e8e8e' }}>Built in Chennai, trusted globally.</span>
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed mb-4">
            Founded in 2019, Cherubim AI Infosoft Pvt Ltd is a technology company specialising in AI-driven software solutions, workflow automation, and digital product development.
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed mb-8">
            We partner with startups, SMEs, and enterprises to build intelligent systems that reduce manual effort, improve decision-making, and accelerate growth — from first prototype to production at scale.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-white px-6 py-3 rounded-full cursor-pointer transition-colors duration-200"
            style={{ background: '#1a1a1a' }}>
            Work with us →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-px"
          style={{ background: 'rgba(0,0,0,0.08)' }}
        >
          {stats.map(s => (
            <div key={s.n} className="p-8" style={{ background: '#f5f5f0' }}>
              <div className="font-light text-[#1a1a1a] mb-1"
                style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.8rem', letterSpacing: '-0.04em' }}>
                {s.n}
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
