export default function ButtonNext() {
  const btn = '<';

  return (
    <div className="flex flex-row items-center justify-center gap-4 p-2">
      <button className="text-white bg-[#171717] p-2 rounded-lg">{btn}</button>
      <button className="text-white bg-[#171717] p-2 rounded-lg">></button>
    </div>
  );
}
