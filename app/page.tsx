import HeaderMain from "@/components/Shared/HeaderMain";
// import MainFooter from "@/components/Shared/MainFooter";
import HeroSlider from "@/components/Pages/Home/HeroSlider";
import HeroMatches from "@/components/Pages/Home/HeroMatches";
import LiveMatches from "@/components/Pages/Home/LiveMatches";
import MiddleSlider from "@/components/Pages/Home/MiddleSlider";
import UpComingEvents from "@/components/Pages/Home/UpComingEvents";

export default function Home() {
  return (
    <main>
      <HeaderMain />
      <HeroSlider />
      <HeroMatches />
      <LiveMatches />
      <MiddleSlider />
      <UpComingEvents />
      {/* <MainFooter /> */}
    </main>
  );
}
