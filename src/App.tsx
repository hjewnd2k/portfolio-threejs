import { NavBar } from "./components";
import {
  Contact,
  Experience,
  FeatureCards,
  Footer,
  Hero,
  LogoShowcase,
  ShowcaseSection,
  TechStack,
  Testimonials,
} from "./sections";

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
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
