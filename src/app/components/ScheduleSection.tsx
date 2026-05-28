import { motion } from 'motion/react';
import { Play, Code, Activity, Zap, Mic, Trophy } from 'lucide-react';

export function ScheduleSection() {
  const timeline = [
    {
      icon: Play,
      color: '#EA580C',
      time: 'Day 1 • 8:00 AM',
      title: 'Phase 1: Registration & Inauguration',
      description: 'Problem Statements released. Hackathon Begins.',
      visibility: 'Banner placement, MC mention, opening remarks slot.',
      bgColor: 'rgba(249, 248, 244, 0.3)'
    },
    {
      icon: Code,
      color: '#0E7490',
      time: 'Day 1 • 12:00 PM',
      title: 'Building Phase',
      description: 'Industry mentors circulate and guide teams.',
      visibility: 'Mentor badges, branded workstations.',
      bgColor: 'transparent'
    },
    {
      icon: Activity,
      color: '#1C1917',
      time: 'Day 1 • 8:00 PM',
      title: 'Mid-point Check-ins',
      description: 'Teams share progress and receive structured feedback.',
      visibility: 'Sponsor panel Q&A slot.',
      bgColor: 'transparent'
    },
    {
      icon: Zap,
      color: '#1C1917',
      time: 'Day 2 • 8:00 AM',
      title: 'Final Sprint',
      description: 'Teams complete solutions and prepare presentations.',
      visibility: 'Branded refreshment stations.',
      bgColor: 'transparent'
    },
    {
      icon: Mic,
      color: '#1C1917',
      time: 'Day 2 • 12:00 PM',
      title: 'Presentations',
      description: 'Presentations to a panel of founders and investors.',
      visibility: 'Judge seat or observer pass.',
      bgColor: 'transparent'
    },
    {
      icon: Trophy,
      color: '#0E7490',
      time: 'Day 2 • 3:00 PM',
      title: 'Awards Ceremony',
      description: 'Top teams earn Coastal Innovation Summit invitations.',
      visibility: 'Prize cheque handover on stage, closing remarks.',
      bgColor: 'rgba(14, 116, 144, 0.05)'
    }
  ];

  return (
    <section id="schedule" className="py-32 bg-white border-t border-black/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-display font-bold mb-16 tracking-tight text-center" style={{ color: '#1C1917' }}>
          The Event Timeline
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-black/5">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isOdd = index % 2 === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal ${isOdd ? 'md:flex-row-reverse' : ''} group`}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white shrink-0 md:order-1 shadow-sm z-10"
                  style={{
                    backgroundColor: item.color,
                    color: 'white',
                    transform: isOdd ? 'translateX(50%)' : 'translateX(-50%)'
                  }}
                >
                  <Icon className="w-4 h-4" style={{ marginLeft: item.icon === Play ? '2px' : '0' }} />
                </div>
                <div
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-black/5 transition-colors"
                  style={{
                    backgroundColor: item.bgColor,
                    borderColor: index === 0 ? 'rgba(234, 88, 12, 0.3)' : 'rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex flex-col mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>
                      {item.time}
                    </span>
                    <h4 className="text-lg font-bold" style={{ color: '#1C1917' }}>
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm mb-3" style={{ color: '#57534E', fontWeight: 300 }}>
                    {item.description}
                  </p>
                  <div className="px-3 py-2 rounded text-xs border border-black/5" style={{ backgroundColor: index === 0 || index === 5 ? 'white' : 'rgba(249, 248, 244, 0.5)', color: '#57534E' }}>
                    <span className="font-semibold" style={{ color: '#1C1917' }}>Sponsor Visibility:</span> {item.visibility}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
