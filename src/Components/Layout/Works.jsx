import ButtonNext from '../Toys/ButtonNext';
import WorkHero from '../Works/WorkHero';

export default function Works() {
  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:gap-8">
      <div className="lg:flex lg:flex-row lg:items-centerlg: gap-4">
        <hr className="lg:w-[40px]  border-white"></hr>
      </div>
      <h1 className="text-[#B61727] p-[1rem]"> Works</h1>
      <h6 className="text-white flex flex-row item-center p-2">
        03. POWERFUL IMAGERY
      </h6>
      <ButtonNext />
      <WorkHero />
    </section>
  );
}
