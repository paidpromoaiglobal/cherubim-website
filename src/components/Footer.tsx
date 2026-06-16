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
      <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, #E8187A, #1B3990, transparent)' }} />

      {/* Main grid */}
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/logo-icon.jpg" alt="Cherubim" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '0.875rem', color: '#E8187A' }}>
                CHERUBIM AI INFOSOFT
              </div>
              <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px', color: '#2BA4D4' }}>
                Let's AImagine Together!
              </div>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#c9d6df', maxWidth: '320px', marginBottom: '1.25rem' }}>
            Chennai-based AI & software company building intelligent products, automation workflows, and digital solutions since 2019.
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[
              { label: 'LinkedIn', href: '#', icon: 'in' },
              { label: 'Twitter', href: '#', icon: 'X' },
              { label: 'WhatsApp', href: 'https://wa.me/919384888421', icon: 'W' },
            ].map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                  marginRight: '8px',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600, color: '#E8187A' }}>
            Services
          </h4>
          {serviceLinks.map(s => (
            <Link key={s} to="/services"
              style={{ fontSize: '0.95rem', lineHeight: 2, display: 'block', color: '#c9d6df', textDecoration: 'none' }}
              className="hover:text-white transition-colors">
              {s}
            </Link>
          ))}
        </div>

        {/* Company column */}
        <div>
          <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600, color: '#E8187A' }}>
            Company
          </h4>
          <div style={{ marginBottom: '1.5rem' }}>
            {companyLinks.map(c => (
              <Link key={c.label} to={c.to}
                style={{ fontSize: '0.95rem', lineHeight: 2, display: 'block', color: '#c9d6df', textDecoration: 'none' }}
                className="hover:text-white transition-colors">
                {c.label}
              </Link>
            ))}
          </div>
          <a href="tel:+919384888421"
            style={{ fontSize: '0.875rem', lineHeight: 2, display: 'block', color: '#c9d6df', textDecoration: 'none' }}
            className="hover:text-white transition-colors">
            +91 93848 88421
          </a>
          <a href="mailto:info@cherubim.in"
            style={{ fontSize: '0.875rem', lineHeight: 2, display: 'block', color: '#c9d6df', textDecoration: 'none' }}
            className="hover:text-white transition-colors">
            info@cherubim.in
          </a>
          <p style={{ fontSize: '0.875rem', lineHeight: 2, color: '#c9d6df' }}>Chennai, Tamil Nadu, India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p style={{ color: '#64748b' }}>
          © {new Date().getFullYear()} Cherubim AI Infosoft Pvt Ltd · All rights reserved
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {['Privacy Policy', 'Terms of Service'].map(l => (
            <a key={l} href="#"
              style={{ color: '#64748b', textDecoration: 'none', cursor: 'pointer' }}
              className="hover:text-white transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
