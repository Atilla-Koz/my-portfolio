export default function Footer() {
  return (
    <section className="">
      <div className="flex flex-row justify-start w-full h-[85px]">
        <section className="flex flex-row justify-center items-center gap-4">
          <hr className="w-[40px] h-[2px] bg-white"></hr>
          <p className="text-white pr-8">+(+90) 554 696 30 48</p>
        </section>{' '}
        <section className="flex flex-row justify-center items-center gap-4 ">
          <hr className="w-[40px] h-[2px] bg-[#FF264A] "></hr>
          <p className="text-[#FF264A]">atillakoz@hotmail.com</p>
        </section>
      </div>
    </section>
  );
}
