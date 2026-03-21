import FeaturedPandits from "../components/FeaturedPandits";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import QuickTools from "../components/QuickTools";
import Testimonials from "../components/Testimonial";
import WhyChooseUs from "../components/WhyChooseUs";
import FinalCTA from "../components/FinalCTA";

function Home() {
  return (
    <>
      <Hero />
      <QuickTools />
      <FeaturedPandits />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
export default Home;
