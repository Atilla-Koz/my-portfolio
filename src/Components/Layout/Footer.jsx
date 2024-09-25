export default function Footer() {
  return (
    <section className="">
      <div className="flex flex-row justify-start w-full md:50px lg:h-[100px]">
        <section className="flex flex-row justify-center items-center gap-2">
          <hr className="w-[40px]  bg-white"></hr>
          <p className="text-white pr-8 lg:text-[14px] text-font-[400] text-[12px] ">
            +(+90) 554 696 30 48
          </p>
        </section>
        <section className="flex flex-row justify-center items-center gap-2">
          <hr className="w-[40px]  border-[#FF264A]"></hr>
          <a href="mailto:atillakoz@hotmail.com" className="text-[#FF264A]">
            atillakoz@hotmail.com
          </a>
        </section>
      </div>
    </section>
  );
}
