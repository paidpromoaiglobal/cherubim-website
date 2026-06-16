import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
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
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0, background: 'transparent' }}>
        <img
          src="/logo-icon.jpg"
          alt="Cherubim"
          style={{ width: '36px', height: '36px', objectFit: 'contain', flexShrink: 0, background: 'transparent', mixBlendMode: 'normal' }}
        />
        <div className="logo-text">
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#ff007a', lineHeight: 1.2 }}>
            CHERUBIM AI INFOSOFT
          </div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ff007a', opacity: 0.85 }}>
            Let's AImagine Together!
          </div>
        </div>
      </Link>

      {/* Nav — always visible on all screen sizes */}
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
    </header>
  );
}
