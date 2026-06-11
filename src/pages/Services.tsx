import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Custom AI models, NLP pipelines, computer vision, and intelligent automation solutions tailored to your business needs.',
    detail: 'We design and train machine learning models for classification, prediction, anomaly detection, and more. From data collection through model deployment, we handle every step — including MLOps for ongoing model performance.',
    tags: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'HuggingFace'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Modern, performant web applications built with React, Next.js, and Node.js — from landing pages to enterprise platforms.',
    detail: 'Full-stack web development with a focus on performance, accessibility, and scale. We build everything from marketing sites and SaaS dashboards to complex multi-tenant platforms.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'n8n Automation',
    desc: 'End-to-end workflow automation connecting your tools — CRM, email, databases, and APIs — with zero manual effort.',
    detail: 'We implement self-hosted n8n workflows that replace repetitive manual processes. Connect Slack, Google Sheets, Notion, Airtable, Stripe, and hundreds of other tools in automated pipelines that run 24/7.',
    tags: ['n8n', 'Zapier', 'Make', 'REST APIs', 'Webhooks'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Chatbot & Voicebot',
    desc: 'Intelligent conversational agents for customer support, lead generation, and internal operations across all channels.',
    detail: 'We build AI-powered chatbots using GPT-4, Claude, and custom fine-tuned models. Deployed on your website, WhatsApp, Telegram, or voice channels — with live handoff, analytics, and CRM integration.',
    tags: ['GPT-4', 'Dialogflow', 'WhatsApp API', 'Twilio', 'RAG'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'Cross-platform mobile applications for iOS and Android with seamless UX and robust backend infrastructure.',
    detail: 'React Native and Flutter apps that feel native. We cover the full lifecycle — UX design, development, App Store submission, and post-launch maintenance. Backend APIs included.',
    tags: ['React Native', 'Flutter', 'Expo', 'Firebase', 'App Store'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Digital Transformation',
    desc: 'End-to-end strategy and execution for businesses moving to digital-first operations — from cloud migration to process re-engineering.',
    detail: 'We audit your existing operations, map the digital opportunity, and execute the transformation. This includes cloud infrastructure, data pipelines, team training, and change management.',
    tags: ['AWS', 'GCP', 'DevOps', 'CI/CD', 'Cloud Migration'],
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We start by deeply understanding your business, users, and objectives before writing a single line of code.' },
  { step: '02', title: 'Design & Plan', desc: 'Architecture, wireframes, and a detailed project roadmap with milestones and deliverables you can track.' },
  { step: '03', title: 'Build & Iterate', desc: 'Agile development with weekly demos. You see progress and give feedback at every stage.' },
  { step: '04', title: 'Launch & Scale', desc: 'Production deployment, monitoring, and ongoing support as your product grows.' },
];

export default function Services() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-8"
            style={{ background: 'rgba(232,24,122,0.12)', border: '1px solid rgba(232,24,122,0.25)', color: '#E8187A' }}>
            What we do
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.03em', maxWidth: '700px' }}>
            Services built for<br />
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              the intelligent era.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            From AI models to automation workflows to production apps — we are the end-to-end technology partner for ambitious businesses.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 px-6" style={{ background: '#F7F8FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 20px rgba(0,0,0,0.04)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ background: 'linear-gradient(135deg, #E8187A, #C41060)' }}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: '#0A0A0A', fontFamily: 'Outfit, sans-serif' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>{s.desc}</p>
                <p className="text-xs leading-relaxed mb-5" style={{ color: '#94a3b8' }}>{s.detail}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(27,57,144,0.07)', color: '#1B3990' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#E8187A' }}>How we work</p>
            <h2 className="font-black" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              Our process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-5xl font-black mb-4"
                  style={{ fontFamily: 'Outfit, sans-serif', color: 'rgba(232,24,122,0.12)', letterSpacing: '-0.04em' }}>
                  {p.step}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0A0A0A' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{p.desc}</p>
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
            Not sure which service fits?
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Tell us your challenge and we'll recommend the right approach — no obligation.
          </p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: '#E8187A' }}>
            Book a free consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
