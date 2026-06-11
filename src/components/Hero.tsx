import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start overflow-hidden"
      style={{ minHeight: '110vh', background: '#EDEEF5' }}>

      {/* Background video */}
      <div className="absolute left-0 w-full z-0 pointer-events-none"
        style={{ top: '15vh', height: '95vh' }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover" >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260603_132049_036591b8-6e92-4760-b94c-a7ea6eef315c.mp4" type="video/mp4" />
        </video>
        {/* Gradient mask top */}
        <div className="absolute top-0 left-0 w-full h-24 sm:h-32"
          style={{ background: 'linear-gradient(to bottom, #EDEEF5, transparent)' }} />
        {/* Gradient mask bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32"
          style={{ background: 'linear-gradient(to top, #EDEEF5, transparent)' }} />
      </div>

      {/* Hero content */}
      <div className="w-full px-8 md:px-16 lg:px-20 relative z-10 grid gap-x-4 md:gap-x-8"
        style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', paddingTop: '28vh' }}>
        <div className="col-span-12 md:col-span-10" style={{ gridColumnStart: 1 }}>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-light leading-tight"
            style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            <span style={{ color: '#1a1a1a' }}>Cherubim AI: We build</span>
            <br />
            <span style={{ color: '#8e8e8e' }}>intelligent</span>
            <br />
            <span style={{ color: '#8e8e8e' }}>digital products that help</span>
            <br />
            <span style={{ color: '#8e8e8e' }}>your </span>
            {/* Eye pill */}
            <span className="inline-flex items-center justify-center rounded-full border-2 border-[#1a1a1a] mx-1 align-middle"
              style={{ width: 'clamp(16px, 4vw, 62px)', height: 'clamp(10px, 2.4vw, 36px)' }}>
              <span className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
            </span>
            <span style={{ color: '#8e8e8e' }}> business grow.</span>
          </motion.h1>

          {/* Search pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10 max-w-lg"
          >
            <div className="bg-white rounded-[6px] border flex items-center shadow-sm p-1 pl-4"
              style={{ borderColor: 'rgba(0,0,0,0.05)' }}>
              <input
                type="text"
                placeholder="Ask me anything about Cherubim..."
                className="flex-1 text-sm text-zinc-600 bg-transparent placeholder-zinc-400 focus:outline-none"
                style={{ minWidth: 0 }}
              />
              <button
                className="flex items-center justify-center text-white rounded-full cursor-pointer flex-shrink-0"
                style={{ width: 36, height: 36, background: '#1a1a1a' }}
                aria-label="Submit"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Edge anchors */}
      {/* Language switcher — middle right */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <div className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-full cursor-pointer"
          style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.7)', color: '#1a1a1a' }}>
          <span className="text-[#1a1a1a]">EN</span>
          <span className="text-zinc-400">—</span>
          <span className="text-zinc-500">தமிழ்</span>
        </div>
      </div>

      {/* Bottom left — founding year */}
      <div className="absolute bottom-8 left-8 z-10 text-xs text-zinc-400 font-medium tracking-widest">
        2019
      </div>

      {/* Bottom right — tagline */}
      <div className="absolute bottom-8 right-8 z-10 text-xs text-zinc-400 font-medium tracking-wide">
        AI · Automation · Web
      </div>
    </section>
  );
}
