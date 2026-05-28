import { HeroSection } from './components/HeroSection';
import { RegisterTrailSection } from './components/RegisterTrailSection';
import { StatsSection } from './components/StatsSection';
import { OpportunitySection } from './components/OpportunitySection';
import { OrganizersSection } from './components/OrganizersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AnchorMenu } from './components/AnchorMenu';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fbf5ed' }}>
      <HeroSection />
      <div id="register">
        <RegisterTrailSection />
      </div>
      <StatsSection />
      <OpportunitySection />
      <OrganizersSection />
      <ScheduleSection />
      <LocationSection />
      <Footer />

      {/* Fixed Anchor Menu */}
      <AnchorMenu />
    </div>
  );
}
