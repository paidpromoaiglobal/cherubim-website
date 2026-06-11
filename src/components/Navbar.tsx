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
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="px-8 lg:px-14 xl:px-20 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
          <img src="/favicon.svg" alt="Cherubim" className="h-9 w-auto" />
          <div className="hidden sm:block">
            <div className="font-black text-base leading-tight tracking-tight" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>
              CHERUBIM AI INFOSOFT
            </div>
            <div className="text-[10px] font-bold tracking-widest uppercase mt-0.5" style={{ color: '#1B3990' }}>
              Let's AImagine Together!
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
              style={{
                color: location.pathname === l.to ? '#E8187A' : '#374151',
                background: location.pathname === l.to ? 'rgba(232,24,122,0.08)' : 'transparent',
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #E8187A, #1B3990)' }}>
            Get Started →
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 cursor-pointer" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <div className="flex flex-col gap-1.5">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-zinc-800" />
            <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-zinc-800" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-zinc-800" />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: 'rgba(0,0,0,0.06)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(l => (
                <Link key={l.to} to={l.to}
                  className="py-3 px-4 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  style={{ color: location.pathname === l.to ? '#E8187A' : '#374151', background: location.pathname === l.to ? 'rgba(232,24,122,0.08)' : 'transparent' }}>
                  {l.label}
                </Link>
              ))}
              <Link to="/contact"
                className="mt-2 py-3 text-center rounded-full text-sm font-bold text-white cursor-pointer"
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
