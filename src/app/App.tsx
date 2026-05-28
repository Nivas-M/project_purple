import { HeroSection } from './components/HeroSection';
import { RegisterTrailSection } from './components/RegisterTrailSection';
import { StatsSection } from './components/StatsSection';
import { OpportunitySection } from './components/OpportunitySection';
import { OrganizersSection } from './components/OrganizersSection';
import { SponsorshipSection } from './components/SponsorshipSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F8F4' }}>
      <HeroSection />
      <RegisterTrailSection />
      <StatsSection />
      <OpportunitySection />
      <OrganizersSection />
      <SponsorshipSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}