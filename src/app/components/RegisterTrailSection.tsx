import { motion } from 'motion/react';
import shipImage from '../../imports/screen-removebg-preview.png';
import treasureMap from '../../imports/Gemini_Generated_Image_j5vw7zj5vw7zj5vw-removebg-preview.png';

export function RegisterTrailSection() {
  return (
    <section className="relative py-20 px-8 overflow-hidden" style={{ backgroundColor: '#FFF5F1', minHeight: '80vh' }}>
      <div className="max-w-7xl mx-auto relative">
        {/* Register Now Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 style={{
            fontFamily: "'Korsen', sans-serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            color: 'var(--primary-orange)',
            letterSpacing: '4px',
            marginBottom: '16px'
          }}>
            REGISTER NOW
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(14px, 2vw, 18px)',
            color: 'var(--primary-text)',
            fontWeight: 600
          }}>
            Join the journey to innovation
          </p>
        </motion.div>

        {/* Treasure Map Trail */}
        <div className="relative w-full max-w-5xl mx-auto" style={{ height: '400px' }}>
          {/* Treasure Map Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={treasureMap}
              alt="Treasure Map"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
              }}
            />
          </motion.div>

          {/* Dotted Trail on Map */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 400"
            fill="none"
            style={{ zIndex: 10 }}
          >
            {/* Curved dotted path */}
            <path
              d="M 100 200 Q 250 120, 400 200 T 700 200"
              stroke="#8B4513"
              strokeWidth="4"
              strokeDasharray="8,12"
              fill="none"
              opacity="0.7"
            />
          </svg>

          {/* Ship on Trail */}
          <motion.div
            className="absolute z-20"
            style={{
              left: '15%',
              top: '45%',
              width: 'clamp(80px, 12vw, 140px)'
            }}
            animate={{
              x: [0, 15, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src={shipImage}
              alt="Ship"
              className="w-full h-auto"
              style={{
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))',
                transform: 'rotate(-5deg)'
              }}
            />
          </motion.div>

          {/* Register Button with Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute z-20"
            style={{
              right: '5%',
              bottom: '15%'
            }}
          >
            <button
              className="relative px-8 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-3"
              style={{
                backgroundColor: 'var(--primary-orange)',
                color: 'white',
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(230, 107, 54, 0.5)'
              }}
            >
              Register
              {/* Arrow */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
