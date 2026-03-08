import BangldeshNews from "@/components/bangladesh-section/BangladeshSection";
import HeroSection from "@/components/hero-section/HeroSection";
import NationalSection from "@/components/national-section/NationalSection";
import OurStoris from "@/components/our-storis-section/OurStorisSection";
import PoliticsSection from "@/components/politics-section/PoliticsSection";
import NewsSlider from "@/components/slider-section/SliderSection";
import SportsSection from "@/components/sports-section/SportsSection";
import VideoSection from "@/components/video-section/VideoSection";
import EntertainmentSection from "@/components/entertainment-section/EntertainmentSection";
import InternationalNews from "@/components/international-section/InternationalNews";
import OpinionSection from "@/components/opinion-section/OpinionSection";
import GallarySection from "@/components/gallary-section/GallarySection";
import SocialDiscourseSection from "@/components/information-section/SocialDiscourseSection";
import LifeStyleSection from "@/components/information-section/LifeStyleSection";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <OurStoris />
            <NewsSlider />
            <BangldeshNews />
            <NationalSection />
            <VideoSection />
            <PoliticsSection />
            <SportsSection />
            <SocialDiscourseSection />
            <EntertainmentSection />
            <InternationalNews />
            
            <OpinionSection /> 
            <GallarySection />
            <LifeStyleSection />
            <Footer />
        </>

    );
}
