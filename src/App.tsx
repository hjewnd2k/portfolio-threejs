import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
    </>
  );
};

export default App;
