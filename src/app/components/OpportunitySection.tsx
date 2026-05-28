import { motion } from 'motion/react';
import { Sunrise } from 'lucide-react';

export function OpportunitySection() {
  return (
    <section id="about" className="py-32" style={{ backgroundColor: '#F9F8F4' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] bg-white rounded-2xl border border-black/5 flex flex-col items-center justify-center p-12 overflow-hidden shadow-sm relative z-10">
              <Sunrise className="w-16 h-16 mb-6" style={{ color: '#EA580C', strokeWidth: 1 }} />
              <h3 className="text-2xl font-display font-bold mb-4 text-center" style={{ color: '#1C1917' }}>
                An Ecosystem is Forming
              </h3>
              <p className="text-sm text-center max-w-sm leading-relaxed" style={{ color: '#57534E' }}>
                First editions are remembered by the students who competed, the institutions that showed up, and the investor community watching a region come alive.
              </p>
            </div>
            <div className="absolute top-4 left-4 w-full h-full border rounded-2xl z-0 pointer-events-none" style={{ borderColor: 'rgba(14, 116, 144, 0.2)' }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 tracking-tight" style={{ color: '#1C1917' }}>
              The <span style={{ color: '#EA580C' }}>Opportunity</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed" style={{ color: '#57534E', fontWeight: 300 }}>
              <p>
                India produces 1.5 million engineering graduates every year. Most come from colleges in smaller cities—Kasaragod, Mangalore, Kozhikode—where technical ability is high and opportunity is nearly absent. No start-ups culture. No mentors. No room to build.
              </p>
              <p>
                <strong>Coastal Innovation Hackathon changes that equation.</strong> 24 hours. A real judging panel. Rs. 1,50,000 on the line.
              </p>
              <p>
                Top teams walk away with prize money and a confirmed invitation to pitch at the Coastal Innovation Summit—the same room as VC and angel investors from Bangalore, Kochi, and Mangalore.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
