export default function Header() {
  return (
    <header className="h-[82px] w-full bg-background flex items-end px-2.5">
      <div className="flex justify-between items-center w-full">
        <img src="/ROOTS.png" width="86px" height="30px" alt="Roots logo" />
        <nav>
          <ul className="flex gap-4 items-center font-(family-name:--font-montserrat) font-semibold text-xs text-darkbrown">
            <li>
              <a href="#menu" className="hover:underline">
                MENU
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                CONTACT
              </a>
            </li>
            <li>
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15.05H15V0.0499999H0V15.05Z" fill="black" />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
