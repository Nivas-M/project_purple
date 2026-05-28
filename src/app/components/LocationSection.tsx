import { motion } from 'motion/react';
import { Compass, MapPin, Plane, Train, Car } from 'lucide-react';
import treasurePattern from '../../imports/treasure_pattern.png';

export function LocationSection() {
  const coordinates = '12.8663° N, 74.9254° E';

  const travelStats = [
    { label: 'Air Voyage', icon: Plane, detail: 'IXE Airport (20 km)' },
    { label: 'Rail Passage', icon: Train, detail: 'MAJN Station (6 km)' },
    { label: 'Overland Route', icon: Car, detail: 'NH-75 Adyar Access' }
  ];

  return (
    <section id="location" className="relative py-24 md:py-32 border-t border-stone-200 overflow-hidden animate-fade-in" style={{ backgroundColor: '#fbf5ed' }}>
      
      {/* Seamless Treasure Hunt Pattern Background - themed around a minimalist cartography map */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.16] pointer-events-none mix-blend-multiply" 
        style={{ 
          backgroundImage: `url(${treasurePattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '680px'
        }} 
      />

      {/* Top and Bottom Fading Overlays */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#fbf5ed] to-transparent pointer-events-none z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#fbf5ed] to-transparent pointer-events-none z-[1]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Bold Minimalist Typography & Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Coordinates tag */}
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-[#1D6F78] animate-spin-slow" />
              <span className="font-mono text-xs font-bold tracking-widest text-[#E66B36] uppercase">{coordinates}</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-display font-black tracking-wider text-[#1D6F78] uppercase mb-4 drop-shadow-[0_2px_4px_rgba(29,111,120,0.03)]">
              LOCATION
            </h2>
            
            <h3 className="text-xl md:text-2xl font-display font-bold text-[#2A2A2A] mb-3 leading-snug tracking-tight">
              Sahyadri College of Engineering And Management
            </h3>
            
            <p className="text-stone-600 text-sm font-light leading-relaxed mb-8 max-w-sm">
              Looking to join the fun? You'll find us right here on the banks of the Nethravathi River, where passion fuels lasting memories.
            </p>

            {/* Horizontal minimal travel info strip */}
            <div className="border-t border-stone-200/60 pt-6 mt-2 flex flex-col gap-4">
              <span className="text-[10px] font-bold text-[#2A2A2A]/40 uppercase tracking-widest block">Transit Details</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {travelStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex sm:flex-col gap-3 sm:gap-1.5 items-center sm:items-start group">
                      <div className="w-8 h-8 rounded-lg border border-stone-200 bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#1D6F78]/5 group-hover:border-[#1D6F78]/10 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-[#1D6F78]" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider block sm:mb-0.5">{stat.label}</span>
                        <span className="text-xs font-semibold text-[#2A2A2A] leading-tight font-mono block">{stat.detail}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean, Flat Map Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex items-center justify-center relative"
          >
            {/* Clean Flat map card */}
            <div
              className="w-full rounded-3xl border-[5px] border-[#1D6F78] bg-white p-2.5 shadow-2xl hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(29,111,120,0.12)] transition-all duration-500 overflow-hidden relative"
            >
              {/* Floating coordinates badge on the map */}
              <div 
                className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full border border-stone-800/10 bg-white/90 backdrop-blur-sm shadow-md flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E66B36]" />
                <span className="font-mono text-[10px] font-bold text-[#2A2A2A] tracking-wider">{coordinates}</span>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-[360px] md:h-[450px] rounded-2xl overflow-hidden border border-stone-100 shadow-inner">
                <iframe
                  title="Sahyadri College of Engineering and Management (SCEM) Location Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.02) saturate(0.96)' }}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.920%2C12.862%2C74.930%2C12.870&layer=mapnik&marker=12.8663%2C74.9254"
                />
              </div>
            </div>

            {/* Accent border markings (vector guidelines) */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#E66B36]/20 pointer-events-none hidden md:block" />
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#E66B36]/20 pointer-events-none hidden md:block" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
