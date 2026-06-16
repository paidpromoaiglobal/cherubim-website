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
      <div className="px-8 lg:px-14 xl:px-20 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo-icon.jpg" alt="Cherubim" className="h-10 w-auto object-contain" />
              <div>
                <div className="font-black text-base" style={{ fontFamily: 'Outfit, sans-serif', color: '#E8187A' }}>
                  CHERUBIM AI INFOSOFT
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: '#2BA4D4' }}>
                  Let's AImagine Together!
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Cherubim AI Infosoft Pvt Ltd is a Chennai-based technology company building AI-powered software, automation workflows, and digital products since 2019.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: 'LinkedIn', href: '#', icon: 'in' },
                { label: 'Twitter', href: '#', icon: 'X' },
                { label: 'WhatsApp', href: 'https://wa.me/919384888421', icon: 'W' },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 hover:opacity-80 cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#E8187A' }}>Services</h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm transition-colors duration-200 cursor-pointer hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.72)' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#E8187A' }}>Company</h4>
            <ul className="space-y-3 mb-6">
              {company.map(c => (
                <li key={c.label}>
                  <Link to={c.to} className="text-sm transition-colors duration-200 cursor-pointer hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.72)' }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>
              <a href="tel:+919384888421" className="block hover:text-white transition-colors cursor-pointer">+91 93848 88421</a>
              <a href="mailto:info@cherubim.in" className="block hover:text-white transition-colors cursor-pointer">info@cherubim.in</a>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} Cherubim AI Infosoft Pvt Ltd · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" className="text-xs transition-colors cursor-pointer hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
