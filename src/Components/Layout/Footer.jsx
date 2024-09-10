export default function Footer() {
  return (
    <section className="">
      <div className="flex flex-row justify-start w-full h-[85px]">
        <section className="flex flex-row justify-center items-center gap-4">
          <hr className="w-[40px]  bg-white"></hr>
          <p className="text-white pr-8">+(+90) 554 696 30 48</p>
        </section>
        <section className="flex flex-row justify-center items-center gap-4">
          <hr className="w-[40px]  border-[#FF264A]"></hr>
          <a href="mailto:atillakoz@hotmail.com" className="text-[#FF264A]">
            atillakoz@hotmail.com
          </a>
        </section>
      </div>
    </section>
  );
}
