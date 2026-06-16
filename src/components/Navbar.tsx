import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="navbar-header"
        style={{
          width: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#0d0d0d',
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0, background: 'transparent' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img
              src="/logo-icon.png"
              alt="Cherubim"
              style={{ width: '42px', height: '38px', objectFit: 'contain' }}
            />
          </div>
          <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#ff007a', lineHeight: 1.2 }}>
              CHERUBIM AI INFOSOFT
            </div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2BA4D4', opacity: 0.95 }}>
              Let's AImagine Together!
            </div>
          </div>
        </Link>

        {/* Desktop nav — hidden at ≤768px */}
        <nav className="navbar-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="nav-link"
              style={{
                fontWeight: 500,
                color: location.pathname === l.to ? '#ff007a' : '#ffffff',
                textDecoration: 'none',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="nav-get-started"
            style={{
              borderRadius: '999px',
              background: '#ff007a',
              color: '#fff',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
            Get Started
          </Link>
        </nav>

        {/* Hamburger button — visible at ≤768px */}
        <button
          className="hamburger-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            padding: '10px',
            borderRadius: '8px',
            minWidth: '44px',
            minHeight: '44px',
          }}>
          <span className={`ham-bar${open ? ' ham-top-open' : ''}`} />
          <span className={`ham-bar${open ? ' ham-mid-open' : ''}`} />
          <span className={`ham-bar${open ? ' ham-bot-open' : ''}`} />
        </button>
      </header>

      {/* Mobile dropdown */}
      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="mobile-menu-link"
              onClick={() => setOpen(false)}
              style={{
                color: location.pathname === l.to ? '#ff007a' : 'rgba(255,255,255,0.9)',
                fontWeight: location.pathname === l.to ? 700 : 500,
              }}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mobile-get-started" onClick={() => setOpen(false)}>
            Get Started →
          </Link>
        </div>
      )}
    </>
  );
}
