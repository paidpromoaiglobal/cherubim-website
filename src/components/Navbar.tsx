import { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="px-6 md:px-8 lg:px-14 xl:px-20 h-12 md:h-14 flex items-center justify-between">

        {/* Logo — only on home */}
        {location.pathname === '/' ? (
          <Link to="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
            <img src="/logo-icon.jpg" alt="Cherubim" className="h-6 w-auto object-contain" />
            <div className="hidden sm:block">
              <div className="font-black text-xs leading-tight tracking-tight" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>
                CHERUBIM AI INFOSOFT
              </div>
              <div className="text-[8px] font-bold tracking-widest uppercase mt-0.5"
                style={{ color: scrolled ? '#1B3990' : 'rgba(255,255,255,0.7)' }}>
                Let's AImagine Together!
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {/* Hamburger — always visible on all screen sizes */}
        <button
          className="p-2 cursor-pointer rounded-lg transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          style={{ background: open ? 'rgba(232,24,122,0.1)' : 'transparent' }}
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5"
              style={{ background: scrolled || open ? '#1f2937' : 'white' }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5"
              style={{ background: scrolled || open ? '#1f2937' : 'white' }}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5"
              style={{ background: scrolled || open ? '#1f2937' : 'white' }}
            />
          </div>
        </button>
      </div>

      {/* Drawer — full width dropdown on all screen sizes */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t"
            style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(16px)', borderColor: 'rgba(0,0,0,0.06)' }}
          >
            <div className="px-6 md:px-14 xl:px-20 py-4 flex flex-col gap-1">
              {links.map(l => (
                <Link key={l.to} to={l.to}
                  className="py-3 px-4 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                  style={{
                    color: location.pathname === l.to ? '#E8187A' : '#374151',
                    background: location.pathname === l.to ? 'rgba(232,24,122,0.08)' : 'transparent',
                  }}>
                  {l.label}
                </Link>
              ))}
              <Link to="/contact"
                className="mt-3 py-3 text-center rounded-full text-sm font-bold text-white cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #E8187A, #1B3990)' }}>
                Get Started →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
