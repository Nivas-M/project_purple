import { motion } from 'motion/react';
import { Mail, Globe } from 'lucide-react';

export function ContactSection() {
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

  return (
    <section id="contact" className="py-32 text-white" style={{ backgroundColor: '#1C1917' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
              The Next Step
            </h2>
            <p className="leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(249, 248, 244, 0.7)', fontWeight: 300 }}>
              If this aligns with your organisation, let's connect over a short call to discuss sponsorship opportunities and collaboration details.
            </p>

            <div className="space-y-4">
              <a href="mailto:contact@buildupkasaragod.org" className="flex items-center gap-3 text-white hover:text-[#EA580C] transition-colors">
                <Mail className="w-5 h-5" />
                contact@buildupkasaragod.org
              </a>
              <a href="https://www.BuildUpKasaragod.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#EA580C] transition-colors">
                <Globe className="w-5 h-5" />
                www.BuildUpKasaragod.org
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold mb-6 border-b pb-4" style={{ color: '#EA580C', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
              Contact The Team
            </h3>
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <div>
                    <h4 className="font-bold text-lg">{contact.name}</h4>
                    <p className="text-sm" style={{ color: 'rgba(249, 248, 244, 0.7)' }}>
                      {contact.role}
                    </p>
                  </div>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="font-medium text-sm sm:text-base transition-colors" style={{ color: '#0E7490' }}>
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
