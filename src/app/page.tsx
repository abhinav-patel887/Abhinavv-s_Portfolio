// src/app/page.tsx

// 👉 Step 1: Import your new component at the top
import HomeSection from "@/components/HomeSection";
import AboutMe from "@/components/AboutMe";
import SectionBreakerQuote from "@/components/SectionBreakerQuote";
import ResumeSection from "@/components/ResumeSection";
import StartupJourneySection from "@/components/StartupJourneySection";
import ContactMeSection from "@/components/ContactSection";
import QuotesSection from "@/components/QuotesSection";
import TechnicalSkillsSection from "@/components/TechnicalSkills";

export default function Home() {
  return (
    // 👉 Step 2: Use your component here
    <main>
      <HomeSection />
      <SectionBreakerQuote/>
      <AboutMe/>
      <ResumeSection/>
      <TechnicalSkillsSection/>
      <QuotesSection/>
      {/*<StartupJourneySection/>*/}
      <ContactMeSection/>
      {/* You will add other sections like About, Skills, etc. below this line later */}
    </main>
  );
}