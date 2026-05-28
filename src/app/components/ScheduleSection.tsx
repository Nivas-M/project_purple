import { motion } from 'motion/react';
import { Play, Code, Activity, Zap, Mic, Trophy } from 'lucide-react';
import boatIcon from '../../imports/boaticon.png';

export function ScheduleSection() {
  const timeline = [
    {
      icon: Play,
      color: '#E66B36', // Primary Orange
      badge: 'INAUGURATION',
      number: '01',
      time: 'Day 1 • 8:00 AM',
      title: 'Registration & Kick-off',
      description: 'Check in, gather credentials, team formation, and official kick-off to unlock the challenge problem statements.',
      visibility: 'Banner placement, MC mention, opening remarks slot.',
      bgColor: 'rgba(230, 107, 54, 0.02)'
    },
    {
      icon: Code,
      color: '#1D6F78', // Deep Ocean Teal
      badge: 'HACKING',
      number: '02',
      time: 'Day 1 • 12:00 PM onwards',
      title: 'Build & Mentorship',
      description: 'Continuous hacking phase. Industry mentors and engineering specialists circulate to guide architecture and prototype design.',
      visibility: 'Mentor badges, branded workstations, refreshment stations.',
      bgColor: 'rgba(29, 111, 120, 0.02)'
    },
    {
      icon: Mic,
      color: '#E66B36', // Primary Orange
      badge: 'EVALUATION',
      number: '03',
      time: 'Day 2 • 12:00 PM',
      title: 'Pitch & Presentations',
      description: 'Submit source code and pitch your working prototype live in front of a panel of startup founders and venture investors.',
      visibility: 'Judge seat or observer pass, sponsor panel Q&A slot.',
      bgColor: 'rgba(230, 107, 54, 0.02)'
    },
    {
      icon: Trophy,
      color: '#1D6F78', // Deep Ocean Teal
      badge: 'AWARDS',
      number: '04',
      time: 'Day 2 • 3:00 PM',
      title: 'Ceremony & Closing Remarks',
      description: 'Winners announced, grand prize cheques handed over on stage, and top teams selected for the Coastal Innovation Summit.',
      visibility: 'Cheque handover on stage, key closing remark slot.',
      bgColor: 'rgba(29, 111, 120, 0.02)'
    }
  ];

  return (
    <section id="schedule" className="relative py-24 border-t border-stone-200 animate-fade-in" style={{ backgroundColor: '#fbf5ed' }}>
      {/* Background glowing gradients - very soft and brand aligned */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-[#E66B36]/3 blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#1D6F78]/3 blur-[120px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-[#2A2A2A] mb-4">
            Timeline
          </h2>
          <p className="text-stone-500 text-sm md:text-base max-w-lg mx-auto font-light leading-relaxed">
            Every great mission has a sequence. Here's yours — from launch to landing.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Centered glowing timeline line - uses brand orange `#E66B36` */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#E66B36]/0 via-[#E66B36]/30 to-[#E66B36]/0" />

          {/* Sticky glowing boat moving along the timeline */}
          <div className="sticky top-32 z-20 h-0 pointer-events-none hidden md:block">
            <div className="relative">
              <img
                src={boatIcon}
                alt="Timeline boat"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-8 w-20 h-20 rotate-180 object-contain"
                style={{ 
                  filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.12)) drop-shadow(0 0 12px rgba(230, 107, 54, 0.35))'
                }}
              />
            </div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-20">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-stretch">
                  <div className={`w-full flex flex-col md:flex-row items-center md:justify-between ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    
                    {/* Badge & Date Column */}
                    <div className={`w-full md:w-[calc(50%-2.5rem)] flex flex-col justify-center items-start md:items-end pl-14 pr-4 md:px-0 mb-4 md:mb-0 ${isEven ? 'md:items-end text-left md:text-right' : 'md:items-start text-left'}`}>
                      <div 
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-semibold tracking-wider uppercase mb-2"
                        style={{
                          borderColor: item.color + '25',
                          backgroundColor: item.color + '08',
                          color: item.color
                        }}
                      >
                        <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
                        {item.badge}
                      </div>
                      <div 
                        className="text-xl md:text-3xl font-display font-extrabold tracking-tight"
                        style={{ color: item.color }}
                      >
                        {item.time}
                      </div>
                    </div>

                    {/* Central Spacer for Number Circle */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                      <div 
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border bg-white flex items-center justify-center font-mono text-[10px] md:text-xs font-bold transition-all duration-300 shadow-sm"
                        style={{
                          borderColor: item.color + '35',
                          color: item.color
                        }}
                      >
                        {item.number}
                      </div>
                    </div>

                    {/* Content Card Column */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] pl-14 pr-4 md:px-0">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="group relative p-5 md:p-6 rounded-2xl border border-stone-200 bg-white hover:shadow-[0_8px_30px_rgba(29,111,120,0.06)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                        style={{
                          '--hover-title-color': item.color
                        } as React.CSSProperties}
                      >
                        {/* Glowing hover border helper */}
                        <div 
                          className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-current pointer-events-none transition-colors duration-300" 
                          style={{ color: item.color + '25' }}
                        />

                        <div className="flex items-start gap-4">
                          {/* Inner glowing icon box */}
                          <div 
                            className="flex items-center justify-center w-10 h-10 rounded-xl border shrink-0 shadow-sm"
                            style={{ 
                              backgroundColor: item.color + '05',
                              borderColor: item.color + '15',
                              color: item.color
                            }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h4 
                              className="text-base md:text-lg font-bold text-[#2A2A2A] mb-2 tracking-tight transition-colors duration-300 group-hover:text-[var(--hover-title-color)]"
                            >
                              {item.title}
                            </h4>
                            <p className="text-stone-600 text-xs md:text-sm font-light leading-relaxed mb-4">
                              {item.description}
                            </p>

                            {/* Sponsor Visibility Badge inside card */}
                            <div 
                              className="mt-2 p-3 rounded-lg border text-[11px] md:text-xs font-light flex flex-col gap-1"
                              style={{ 
                                backgroundColor: item.color + '02',
                                borderColor: item.color + '08',
                                color: '#57534E'
                              }}
                            >
                              <span 
                                className="font-semibold uppercase tracking-wider text-[9px] flex items-center gap-1"
                                style={{ color: item.color }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                                Sponsor Visibility
                              </span>
                              <span className="leading-normal">{item.visibility}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
