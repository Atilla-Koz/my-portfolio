import Hero from '../Home/Hero';
import Footer from './Footer';
import Header from './Header';

export default function Home() {
  return (
    <section className="bg-black h-screen overflow-hidden">
      <Header />
      <Hero />
      <Footer />
    </section>
  );
}
