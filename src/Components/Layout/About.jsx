import AboutDream from '../../assets/About/AboutDream';
import AboutHero from '../../assets/About/AboutHero';

export default function About() {
  return (
    <section className="lg:p-8 text-white  flex lg:flex-row lg:justify-between lg:pr-[1rem] flex-col gap-2">
      <AboutHero />
      <AboutDream />
      <AboutDream />
    </section>
  );
}
