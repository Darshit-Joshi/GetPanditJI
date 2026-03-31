import FeaturedPandits from "../components/Home/FeaturedPandits";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import QuickTools from "../components/Home/QuickTools";
import Testimonials from "../components/Home/Testimonial";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FinalCTA from "../components/Home/FinalCTA";

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
