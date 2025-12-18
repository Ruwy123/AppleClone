import { NavLinks } from "../constants";
const Navbar = () => {
  return (
    <header className="w-screen fixed top-0 left-0 z-50 flex-center bg-black min-h-[7vh]">
      <nav className="container mx-auto flex-between px-5 2xl:px-0">
        <img
          className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          src="/logo.svg"
          alt="Apple logo"
        />
        <ul className="flex-center gap-8">
          {NavLinks.map(({ label }) => (
            <li key={label}>
              <a
                className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
                href={label}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
