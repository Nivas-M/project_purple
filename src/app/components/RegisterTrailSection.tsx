import { motion } from 'motion/react';

export function RegisterTrailSection() {
  return (
    <section className="relative min-h-screen px-8 py-20 flex items-center overflow-hidden" style={{ backgroundColor: '#fbf5ed' }}>
      {/* Decorative Artwork Overlays - Coastal Karnataka/India Theme */}

      {/* Top Left - Lighthouse */}
      <div className="absolute left-8 top-8 w-48 h-64 opacity-25 pointer-events-none">
        <svg viewBox="0 0 192 256" fill="none" className="w-full h-full">
          {/* Lighthouse */}
          <rect x="70" y="120" width="50" height="100" fill="#EA580C" opacity="0.3" />
          <rect x="70" y="130" width="50" height="15" fill="#0E7490" opacity="0.5" />
          <rect x="70" y="160" width="50" height="15" fill="#0E7490" opacity="0.5" />
          <rect x="70" y="190" width="50" height="15" fill="#0E7490" opacity="0.5" />
          <polygon points="95,120 65,110 125,110" fill="#EA580C" opacity="0.4" />
          <ellipse cx="95" cy="95" rx="20" ry="10" fill="#EA580C" opacity="0.5" />
          <rect x="60" y="220" width="70" height="10" fill="#0E7490" opacity="0.4" />
          {/* Light rays */}
          <line x1="95" y1="95" x2="40" y2="60" stroke="#EA580C" strokeWidth="2" opacity="0.3" />
          <line x1="95" y1="95" x2="150" y2="60" stroke="#EA580C" strokeWidth="2" opacity="0.3" />
          <line x1="95" y1="95" x2="20" y2="95" stroke="#EA580C" strokeWidth="2" opacity="0.3" />
        </svg>
      </div>

      {/* Top Right - Coconut Palm */}
      <div className="absolute right-12 top-0 w-64 h-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 256 320" fill="none" className="w-full h-full">
          {/* Palm trunk */}
          <path d="M128,320 Q135,250 130,200 Q125,150 132,100 Q128,50 128,20" stroke="#EA580C" strokeWidth="6" fill="none" opacity="0.4" />
          {/* Palm leaves */}
          <path d="M128,30 Q100,25 70,35 Q50,40 30,50" stroke="#0E7490" strokeWidth="4" fill="none" opacity="0.5" />
          <path d="M128,30 Q150,20 180,25 Q200,30 220,40" stroke="#0E7490" strokeWidth="4" fill="none" opacity="0.5" />
          <path d="M128,40 Q115,30 95,40 Q80,45 65,55" stroke="#0E7490" strokeWidth="4" fill="none" opacity="0.4" />
          <path d="M128,40 Q145,32 170,38 Q185,42 200,50" stroke="#0E7490" strokeWidth="4" fill="none" opacity="0.4" />
          <path d="M128,50 Q120,40 105,48 Q95,53 85,62" stroke="#0E7490" strokeWidth="3" fill="none" opacity="0.4" />
          <path d="M128,50 Q138,42 155,48 Q170,53 180,60" stroke="#0E7490" strokeWidth="3" fill="none" opacity="0.4" />
          {/* Coconuts */}
          <circle cx="115" cy="70" r="8" fill="#EA580C" opacity="0.4" />
          <circle cx="125" cy="75" r="8" fill="#EA580C" opacity="0.4" />
          <circle cx="135" cy="72" r="8" fill="#EA580C" opacity="0.4" />
        </svg>
      </div>

      {/* Bottom Left - Traditional Fishing Boat (Vallam) */}
      <div className="hidden md:block absolute left-4 bottom-8 w-72 h-48 opacity-25 pointer-events-none">
        <svg viewBox="0 0 288 192" fill="none" className="w-full h-full">
          {/* Boat hull */}
          <path d="M40,140 Q50,130 100,125 L200,125 Q250,130 260,140 L240,150 Q220,145 150,142 L100,142 Q60,145 40,150 Z" fill="#EA580C" opacity="0.4" stroke="#EA580C" strokeWidth="2" />
          <path d="M100,125 L110,100 L200,100 L200,125" fill="#EA580C" opacity="0.3" />
          {/* Mast */}
          <line x1="150" y1="100" x2="150" y2="30" stroke="#0E7490" strokeWidth="3" opacity="0.5" />
          {/* Sail */}
          <path d="M150,35 Q180,50 150,95 Z" fill="#0E7490" opacity="0.3" stroke="#0E7490" strokeWidth="2" />
          {/* Waves */}
          <path d="M20,155 Q40,150 60,155 Q80,160 100,155" stroke="#0E7490" strokeWidth="2" fill="none" opacity="0.4" />
          <path d="M180,155 Q200,150 220,155 Q240,160 260,155" stroke="#0E7490" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      </div>

      {/* Bottom Right - Ashoka Chakra Inspired Pattern */}
      <div className="absolute right-8 bottom-12 w-56 h-56 opacity-15 pointer-events-none">
        <svg viewBox="0 0 224 224" fill="none" className="w-full h-full">
          {/* Center circle */}
          <circle cx="112" cy="112" r="80" stroke="#0E7490" strokeWidth="2" fill="none" opacity="0.4" />
          <circle cx="112" cy="112" r="60" stroke="#EA580C" strokeWidth="2" fill="none" opacity="0.4" />
          <circle cx="112" cy="112" r="15" fill="#0E7490" opacity="0.5" />
          {/* Spokes */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 112 + 20 * Math.cos(angle);
            const y1 = 112 + 20 * Math.sin(angle);
            const x2 = 112 + 75 * Math.cos(angle);
            const y2 = 112 + 75 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EA580C" strokeWidth="2" opacity="0.4" />;
          })}
        </svg>
      </div>

      {/* Center - Compass Rose */}
      <div className="absolute left-1/4 top-1/4 w-32 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 128 128" fill="none" className="w-full h-full">
          <circle cx="64" cy="64" r="50" stroke="#0E7490" strokeWidth="2" fill="none" opacity="0.4" />
          {/* Cardinal directions */}
          <polygon points="64,20 70,55 64,50 58,55" fill="#EA580C" opacity="0.5" />
          <polygon points="64,108 70,73 64,78 58,73" fill="#EA580C" opacity="0.4" />
          <polygon points="20,64 55,58 50,64 55,70" fill="#0E7490" opacity="0.5" />
          <polygon points="108,64 73,58 78,64 73,70" fill="#0E7490" opacity="0.4" />
        </svg>
      </div>

      {/* Floating Seashells */}
      <div className="absolute right-1/3 top-1/2 w-20 h-20 opacity-25 pointer-events-none">
        <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
          <path d="M40,10 Q25,20 20,40 Q25,50 40,55 Q55,50 60,40 Q55,20 40,10 Z" fill="#EA580C" opacity="0.4" stroke="#EA580C" strokeWidth="1.5" />
          <path d="M40,10 L40,55 M30,25 Q40,30 50,25 M28,38 Q40,42 52,38" stroke="#0E7490" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold mb-6 tracking-tight" style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#1C1917'
          }}>
            Ready to Build Something <span style={{ color: '#EA580C' }}>Extraordinary</span>?
          </h2>

          <p className="mb-10 max-w-2xl mx-auto leading-relaxed" style={{
            fontSize: '18px',
            color: '#57534E',
            fontWeight: 300
          }}>
            Join 30+ teams from across India for 24 hours of intense building, mentorship from industry experts, and a chance to pitch at the Coastal Innovation Summit.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 rounded-lg font-medium text-white transition-all shadow-sm"
            style={{
              backgroundColor: '#1C1917',
              fontSize: '16px'
            }}
          >
            Register Your Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
