import Compliance from "../components/sections/Compliance";
import DemoVideo from "../components/sections/DemoVideo";
import Faq from "../components/sections/Faq";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import LaunchStatus from "../components/sections/LaunchStatus";
import Showcase from "../components/sections/Showcase";

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <DemoVideo />
      <Showcase />
      <Compliance />
      <Faq />
      <LaunchStatus />
    </>
  );
}

export default HomePage;
