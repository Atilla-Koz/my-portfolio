import linL from '../../assets/Home/HeroContacts/linkedinlogo.svg';
import linT from '../../assets/Home/HeroContacts/linkedintext.svg';
import gitL from '../../assets/Home/HeroContacts/githublogo.svg';
import gitT from '../../assets/Home/HeroContacts/githubtext.svg';
import instaL from '../../assets/Home/HeroContacts/instagramlogo.svg';
import instaT from '../../assets/Home/HeroContacts/instagramtext.svg';

export default function Hero() {
  return (
    <section className="flex flex-row justify-between w-full h-[700px] bg-black  bg-custom-bg bg-cover bg-center">
      <section className="flex flex-row items-center gap-4 ">
        <div className=" flex flex-col items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/atilla-k%C3%B6z-9b1841194/"
            className="flex flex-col items-center justify-center gap-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <img
              className="w-[4rem] h-[4rem] transform rotate-[-90deg]"
              src={linT}
            />{' '}
            <img className="w-[2rem] h-[2rem]" src={linL} />{' '}
          </a>
          <a
            className="flex flex-col items-center gap-4"
            href="https://github.com/Atilla-Koz"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <img
              className="w-[4rem] h-[4rem] transform rotate-[-90deg]"
              src={gitT}
            />{' '}
            <img className="w-[2rem] h-[2rem]" src={gitL} />
          </a>
          <a
            className="flex flex-col items-center gap-4"
            href="https://www.instagram.com/atillakz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <img
              className="w-[4rem] h-[4rem] transform rotate-[-90deg]"
              src={instaT}
            />{' '}
            <img className="w-[2rem] h-[2rem]" src={instaL} />{' '}
          </a>
        </div>
        <div
          className="w-[600px] h-[400px] flex flex-col items-center justify-center gap-4"
          style={{
            backgroundImage: 'radial-gradient(#5F4D52 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundColor: 'transparent',
          }}
        >
          <div className="flex flex-col items-start w-[400px]">
            <section className="flex flex-row justify-center items-center gap-4">
              <hr className="w-[40px]  border-white"></hr>
              <h4 className="text-white text-start">Atilla Koz</h4>
            </section>
            <section>
              <h2 className="text-white text-start">Software Developer</h2>
              <h2 className="text-[#FF264A] text-start">Creative</h2>
            </section>
            <section>
              <h6 className="text-white text-center pt-16">
                I'm a software developer based in Istanbul, Turkey. I have a
                passion for web development and love to create websites and
                applications that look good and work well.
              </h6>
            </section>
          </div>
        </div>
      </section>

      <div className="bg-black w-[1%] "></div>
    </section>
  );
}
