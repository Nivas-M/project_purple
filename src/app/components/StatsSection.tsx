import { motion } from 'motion/react';

export function StatsSection() {
  const stats = [
    { value: '₹1.5L', label: 'Prize Pool' },
    { value: '30+', label: 'Teams Expected' },
    { value: '24hrs', label: 'Duration' },
    { value: '2026', label: 'July 11-12' }
  ];

  return (
    <section className="py-16 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-3xl font-display font-bold mb-1" style={{ color: '#0E7490' }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium uppercase" style={{ color: '#57534E', letterSpacing: '0.1em' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
