import AboutHero from '../../assets/About/AboutHero';

export default function About() {
  return (
    <section className="p-8 text-white">
      <h1 className="text-3xl font-bold">About Me</h1>
      <AboutHero />
      <p className="mt-4">
        This is the about section where you can write about yourself.
      </p>
    </section>
  );
}
