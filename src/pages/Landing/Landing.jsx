import LandingNavbar from './components/LandingNavbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import LandingFooter from './components/LandingFooter';

/**
 * Landing Page - Vextor Marketing Website
 * Designed to convert transport companies to the platform.
 */
const Landing = () => {
  return (
    <div className="min-h-screen bg-v-dark font-sans selection:bg-primary selection:text-v-dark">
      <LandingNavbar />

      <main>
        <HeroSection />

        {/* Subtle separator */}
        <div className="container mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-v-dark-border to-transparent" />
        </div>

        <ProblemSection />

        <FeaturesSection />

        <div id="beneficios">
          {/* Detailed Benefits section integrated within Features/Problem logic,
              but could be expanded here if needed. */}
        </div>

        <CTASection />
      </main>

      <LandingFooter />
    </div>
  );
};

export default Landing;
