import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Promo from "./components/Promo";
import Athletes from "./components/Athletes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Athletes />
      <Promo />
      <Footer />
    </main>
  );
}
