import img from '../../assets/Home/HeroContacts/hero2.png';

export default function WorkHero() {
  return (
    <div>
      <section className="flex item-center justify-center">
        <img className="w-[300px] h-[400px]" src={img} />
      </section>
      <section className="flex flex-col items-start p-4 justify-center gap-4">
        <h6 className="text-white text-start">03. POWERFUL IMAGERY</h6>
        <h4 className="text-[#B61727]">Powerful Imagery</h4>
      </section>
    </div>
  );
}
