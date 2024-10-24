import AboutDream from '../../assets/About/AboutDream';
import AboutHero from '../../assets/About/AboutHero';

export default function About() {
  return (
    <section className="p-8 text-white  flex flex-row justify-between pr-[1rem]">
      <AboutHero />
      <AboutDream />
      <AboutDream />
    </section>
  );
}
