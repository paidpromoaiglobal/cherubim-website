import { Link } from 'react-router-dom';

const services = ['AI & Machine Learning', 'Web Development', 'n8n Automation', 'Chatbot & Voicebot', 'Mobile Apps', 'Digital Transformation'];
const company = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A' }}>
      {/* Top accent */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #E8187A, #1B3990, transparent)' }} />

      <div className="px-6 md:px-10 lg:px-16 xl:px-20 pt-12 md:pt-16 pb-6 md:pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">

          {/* Brand — full width on mobile, 2 cols on desktop */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-icon.jpg" alt="Cherubim" className="h-9 w-auto object-contain" />
              <div>
                <div className="font-black text-sm" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>
                  CHERUBIM AI INFOSOFT
                </div>
                <div className="text-[9px] font-bold tracking-widest uppercase mt-0.5" style={{ color: '#2BA4D4' }}>
                  Let's AImagine Together!
                </div>
              </div>
            </div>
            <p className="text-xs md:text-sm leading-relaxed mb-5 max-w-sm" style={{ color: '#c9d6df' }}>
              Chennai-based AI & software company building intelligent products, automation workflows, and digital solutions since 2019.
            </p>
            <div className="flex items-center gap-2">
              {[
                { label: 'LinkedIn', href: '#', icon: 'in' },
                { label: 'Twitter', href: '#', icon: 'X' },
                { label: 'WhatsApp', href: 'https://wa.me/919384888421', icon: 'W' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: '#E8187A' }}>Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-xs md:text-sm transition-colors duration-200 cursor-pointer hover:text-white"
                    style={{ color: '#c9d6df' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: '#E8187A' }}>Company</h4>
            <ul className="space-y-2.5 mb-6">
              {company.map(c => (
                <li key={c.label}>
                  <Link to={c.to} className="text-xs md:text-sm transition-colors duration-200 cursor-pointer hover:text-white"
                    style={{ color: '#c9d6df' }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a href="tel:+919384888421" className="block text-xs hover:text-white transition-colors cursor-pointer" style={{ color: '#c9d6df' }}>
                +91 93848 88421
              </a>
              <a href="mailto:info@cherubim.in" className="block text-xs hover:text-white transition-colors cursor-pointer" style={{ color: '#c9d6df' }}>
                info@cherubim.in
              </a>
              <p className="text-xs" style={{ color: '#c9d6df' }}>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: '#64748b' }}>
            © {new Date().getFullYear()} Cherubim AI Infosoft Pvt Ltd · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" className="text-xs transition-colors cursor-pointer hover:text-white"
                style={{ color: '#64748b' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
