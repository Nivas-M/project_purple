import { motion } from 'motion/react';
import { Users, Briefcase, Flag, Award, Check } from 'lucide-react';

export function SponsorshipSection() {
  const benefits = [
    {
      icon: Users,
      title: 'Talent Access',
      description: 'Receive participant resumes before the event closes. Direct pipeline to motivated builders across South India—ideal for hiring, internships, and early product testing.'
    },
    {
      icon: Briefcase,
      title: 'Investor Room',
      description: 'Your brand is present at the Coastal Innovation Summit alongside VC and angel investors from across South India. Most regional sponsors never access that room.'
    },
    {
      icon: Flag,
      title: 'First-Mover Advantage',
      description: 'North Kerala and Coastal Karnataka\'s start-up ecosystem is forming right now. The organisations that stood behind it from the beginning are remembered permanently.'
    },
    {
      icon: Award,
      title: 'Earned Credibility',
      description: 'Association with a student\'s first serious shot at entrepreneurship carries a different kind of weight. It is not paid placement—it is earned trust.'
    }
  ];

  const tiers = [
    {
      name: 'Title Sponsor',
      price: '₹40,000+',
      isPremium: true,
      features: [
        'Main branding across the event',
        'Stage & inauguration mention',
        'Social media campaign coverage',
        'Premium sponsor visibility'
      ]
    },
    {
      name: 'Gold Sponsor',
      price: '₹20,000+',
      isPremium: false,
      features: [
        'Branding on event materials',
        'Social media mentions',
        'Access to participant resumes',
        'Event recognition'
      ]
    },
    {
      name: 'Silver Sponsor',
      price: '₹10,000+',
      isPremium: false,
      features: [
        'Logo placement',
        'Closing ceremony mention',
        'Social media shoutout'
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-32" style={{ backgroundColor: '#F9F8F4' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 tracking-tight" style={{ color: '#1C1917' }}>
            What Your Brand Gets
          </h2>
          <p className="text-base max-w-2xl" style={{ color: '#57534E', fontWeight: 300 }}>
            The sponsors who back this are not buying an advertisement, they are taking a position in a startup ecosystem that is just beginning to form.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <Icon className="w-6 h-6 shrink-0 mt-1" style={{ color: '#EA580C', strokeWidth: 1.5 }} />
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#1C1917' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#57534E', fontWeight: 300 }}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <h3 className="text-2xl font-display font-bold mb-8 text-center" style={{ color: '#1C1917' }}>
          Partnership Tiers
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 relative shadow-sm"
              style={{
                border: tier.isPremium ? '2px solid #EA580C' : '1px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              {tier.isPremium && (
                <div className="absolute top-0 right-0 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider" style={{ backgroundColor: '#EA580C', borderBottomLeftRadius: '0.5rem', borderTopRightRadius: '1rem' }}>
                  Premium
                </div>
              )}
              <h4 className="text-xl font-display font-bold mb-2" style={{ color: '#1C1917' }}>
                {tier.name}
              </h4>
              <div className="text-2xl font-bold mb-6" style={{ color: '#0E7490' }}>
                {tier.price}
              </div>
              <ul className="space-y-3 text-sm" style={{ color: '#57534E', fontWeight: 300 }}>
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-4 h-4" style={{ color: tier.isPremium ? '#EA580C' : '#0E7490' }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:col-span-3 bg-white border border-black/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm mt-6">
          <div>
            <h4 className="text-lg font-display font-bold mb-1" style={{ color: '#1C1917' }}>
              Community Partner
            </h4>
            <p className="text-sm" style={{ color: '#57534E', fontWeight: 300 }}>
              Provide cloud credits, merchandise, food, tools, or service support in exchange for branding acknowledgment.
            </p>
          </div>
          <a href="#contact" className="shrink-0 px-6 py-2 border rounded-lg text-sm font-medium hover:bg-black/5 transition-colors" style={{ borderColor: '#1C1917', color: '#1C1917' }}>
            Let's Discuss
          </a>
        </div>

        <div className="mt-8 text-center border p-4 rounded-xl text-sm font-medium" style={{ backgroundColor: 'rgba(14, 116, 144, 0.05)', borderColor: 'rgba(14, 116, 144, 0.1)', color: '#0E7490' }}>
          Total event budget: ₹3,00,000. Your sponsorship directly funds inauguration, catering, judge travel, logistics, branding, and the prize pool itself.
        </div>
      </div>
    </section>
  );
}
