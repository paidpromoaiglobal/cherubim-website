import { motion } from 'motion/react';
import { useState } from 'react';

const faqs = [
  { q: 'How quickly can you start?', a: 'Typically within 1–3 business days of contract signing. We hold weekly kickoff slots for new projects.' },
  { q: "What's your pricing model?", a: 'We offer fixed-price projects for well-defined scope, and retainer/time-and-materials for ongoing work. We provide a detailed quote after the discovery call.' },
  { q: 'Do you work with international clients?', a: 'Yes. We have clients in India, UAE, the US, and UK. We work asynchronously with time zone overlap where possible.' },
  { q: 'Who owns the code after delivery?', a: 'You do. Full IP transfer is standard in all our contracts.' },
];

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.16 3.18 2 2 0 0 1 3.14 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 18"/>
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: '+91 78697 29829',
    href: 'https://wa.me/917869729829',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'support@cherubim.in',
    href: 'mailto:support@cherubim.in',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Office',
    value: 'Chennai, Tamil Nadu, India',
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const labelStyle: React.CSSProperties = { fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '5px', opacity: 0.7, color: '#374151' };

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
        <div className="contact-hero-wrapper">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'white', margin: 0 }}>
            Let's build something{' '}
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              intelligent.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, maxWidth: '560px', marginTop: '0.75rem', opacity: 0.8, color: '#d1d5db' }}>
            Tell us about your project. We'll get back to you within 24 hours with an initial assessment.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: '#F7F8FF' }}>
        <div className="contact-grid">

          {/* Left: reach us + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0A0A0A' }}>
              Reach us directly
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {contactItems.map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: 'rgba(255,0,122,0.1)', color: '#ff007a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ff007a', fontWeight: 600, display: 'block', marginBottom: '0.15rem' }}>
                      {c.label}
                    </span>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: '0.95rem', fontWeight: 500, color: '#0A0A0A', textDecoration: 'none' }}
                        className="hover:opacity-70 transition-opacity">{c.value}</a>
                    ) : (
                      <span style={{ fontSize: '0.95rem', fontWeight: 500, color: '#0A0A0A' }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', margin: '2rem 0' }} />

            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0A0A0A' }}>
              Common questions
            </h3>
            <div>
              {faqs.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={i > 0 ? { borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1.25rem', marginTop: '1.25rem' } : {}}>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.35rem', color: '#0A0A0A' }}>{f.q}</p>
                  <p style={{ fontSize: '0.88rem', lineHeight: 1.65, opacity: 0.72, color: '#374151', margin: 0 }}>{f.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'white' }}>
              {submitted ? (
                <div style={{ padding: '3rem 0', textAlign: 'center' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(255,0,122,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff007a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: '#0A0A0A', marginBottom: '0.5rem' }}>Message sent!</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', margin: 0 }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.3rem', fontWeight: 800, color: '#0A0A0A', margin: 0 }}>
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="contact-name-email">
                      <div>
                        <label style={labelStyle}>Your name *</label>
                        <input name="name" type="text" required value={form.name} onChange={handleChange}
                          placeholder="Ravi Kumar" className="contact-input" />
                      </div>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="ravi@company.com" className="contact-input" />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input name="company" type="text" value={form.company} onChange={handleChange}
                        placeholder="Your company (optional)" className="contact-input" />
                    </div>
                    <div>
                      <label style={labelStyle}>Service interested in</label>
                      <select name="service" value={form.service} onChange={handleChange} className="contact-input"
                        style={{ cursor: 'pointer', color: form.service ? '#0A0A0A' : '#94a3b8' }}>
                        <option value="">Select a service...</option>
                        <option>AI & Machine Learning</option>
                        <option>Web Development</option>
                        <option>n8n Automation</option>
                        <option>Chatbot & Voicebot</option>
                        <option>Mobile Apps</option>
                        <option>Digital Transformation</option>
                        <option>Not sure — need advice</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Your project *</label>
                      <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your challenge or project idea..."
                        className="contact-input" style={{ minHeight: '120px', resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="contact-submit-btn"
                      style={{ width: '100%', padding: '0.9rem', background: '#ff007a', color: '#fff', borderRadius: '10px', fontSize: '1rem', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}>
                      Send message →
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.78rem', opacity: 0.5, color: '#374151', margin: 0 }}>
                      We respond within 24 hours · No spam, ever
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
