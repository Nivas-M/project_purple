import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const MenuIcon = ({ type, isHovered }: { type: string; isHovered: boolean }) => {
  const iconColor = isHovered ? '#FFFFFF' : '#1D6F78';

  const icons: Record<string, JSX.Element> = {
    home: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    register: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="14 2 14 8 20 8" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    opportunity: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    organizers: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    schedule: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    contact: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return icons[type] || icons.home;
};

export function AnchorMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems = [
    { type: 'home', href: '#' },
    { type: 'register', href: '#register' },
    { type: 'opportunity', href: '#about' },
    { type: 'organizers', href: '#organizers' },
    { type: 'schedule', href: '#schedule' },
    { type: 'contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Calculate circular positions - top-right quadrant only
  const getCircularPosition = (index: number, total: number, radius: number) => {
    // Arc spans from -90° (top) to 0° (right)
    // Distribute items evenly across this 90° arc
    const startAngle = -Math.PI / 2; // -90° (top)
    const endAngle = 0; // 0° (right)
    const angleRange = endAngle - startAngle;
    const angle = startAngle + (index / (total - 1)) * angleRange;

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const radius = 140; // Distance from center

  return (
    <>
      {/* Blurred Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Circular Menu Items */}
      <AnimatePresence>
        {isOpen && menuItems.map((item, index) => {
          const { x, y } = getCircularPosition(index, menuItems.length, radius);
          const isHovered = hoveredIndex === index;

          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{
                opacity: 1,
                x: x,
                y: y,
                scale: 1,
                backgroundColor: isHovered ? '#1D6F78' : '#FFFFFF'
              }}
              exit={{
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0
              }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
                delay: index * 0.05,
                backgroundColor: { duration: 0.2 }
              }}
              onClick={() => handleNavClick(item.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="fixed bottom-8 left-8 z-50 p-3 rounded-full shadow-xl"
              style={{
                border: `2px solid ${isHovered ? '#E66B36' : '#1D6F78'}`,
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <MenuIcon type={item.type} isHovered={isHovered} />
            </motion.button>
          );
        })}
      </AnimatePresence>
 
      {/* Anchor Menu Button - Fixed Bottom Left */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 p-4 rounded-full shadow-lg"
        style={{
          cursor: 'pointer'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 180 : 0,
          backgroundColor: isOpen ? '#E66B36' : '#1D6F78'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Anchor Icon SVG */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          {/* Anchor shape */}
          <line x1="16" y1="8" x2="16" y2="26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="7" r="3" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
          <path d="M8,26 L8,20 L12,24 M24,26 L24,20 L20,24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="14" x2="20" y2="14" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.button>
    </>
  );
}
