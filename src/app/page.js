import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/QuestionSection";
import WhatIfSection from "../components/WhatIfSection";
import LearningSection from "../components/LearningSection";
import BonusSection from "../components/BonusSection";
import TestimonialSection from "../components/TestimonialSection";
import UrgencySection from "../components/UrgencySection";
import CertificationSection from "../components/CertificationSection";
import TargetAudienceSection from "../components/TargetAudienceSection";
import MentorIntroductionSection from '../components/MentorIntroductionSection';
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans w-full">
      <Header />
        <HeroSection />
        <FeaturesSection />
        <WhatIfSection />
        <LearningSection />
        <BonusSection />
        <TestimonialSection />
        <UrgencySection />
        <CertificationSection />
        <TargetAudienceSection />
        <MentorIntroductionSection />
        <main className="container mx-auto px-4">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
