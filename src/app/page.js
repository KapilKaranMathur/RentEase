import Image from "next/image";
import HeaderAndHero from "./components/homepage/Herosection";
import Midsection from "./components/homepage/Midsection";
import Howitworks from "./components/homepage/Howitworks";
import Footer from "./components/homepage/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
    <HeaderAndHero />
    <Midsection />
    <Howitworks />
    <Footer />
  </main>
  );
}