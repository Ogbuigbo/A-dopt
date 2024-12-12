import Image from "next/image";
import Header from "./_components/Header";
import About from "./_components/About";
// import ImageScroll from "./_components/Slider";
import Services from "./_components/Services";
import Leading from "./_components/Leading";
import LaboratoryServices from "./_components/LaboratoryServices";
import ProcurementSolutions from "./_components/Logistics";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <About />
      <Services />
      <Leading />
      <LaboratoryServices />
      <ProcurementSolutions />
    </div>
  );
}
