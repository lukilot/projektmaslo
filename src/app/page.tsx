import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Offer from '@/components/sections/Offer';
import About from '@/components/sections/About';
import Reviews from '@/components/sections/Reviews';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offer />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
