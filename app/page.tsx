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
import Add from "@/components/add/Add";
import { getFetchData } from "@/utils/getFetchData";
import Ads from "@/components/ads/ads";

export default async function Home() {
    const sectionOneTopAd = await getFetchData('/SectionOneTopAd');
    const sectionOneTopAds = sectionOneTopAd?.ads;
    const sectionTwoMiddleAd = await getFetchData('/SectionTwoMiddleAd');
    const sectionTwoMiddleAds = sectionTwoMiddleAd?.ads;
    const sectionThreeBotomAd = await getFetchData('/SectionThreeBotomAd');
    const sectionThreeBotomAds = sectionThreeBotomAd?.ads;
    const sectionFiveBotomAd = await getFetchData('/SectionFiveBotomAd');
    const sectionFiveBotomAds = sectionFiveBotomAd?.ads;
    const sectionSevenBotomAd = await getFetchData('/SectionSevenBotomAd');
    const sectionSevenBotomAds = sectionSevenBotomAd?.ads;
    const sectionEightBotomAd = await getFetchData('/SectionEightBotomAd');
    const sectionEightBotomAds = sectionEightBotomAd?.ads;
    const sectionNineBotomAd = await getFetchData('/SectionNineBotomAd');
    const sectionNineBotomAds = sectionNineBotomAd?.ads;
    const sectionTenBotomAd = await getFetchData('/SectionTenBotomAd');
    const sectionTenBotomAds = sectionTenBotomAd?.ads;
    const sectionElevenBotomAd = await getFetchData('/SectionElevenBotomAd');
    const sectionElevenBotomAds = sectionElevenBotomAd?.ads;
    const sectionTweleveBotomAd = await getFetchData('/SectionTweleveBotomAd');
    const sectionTweleveBotomAds = sectionTweleveBotomAd?.ads;
    return (
        <>
            <Header />
            {sectionOneTopAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionOneTopAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <HeroSection />
            <OurStoris />
            {sectionTwoMiddleAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionTwoMiddleAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <NewsSlider />
            <BangldeshNews />
            {sectionThreeBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionThreeBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <NationalSection />
            <VideoSection />
            <PoliticsSection />
            {sectionFiveBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionFiveBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <SportsSection />
            {sectionSevenBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionSevenBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <SocialDiscourseSection />
            {sectionEightBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionEightBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            {/* <EntertainmentSection />
            {sectionNineBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionNineBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <InternationalNews />
            {sectionTenBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionTenBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <OpinionSection />
            {sectionElevenBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionElevenBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <GallarySection />
            {sectionTweleveBotomAds?.ad_status === 1 && (
                <Ads
                    adsImg={sectionTweleveBotomAds?.ad_thumbnail}
                    adsWidth={768}
                    adsHeight={90}
                />
            )}
            <LifeStyleSection /> */}
            <Footer />
        </>

    );
}
