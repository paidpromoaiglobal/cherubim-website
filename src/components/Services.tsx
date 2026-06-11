import { motion } from 'motion/react';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Custom AI models, NLP pipelines, computer vision, and intelligent automation solutions tailored for your business.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Modern, performant web applications built with React, Next.js, and Node.js. From landing pages to enterprise platforms.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'n8n Automation',
    desc: 'End-to-end workflow automation connecting your tools — CRM, email, databases, and APIs — with zero manual effort.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.16 3.18 2 2 0 0 1 3.14 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 18"/>
      </svg>
    ),
    title: 'Chatbot & Voicebot',
    desc: 'Intelligent conversational agents for customer support, lead generation, and internal operations across channels.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile applications for iOS and Android with seamless UX and backend integration.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>
      </svg>
    ),
    title: 'Digital Transformation',
    desc: 'Strategy and execution for businesses moving to digital-first operations — cloud, integrations, and process re-engineering.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: '#EDEEF5' }}>
      <div className="w-full">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-3">What we do</p>
          <h2 className="font-light text-[#1a1a1a]"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}>
            Services that move<br /><span style={{ color: '#8e8e8e' }}>businesses forward.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(0,0,0,0.08)' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-8 cursor-pointer group"
              style={{ background: '#EDEEF5' }}
            >
              <div className="text-zinc-400 group-hover:text-[#1a1a1a] transition-colors duration-200 mb-5">
                {s.icon}
              </div>
              <h3 className="text-base font-semibold text-[#1a1a1a] mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
