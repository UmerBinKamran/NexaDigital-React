import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
