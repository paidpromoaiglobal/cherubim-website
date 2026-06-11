import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const links = ['services', 'about us', 'clients', 'contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 md:py-10"
      style={{ background: 'linear-gradient(to bottom, rgba(241,241,241,0.80), transparent)', backdropFilter: 'blur(2px)' }}>
      <div className="grid grid-cols-12 max-w-7xl mx-auto px-6 md:px-10 items-center">

        {/* Logo — cols 1-3 */}
        <div className="col-span-3 flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2C14 2 10 6 6 8C6 8 2 12 2 14C2 16 6 20 6 20C8 22 12 26 14 26C16 26 20 22 22 20C24 18 26 16 26 14C26 12 24 10 22 8C20 6 16 2 14 2Z" fill="#1a1a1a"/>
            <path d="M14 7C14 7 11 10 9 11.5C7 13 7 14 7 14C7 15 9 17 11.5 18.5C13 19.5 14 21 14 21C15 19.5 16 19 18.5 17.5C21 16 21 15 21 14C21 13 19 11 17 9.5C15.5 8 14 7 14 7Z" fill="#EDEEF5"/>
          </svg>
          <span className="text-[#1a1a1a] font-bold text-lg tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Cherubim
          </span>
        </div>

        {/* Nav links — cols 4-9 */}
        <div className="col-span-6 hidden md:flex items-center justify-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.replace(' ', '-')}`}
              className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200 cursor-pointer lowercase tracking-wide">
              {link}
            </a>
          ))}
        </div>

        {/* Right — cols 10-12 */}
        <div className="col-span-3 flex items-center justify-end gap-3">
          <a href="#clients" className="hidden md:block text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-200 cursor-pointer">
            our work
          </a>
          <a href="#contact"
            className="hidden md:flex items-center gap-1 bg-[#1a1a1a] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-200 cursor-pointer">
            get started →
          </a>
          {/* Hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#1a1a1a]" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#1a1a1a]" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} transition={{ duration: 0.2 }}
              className="block w-5 h-px bg-[#1a1a1a]" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/90 backdrop-blur-md border-t border-black/5 mt-2"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map(link => (
                <a key={link} href={`#${link.replace(' ', '-')}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors lowercase cursor-pointer">
                  {link}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="text-sm font-medium text-white bg-[#1a1a1a] px-4 py-2 rounded-full text-center cursor-pointer">
                get started →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
