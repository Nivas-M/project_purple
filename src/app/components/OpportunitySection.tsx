import { motion } from 'motion/react';
import boatImage from '../../imports/Gemini_Generated_Image_q1moccq1moccq1mo-removebg-preview.png';
import sec3Bg from '../../imports/sec3bg.png';

export function OpportunitySection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-20 overflow-hidden flex items-center"
      style={{
        backgroundColor: '#459099',
      }}
    >
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${sec3Bg})`,
          transform: 'scale(1.03)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#fbf5ed] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#fbf5ed] to-transparent z-10 pointer-events-none" />
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-3xl"
          >
            <div
              className="rounded-2xl bg-white/85 px-8 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-md border border-white/70 md:px-10 md:py-10"
              style={{ borderColor: 'rgba(29, 111, 120, 0.18)' }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight" style={{ color: 'var(--primary-text)' }}>
                The <span style={{ color: 'var(--primary-orange)' }}>Opportunity</span>
              </h2>
              <div className="h-px w-20 mb-5" style={{ backgroundColor: 'rgba(29, 111, 120, 0.45)' }} />
              <div className="space-y-5 text-lg leading-relaxed" style={{ color: 'rgba(42, 42, 42, 0.78)', fontWeight: 400 }}>
                <p>
                  1.5M engineers graduate yearly, many from smaller cities with limited access.
                </p>
                <p>
                  <strong style={{ color: 'var(--primary-text)', fontWeight: 600 }}>Coastal Innovation Hackathon changes that.</strong> 24 hours. Real judges. Rs. 1,50,000 and a summit pitch invite.
                </p>
                <p>
                  You will build alongside mentors from industry, refine your ideas in live feedback sessions, and ship a demo that stands out.
                </p>
                <p>
                  The best teams earn cash prizes, a summit stage, and visibility with innovators shaping coastal communities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Boat image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative z-20 lg:absolute lg:right-[-8vw] lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[70vw] lg:min-w-[52vw] lg:max-w-none overflow-hidden lg:overflow-visible"
          >
            <img
              src={boatImage}
              alt="Traditional boat"
              className="w-full h-auto"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))',
                transform: 'scale(1.22) translateX(2%)',
                transformOrigin: 'right center',
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Wave pattern overlay for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="0.5"/>
            <path d="M0,70 Q25,50 50,70 T100,70" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>
    </section>
  );
}
