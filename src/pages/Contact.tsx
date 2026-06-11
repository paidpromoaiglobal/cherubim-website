import { motion } from 'motion/react';
import { useState } from 'react';

const faqs = [
  { q: 'How quickly can you start?', a: 'Typically within 1–3 business days of contract signing. We hold weekly kickoff slots for new projects.' },
  { q: 'What\'s your pricing model?', a: 'We offer fixed-price projects for well-defined scope, and retainer/time-and-materials for ongoing work. We provide a detailed quote after the discovery call.' },
  { q: 'Do you work with international clients?', a: 'Yes. We have clients in India, UAE, the US, and UK. We work asynchronously with time zone overlap where possible.' },
  { q: 'Who owns the code after delivery?', a: 'You do. Full IP transfer is standard in all our contracts.' },
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

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 px-8 md:px-14 xl:px-20 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #E8187A, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #1B3990, transparent)' }} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-8"
            style={{ background: 'rgba(232,24,122,0.12)', border: '1px solid rgba(232,24,122,0.25)', color: '#E8187A' }}>
            Get in touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-0.03em', maxWidth: '700px' }}>
            Let's build something{' '}
            <span style={{ background: 'linear-gradient(135deg, #E8187A, #2BA4D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              intelligent.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            Tell us about your project. We'll get back to you within 24 hours with an initial assessment.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 px-8 md:px-14 xl:px-20" style={{ background: '#F7F8FF' }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <h2 className="font-black mb-8" style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.03em', color: '#0A0A0A' }}>
              Reach us directly
            </h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.16 3.18 2 2 0 0 1 3.14 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 18"/>
                    </svg>
                  ),
                  label: 'Phone / WhatsApp',
                  value: '+91 93848 88421',
                  href: 'https://wa.me/919384888421',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'info@cherubim.in',
                  href: 'mailto:info@cherubim.in',
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
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(232,24,122,0.08)', color: '#E8187A' }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: '#94a3b8' }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium hover:opacity-70 transition-opacity cursor-pointer" style={{ color: '#0A0A0A' }}>
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: '#0A0A0A' }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-bold text-base mb-5" style={{ color: '#0A0A0A', fontFamily: 'Outfit, sans-serif' }}>Common questions</h3>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="p-5 rounded-xl"
                    style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <p className="text-sm font-semibold mb-1.5" style={{ color: '#0A0A0A' }}>{f.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{f.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            <div className="p-8 rounded-2xl sticky top-28"
              style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(232,24,122,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8187A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-black text-xl mb-2" style={{ fontFamily: 'Outfit, sans-serif', color: '#0A0A0A' }}>Message sent!</h3>
                  <p className="text-sm" style={{ color: '#64748b' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-black text-xl mb-6" style={{ fontFamily: 'Outfit, sans-serif', color: '#0A0A0A' }}>
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium block mb-1.5" style={{ color: '#374151' }}>Your name *</label>
                        <input
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ravi Kumar"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border transition-colors duration-200 focus:outline-none"
                          style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0A0A0A', background: '#F7F8FF' }}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium block mb-1.5" style={{ color: '#374151' }}>Email *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="ravi@company.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-xl border transition-colors duration-200 focus:outline-none"
                          style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0A0A0A', background: '#F7F8FF' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: '#374151' }}>Company</label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company (optional)"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border transition-colors duration-200 focus:outline-none"
                        style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0A0A0A', background: '#F7F8FF' }}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium block mb-1.5" style={{ color: '#374151' }}>Service interested in</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border transition-colors duration-200 focus:outline-none cursor-pointer"
                        style={{ borderColor: 'rgba(0,0,0,0.1)', color: form.service ? '#0A0A0A' : '#94a3b8', background: '#F7F8FF' }}>
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
                      <label className="text-xs font-medium block mb-1.5" style={{ color: '#374151' }}>Your project *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your challenge or project idea..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border transition-colors duration-200 focus:outline-none resize-none"
                        style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#0A0A0A', background: '#F7F8FF' }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] cursor-pointer"
                      style={{ background: 'linear-gradient(135deg, #E8187A, #C41060)' }}>
                      Send message →
                    </button>
                    <p className="text-center text-xs" style={{ color: '#94a3b8' }}>
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
