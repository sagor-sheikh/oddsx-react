import HeaderMain from "@/components/Shared/HeaderMain";
import HeroSlider from "@/components/Pages/Home/HeroSlider";
import HeroMatches from "@/components/Pages/Home/HeroMatches";
import LiveMatches from "@/components/Pages/Home/LiveMatches";

export default function Home() {
  return (
    <main>
      <HeaderMain />
      <HeroSlider />
      <HeroMatches />
      <LiveMatches />
    </main>
  );
}
