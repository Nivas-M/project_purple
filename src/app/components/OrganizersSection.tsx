import { motion } from 'motion/react';

export function OrganizersSection() {
  const organizers = [
    {
      name: 'BuildUp Kasaragod',
      description: 'A registered non-profit society building the startup ecosystem between North Malabar and South Canara. Working at the intersection of student talent, institutional infrastructure, and the investor community.',
      badge: null,
      footer: 'Hosts of the Coastal Innovation Summit'
    },
    {
      name: 'Sahyadri College of Engineering',
      description: 'Venue and Co-Organising Partner under a formal MoU. Selected twice as a Smart India Hackathon Nodal Centre by the Ministry of Education and AICTE (2022 and 2024).',
      badge: null,
      footer: 'Hosted 27 teams across India for SIH 2024'
    },
    {
      name: 'SOSC',
      description: 'Sahyadri Open Source Community. A student-led open-source and technology community focused on building technical skills through hands-on learning, collaboration, and peer-driven innovation with an active network of 100+ members.',
      badge: 'Community Partner',
      footer: null
    }
  ];

  return (
    <section id="organizers" className="py-32 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 tracking-tight" style={{ color: '#1C1917' }}>
            The Organizers
          </h2>
          <p style={{ color: '#57534E', fontWeight: 300 }}>
            The institutions and communities powering the next generation of coastal builders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {organizers.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-2xl border border-black/5 hover:border-[#EA580C]/30 transition-colors"
              style={{ backgroundColor: 'rgba(249, 248, 244, 0.3)' }}
            >
              {org.badge && (
                <div className="inline-block px-2 py-1 rounded mb-3 text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: 'rgba(14, 116, 144, 0.1)', color: '#0E7490' }}>
                  {org.badge}
                </div>
              )}
              <h3 className="text-xl font-display font-bold mb-4" style={{ color: '#1C1917' }}>
                {org.name}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#57534E', fontWeight: 300 }}>
                {org.description}
              </p>
              {org.footer && (
                <p className="text-xs font-medium" style={{ color: '#0E7490' }}>
                  {org.footer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
