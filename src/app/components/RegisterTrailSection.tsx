import { motion } from 'motion/react';

export function RegisterTrailSection() {
  return (
    <section className="relative py-32 px-8 overflow-hidden" style={{ backgroundColor: '#F9F8F4' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold mb-6 tracking-tight" style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: '#1C1917'
          }}>
            Ready to Build Something <span style={{ color: '#EA580C' }}>Extraordinary</span>?
          </h2>

          <p className="mb-10 max-w-2xl mx-auto leading-relaxed" style={{
            fontSize: '18px',
            color: '#57534E',
            fontWeight: 300
          }}>
            Join 30+ teams from across India for 24 hours of intense building, mentorship from industry experts, and a chance to pitch at the Coastal Innovation Summit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-lg font-medium text-white transition-all shadow-sm"
              style={{
                backgroundColor: '#1C1917',
                fontSize: '16px'
              }}
            >
              Register Your Team
            </motion.a>

            <motion.a
              href="#sponsors"
              whileHover={{ scale: 1.02 }}
              className="px-10 py-4 rounded-lg font-medium transition-all"
              style={{
                border: '1px solid rgba(0, 0, 0, 0.1)',
                color: '#1C1917',
                fontSize: '16px'
              }}
            >
              Become a Sponsor
            </motion.a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 flex-wrap text-sm" style={{ color: '#57534E' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#EA580C' }}></div>
              <span>July 11-12, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0E7490' }}></div>
              <span>Sahyadri College, Mangalore</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#EA580C' }}></div>
              <span>₹1.5L Prize Pool</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
