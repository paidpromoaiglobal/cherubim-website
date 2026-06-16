import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#0d0d0d',
        padding: '0 2rem',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
        <img src="/logo-icon.jpg" alt="Cherubim" style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#ff007a', lineHeight: 1.2 }}>
            CHERUBIM AI INFOSOFT
          </div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ff007a', opacity: 0.85 }}>
            Let's AImagine Together!
          </div>
        </div>
      </Link>

      {/* Desktop nav */}
      <nav className="navbar-desktop">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="nav-link"
            style={{
              fontSize: '0.95rem',
              fontWeight: 500,
              color: location.pathname === l.to ? '#ff007a' : '#ffffff',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}>
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className="nav-get-started"
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '999px',
            background: '#ff007a',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            cursor: 'pointer',
          }}>
          Get Started
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button className="navbar-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
        <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.2 }}
          style={{ width: '24px', height: '2px', background: '#ffffff', borderRadius: '2px', display: 'block' }} />
        <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} transition={{ duration: 0.2 }}
          style={{ width: '24px', height: '2px', background: '#ffffff', borderRadius: '2px', display: 'block' }} />
        <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.2 }}
          style={{ width: '24px', height: '2px', background: '#ffffff', borderRadius: '2px', display: 'block' }} />
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              top: '70px',
              left: 0,
              width: '100%',
              background: '#0d0d0d',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  color: location.pathname === l.to ? '#ff007a' : '#ffffff',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '999px',
                background: '#ff007a',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '0.5rem',
                cursor: 'pointer',
              }}>
              Get Started
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
