export default function Header() {
  return (
    <section className="text-white flex flex-row justify-between p-12">
      <div>
        <h4>Atilla</h4>
      </div>
      <nav className="flex flex-row gap-8 text-[small]">
        <h6>HOME</h6>
        <h6>ABOUT</h6>
        <h6>WORKS</h6>
        <h6>CONTACT</h6>
      </nav>
    </section>
  );
}
