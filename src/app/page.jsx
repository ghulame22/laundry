import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToAction";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurServices";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <AboutUs />
      <OurServices />
      <HowItWorks />
      <ContactUs />
      <CallToAction />
      <Footer />
    </>
  );
}
