import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const whatWeDo = [
  {
    color: '#993556',
    bg: '#FBEAF0',
    icon: 'ti ti-speakerphone',
    title: 'Social Media Marketing',
    badge: '',
    features: [
      'Branded posters & reels every week',
      'AI-powered promotional videos',
      'Facebook & Instagram ad campaigns',
      'Smart audience targeting & retargeting',
      'Caption & hashtag strategy',
      'Google Ads management',
      'Competitor analysis & trend tracking',
      'Monthly performance report & insights',
      'Dedicated account manager',
    ],
    tags: ['Instagram', 'Facebook', 'YouTube Shorts', 'Google Ads', '100% branded'],
  },
  {
    color: '#0F6E56',
    bg: '#E1F5EE',
    icon: 'ti ti-brand-whatsapp',
    title: 'WhatsApp Automation',
    badge: '',
    features: [
      'Instant AI-powered auto-replies',
      'Automated lead capture & follow-up',
      'Bulk broadcast & promotional campaigns',
      'Order & appointment confirmations',
      'Payment reminders & invoice sharing',
      'Customer support chatbot',
      'CRM & Google Sheets sync',
      'Multi-agent team inbox',
      'Detailed chat analytics & reports',
    ],
    tags: ['WhatsApp Business API', 'Chatbot', 'CRM sync', '24/7 active'],
  },
  {
    color: '#534AB7',
    bg: '#EEEDFE',
    icon: 'ti ti-building-store',
    title: 'Complete Business Solution',
    badge: 'All-in-one',
    features: [
      'Website, landing pages & branding',
      'Backend systems & database setup',
      'End-to-end workflow & task automation',
      'CRM, lead & pipeline management',
      'WhatsApp & email automation',
      'Invoicing, billing & payment systems',
      'Social media & content marketing',
      'Team collaboration & project tools',
      'AI tools & smart integrations',
      'Analytics dashboard & growth reports',
      'Ongoing support & system maintenance',
    ],
    tags: ['Website', 'Backend', 'Automation', 'CRM', 'AI tools', 'Marketing', 'Support'],
  },
  {
    color: '#185FA5',
    bg: '#E6F1FB',
    icon: 'ti ti-layout-2',
    title: 'Website Design',
    badge: '',
    features: [
      'Custom design tailored to your brand',
      '100% mobile & tablet responsive',
      'SEO-optimised from day one',
      'WhatsApp & contact form integration',
      'Google Maps & social media links',
      'E-commerce & payment gateway ready',
      'Speed optimised & SSL secured',
      '1 year free hosting & domain',
      'Live in just 3–5 business days',
    ],
    tags: ['Mobile-first', 'E-commerce', 'SEO-ready', 'Fast delivery', 'SSL secured'],
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
        <div className="services-grid">
          {whatWeDo.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{
                background: 'white',
                border: s.badge ? `2px solid ${s.color}` : '1px solid #e0e0e0',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: s.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <i className={s.icon} style={{ fontSize: '22px', color: s.color }} />
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0A0A0A', margin: 0, lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                </div>
                {s.badge && (
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: s.color, background: s.bg, border: `1px solid ${s.color}`, borderRadius: '4px', padding: '2px 7px', whiteSpace: 'nowrap' }}>
                    {s.badge}
                  </span>
                )}
              </div>
              <div style={{ height: '2px', background: s.color, borderRadius: '2px', opacity: 0.25 }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                {s.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.83rem', color: '#374151', lineHeight: 1.5 }}>
                    <span style={{ color: s.color, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontSize: '0.68rem', fontWeight: 600, color: s.color, background: s.bg, borderRadius: '4px', padding: '2px 7px' }}>
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
