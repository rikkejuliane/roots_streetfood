export default function Menu() {
  return (
    <section className="mt-10 flex flex-col items-center">
      <h1>TAKE A LOOK AT OUR MENU</h1>
      <img src="menu-part1.jpg" alt="Menu for roots" />
      <img src="menu-part2.jpg" alt="Menu for roots" />
      <a
        href="tel:0958515151"
        className="w-[143px] h-[27px] rounded-[5px] bg-darkbrown text-background font-montserrat text-[12px] flex items-center justify-center font-bold cursor-pointer mt-3">
        ORDER BY PHONE
      </a>
    </section>
  );
}
