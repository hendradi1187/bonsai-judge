import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventInfoSection from "@/components/EventInfoSection";
import TopRankingPreview from "@/components/TopRankingPreview";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <EventInfoSection />
    <TopRankingPreview />
    <Footer />
  </div>
);

export default Index;
