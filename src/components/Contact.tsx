import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#9fff00' }}>Get in touch</p>
          <h2 className="font-light text-white mb-6"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}>
            Let's build something<br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>intelligent together.</span>
          </h2>
          <div className="space-y-4 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.16 3.18 2 2 0 0 1 3.14 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 8 8l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 23 18"/>
              </svg>
              <a href="tel:+919384888421" className="hover:text-white transition-colors cursor-pointer">+91 93848 88421</a>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:info@cherubim.in" className="hover:text-white transition-colors cursor-pointer">info@cherubim.in</a>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
          onSubmit={e => e.preventDefault()}
        >
          {[
            { id: 'name', label: 'Your name', type: 'text' },
            { id: 'email', label: 'Email address', type: 'email' },
            { id: 'company', label: 'Company (optional)', type: 'text' },
          ].map(f => (
            <div key={f.id}>
              <input
                id={f.id}
                type={f.type}
                placeholder={f.label}
                className="w-full px-4 py-3 text-sm text-white placeholder-zinc-500 rounded-lg border transition-colors duration-200 focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}
              />
            </div>
          ))}
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full px-4 py-3 text-sm text-white placeholder-zinc-500 rounded-lg border transition-colors duration-200 focus:outline-none resize-none"
            style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}
          />
          <button
            type="submit"
            className="w-full py-3 text-sm font-medium text-black rounded-full transition-opacity duration-200 hover:opacity-90 cursor-pointer"
            style={{ background: '#9fff00' }}
          >
            Send message →
          </button>
        </motion.form>
      </div>
    </section>
  );
}
