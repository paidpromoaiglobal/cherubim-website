export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{ background: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <path d="M14 2C14 2 10 6 6 8C6 8 2 12 2 14C2 16 6 20 6 20C8 22 12 26 14 26C16 26 20 22 22 20C24 18 26 16 26 14C26 12 24 10 22 8C20 6 16 2 14 2Z" fill="rgba(255,255,255,0.3)"/>
            <path d="M14 7C14 7 11 10 9 11.5C7 13 7 14 7 14C7 15 9 17 11.5 18.5C13 19.5 14 21 14 21C15 19.5 16 19 18.5 17.5C21 16 21 15 21 14C21 13 19 11 17 9.5C15.5 8 14 7 14 7Z" fill="#1a1a1a"/>
          </svg>
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Outfit, sans-serif' }}>
            Cherubim AI Infosoft Pvt Ltd
          </span>
        </div>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} Cherubim AI Infosoft Pvt Ltd · Chennai, India · CIN: U72900TN2019PTC000000
        </p>
        <div className="flex items-center gap-5">
          {['Privacy', 'Terms'].map(l => (
            <a key={l} href="#" className="text-xs transition-colors duration-200 cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.3)' }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
