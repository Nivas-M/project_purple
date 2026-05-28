import { motion, useScroll, useTransform } from 'motion/react';
import boatImage from '../../imports/screen-removebg-preview.png';
import oceanBg from '../../imports/BgmiVivek/e321796a397009430ed31a831ce702944bf81dbd.png';

export function HeroSection() {
  const { scrollYProgress } = useScroll();

  // Text fades out as you scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Boat moves left as you scroll
  const boatX = useTransform(scrollYProgress, [0, 0.5], [0, -400]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Ocean Background Image */}
      <div className="absolute inset-0">
        <img
          src={oceanBg}
          alt="Ocean background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">

        {/* Content wrapper for CIH and Title */}
        <div className="flex flex-col items-center gap-8" style={{ position: 'relative', top: '-25vh' }}>
          {/* CIH 2026 Badge */}
          <motion.div style={{ opacity: textOpacity }}>
            <div className="border-2 px-4 py-1" style={{ borderColor: 'var(--primary-orange)' }}>
              <p style={{
                fontFamily: "'Korsen', sans-serif",
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                fontWeight: 700,
                color: 'var(--primary-orange)',
                letterSpacing: '2px'
              }}>
                CIH 2026
              </p>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(11px, 1.3vw, 18px)',
              color: 'var(--primary-orange)',
              letterSpacing: '2px',
              opacity: textOpacity,
              fontWeight: 600
            }}
          >
            N A T I O N A L - L E V E L · 2 4 - H O U R · S P O N S O R S H I P I N V I T A T I O N
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            className="text-center max-w-5xl"
            style={{
              fontFamily: "'Korsen', sans-serif",
              fontSize: 'clamp(40px, 5vw, 90px)',
              color: 'var(--primary-orange)',
              lineHeight: 1.15,
              opacity: textOpacity,
              textTransform: 'uppercase',
              letterSpacing: '6px',
              fontWeight: 700,
              textShadow: '3px 3px 12px rgba(0,0,0,0.15)'
            }}
          >
            COASTAL INNOVATION<br />HACKATHON
          </motion.h1>
        </div>
      </div>

      {/* Animated Boat */}
      <motion.div
        className="absolute z-20"
        style={{
          bottom: '5%',
          left: '50%',
          x: useTransform(boatX, (value) => `calc(-50% + ${value}px)`),
          width: 'clamp(300px, 25vw, 700px)',
        }}
      >
        <motion.img
          src={boatImage}
          alt="Sailboat"
          className="w-full h-auto"
          style={{
            filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))',
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}
