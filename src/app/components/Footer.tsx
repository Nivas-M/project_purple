import { Github, Instagram, Linkedin, Mail, Youtube, MapPin, Phone, ArrowUpRight, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const contacts = [
    {
      name: 'Ahmad Abdul Muhaimin',
      role: 'Programme Director, BuildUp Kasaragod',
      phone: '+91 96869 30573'
    },
    {
      name: 'Ayaan Siddique',
      role: 'Youth & Empowerment Lead',
      phone: '+91 88912 20997'
    },
    {
      name: 'Dr. Shiek Bava',
      role: 'President, BuildUp Kasaragod Society',
      phone: '+91 99003 19096'
    }
  ];

  const socialLinks = [
    { label: 'GitHub', icon: Github, href: 'https://github.com/sosc-sahyadri' },
    { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/sosc.sahyadri' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/sosc-sahyadri' },
    { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
  ];

  const directoryLinks = [
    { label: 'Home Base', href: '#' },
    { label: 'Register Port', href: '#register' },
    { label: 'The Opportunity', href: '#about' },
    { label: 'Our Organizers', href: '#organizers' },
    { label: 'Event Timeline', href: '#schedule' },
    { label: 'Venue & Map', href: '#location' },
    { label: 'Contact Team', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden text-white" style={{ backgroundColor: '#12100E' }}>
      {/* Decorative ocean gradient glow in background */}
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#1D6F78]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-96 h-96 rounded-full bg-[#E66B36]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        
        {/* ROW 1: Premium Contact / Next Step Hub */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Left Block: Next Step */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold tracking-tight text-white">
              The Next Step
            </h3>
            <p className="leading-relaxed text-sm max-w-md text-white/70 font-light">
              If this aligns with your organisation, let's connect over a short call to discuss sponsorship opportunities and collaboration details.
            </p>

            <div className="space-y-4 pt-2">
              <a 
                href="mailto:contact@buildupkasaragod.org" 
                className="flex items-center gap-3 text-sm text-white/80 hover:text-[#E66B36] transition-colors duration-300 self-start w-fit group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#E66B36]/30">
                  <Mail className="w-4 h-4 text-[#E66B36]" />
                </div>
                <span>contact@buildupkasaragod.org</span>
              </a>
              <a 
                href="https://www.BuildUpKasaragod.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-sm text-white/80 hover:text-[#E66B36] transition-colors duration-300 self-start w-fit group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#E66B36]/30">
                  <Globe className="w-4 h-4 text-[#E66B36]" />
                </div>
                <span>www.BuildUpKasaragod.org</span>
              </a>
            </div>
          </motion.div>

          {/* Right Block: Team Contacts */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E66B36] font-mono border-b border-white/10 pb-3">
              Contact The Team
            </h4>
            <div className="space-y-5">
              {contacts.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <div className="space-y-1">
                    <h5 className="font-semibold text-base text-white/90">{contact.name}</h5>
                    <p className="text-xs text-white/60 font-light">{contact.role}</p>
                  </div>
                  <a 
                    href={`tel:${contact.phone.replace(/\s/g, '')}`} 
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-medium transition-colors hover:text-[#E66B36] text-[#1D6F78]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cohesive Section Divider */}
        <div className="border-t border-white/10 mb-16" />

        {/* ROW 2: Directory & Community Hub */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 mb-16">
          
          {/* Column 1: Brand & About (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-3xl font-display font-bold tracking-wider" style={{ color: '#E66B36', fontFamily: 'Korsen' }}>
              SOSC
            </h3>
            <p className="text-sm font-semibold tracking-tight text-white/90">Sahyadri Open Source Community</p>
            <p className="text-xs leading-relaxed text-white/60 font-light max-w-sm">
              Empowering next-generation engineers on India's coastal frontier through open-source innovation, hands-on building, and collaborative mentorship.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-bold text-[#E66B36] uppercase tracking-widest bg-[#E66B36]/10 px-2.5 py-1 rounded-md border border-[#E66B36]/20">
                Coastal Initiative 2026
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1D6F78] font-mono">Summit Directory</h4>
            <ul className="space-y-2.5">
              {directoryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs font-light text-white/60 hover:text-[#E66B36] flex items-center gap-1 transition-colors duration-300 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Campus Harbor (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1D6F78] font-mono">The Port (Campus)</h4>
            <div className="space-y-4 text-xs text-white/60 font-light">
              <div className="flex items-start gap-2.5 leading-normal">
                <MapPin className="w-4 h-4 text-[#E66B36] shrink-0 mt-0.5" />
                <span>Sahyadri College of Engineering & Management, Adyar, Mangalore - 575007 IN</span>
              </div>
              <a className="flex items-center gap-2.5 hover:text-[#E66B36] transition-colors self-start w-fit" href="mailto:sosc@sahyadri.edu.in">
                <Mail className="w-4 h-4 text-[#E66B36]" />
                <span>sosc@sahyadri.edu.in</span>
              </a>
            </div>
          </div>

          {/* Column 4: Social Portals (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1D6F78] font-mono">Follow Portals</h4>
            <div className="flex flex-wrap lg:flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    className="inline-flex items-center gap-2.5 text-xs font-light text-white/60 hover:text-[#E66B36] transition-colors duration-300"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="hidden sm:inline lg:inline">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Lower Divider and Legal copyrights info */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/40 font-light">
          <p>© 2026 Sahyadri Open Source Community (SOSC). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#E66B36] transition-colors">Summit Terms</a>
            <a href="#" className="hover:text-[#E66B36] transition-colors">Privacy Charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
