import { motion, useScroll, useTransform } from 'motion/react';
import boatImage from '../../imports/screen-removebg-preview.png';
import oceanBg from '../../imports/BgmiVivek/e321796a397009430ed31a831ce702944bf81dbd.png';

export function HeroSection() {
  const { scrollYProgress } = useScroll();

  // Text fades out as you scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Boat moves left as you scroll
  const boatX = useTransform(scrollYProgress, [0, 0.4], [0, -1200]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Ocean Background Image */}
      <div className="absolute inset-0" style={{ height: '100%', width: '100%' }}>
        <img
          src={oceanBg}
          alt="Ocean background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">

        {/* Content wrapper for CIH and Title */}
        <div className="w-full flex flex-col items-center gap-6" style={{ position: 'relative', top: '-25vh' }}>
          {/* CIH 2026 Badge */}
          <motion.div style={{ opacity: textOpacity }}>
            <div className="border-2 px-4 py-1" style={{ borderColor: 'var(--primary-orange)' }}>
              <p style={{
                fontFamily: "'Korsen', sans-serif",
                fontSize: 'clamp(12px, 1.3vw, 17px)',
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
            className="text-center px-4"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(10px, 1.1vw, 15px)',
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
            className="w-full max-w-4xl mx-auto text-center text-[18px] sm:text-[34px] md:text-[50px] lg:text-[68px] xl:text-[76px] uppercase font-bold px-4"
            style={{
              fontFamily: "'Korsen', sans-serif",
              color: 'var(--primary-orange)',
              lineHeight: 1.15,
              letterSpacing: 0,
              opacity: textOpacity,
              textShadow: '3px 3px 12px rgba(0,0,0,0.15)',
            }}
          >
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>COASTAL INNOVATION</span>
            <span style={{ display: 'block' }}>HACKATHON</span>
          </motion.h1>
        </div>
      </div>

      {/* Animated Boat */}
      <motion.div
        className="hidden md:block absolute z-20"
        style={{
          bottom: '5%',
          left: '50%',
          x: useTransform(boatX, (value) => `calc(-50% + ${value}px)`),
          width: 'clamp(280px, 28vw, 910px)',
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

      {/* Bottom transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-24" style={{
        background: 'linear-gradient(to top, #fbf5ed 0%, #fbf5ed 20%, transparent 100%)'
      }}></div>
    </div>
  );
}
