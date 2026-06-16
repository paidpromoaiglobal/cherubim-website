import { Link } from 'react-router-dom';

const serviceLinks = ['AI & Machine Learning', 'Web Development', 'n8n Automation', 'Chatbot & Voicebot', 'Mobile Apps', 'Digital Transformation'];
const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A' }}>
      {/* Top accent */}
      <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, #ff007a, #1B3990, transparent)' }} />

      {/* Main grid */}
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/logo-icon.png" alt="Cherubim" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.875rem', color: '#ff007a' }}>
                CHERUBIM AI INFOSOFT
              </div>
              <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px', color: '#2BA4D4' }}>
                Let's AImagine Together!
              </div>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', maxWidth: '320px', marginBottom: '1.25rem' }}>
            Chennai-based AI & software company building intelligent products, automation workflows, and digital solutions since 2019.
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[
              { label: 'LinkedIn', href: '#', icon: 'in' },
              { label: 'Twitter', href: '#', icon: 'X' },
              { label: 'WhatsApp', href: 'https://wa.me/919384888421', icon: 'W' },
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="footer-social"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.25)',
                  marginRight: '8px',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700, color: '#ff007a' }}>
            Services
          </h4>
          {serviceLinks.map(s => (
            <Link key={s} to="/services" className="footer-link"
              style={{ fontSize: '0.92rem', lineHeight: 2.2, display: 'block', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', opacity: 0.75, transition: 'opacity 0.2s' }}>
              {s}
            </Link>
          ))}
        </div>

        {/* Company column */}
        <div>
          <h4 style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700, color: '#ff007a' }}>
            Company
          </h4>
          <div style={{ marginBottom: '1.5rem' }}>
            {companyLinks.map(c => (
              <Link key={c.label} to={c.to} className="footer-link"
                style={{ fontSize: '0.92rem', lineHeight: 2.2, display: 'block', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', opacity: 0.75, transition: 'opacity 0.2s' }}>
                {c.label}
              </Link>
            ))}
          </div>
          <a href="tel:+919384888421" className="footer-link"
            style={{ fontSize: '0.875rem', lineHeight: 2.2, display: 'block', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', opacity: 0.75, transition: 'opacity 0.2s' }}>
            +91 93848 88421
          </a>
          <a href="mailto:info@cherubim.in" className="footer-link"
            style={{ fontSize: '0.875rem', lineHeight: 2.2, display: 'block', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', opacity: 0.75, transition: 'opacity 0.2s' }}>
            info@cherubim.in
          </a>
          <p style={{ fontSize: '0.875rem', lineHeight: 2.2, color: 'rgba(255,255,255,0.5)', margin: 0 }}>Chennai, Tamil Nadu, India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Cherubim AI Infosoft Pvt Ltd · All rights reserved
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {['Privacy Policy', 'Terms of Service'].map(l => (
            <a key={l} href="#" className="footer-link"
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', cursor: 'pointer', opacity: 0.75, transition: 'opacity 0.2s' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
