import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      {/* Hero */}
      <section style={{ background: '#0A0A0A', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
        </div>
        <div className="page-hero-inner" style={{ maxWidth: '800px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.2, color: 'white', margin: 0 }}>
            Services built for<br />
            <span style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              the intelligent era.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7, color: '#d1d5db', opacity: 0.85 }}>
            From AI models to automation workflows to production apps — we are the end-to-end technology partner for ambitious businesses.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: '#F7F8FF' }}>
        <div className="services-page-grid">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="services-page-card"
              style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '16px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                height: '100%',
                cursor: 'pointer',
              }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: '#ff007a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.5rem',
                flexShrink: 0,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.15rem', fontWeight: 700, color: '#0A0A0A', margin: 0 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#374151', margin: 0 }}>
                {s.desc}
              </p>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#64748b', margin: 0, opacity: 0.7 }}>
                {s.detail}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '1rem' }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#ff007a',
                    background: 'rgba(255,0,122,0.08)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'white' }}>
        <div className="page-section-inner" style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ff007a', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
            How we work
          </span>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#0A0A0A', marginBottom: '3rem' }}>
            Our process
          </h2>
          <div className="process-grid">
            {process.map((p, i) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '3rem', fontWeight: 900, color: '#ff007a', opacity: 0.25, lineHeight: 1, marginBottom: '0.5rem' }}>
                  {p.step}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0A0A0A', marginBottom: '0.4rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: '#64748b', opacity: 0.7, margin: 0 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(135deg, #1B3990 0%, #0A0A0A 60%, #E8187A 100%)' }}>
        <div style={{ maxWidth: '700px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'white' }}>
            Not sure which service fits?
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '560px', margin: '1rem auto', color: '#d1d5db', lineHeight: 1.7 }}>
            Tell us your challenge and we'll recommend the right approach — no obligation.
          </p>
          <Link to="/contact" className="cta-btn cursor-pointer transition-opacity duration-200 hover:opacity-90"
            style={{ background: '#ff007a', color: 'white', textDecoration: 'none' }}>
            Book a free consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
