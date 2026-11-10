import { Link } from "@tanstack/react-router";
import { MenuMobile } from "../MenuMobile";
import Logo from "../../assets/images/logo.png";

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Sobre", href: "/sobre" },
  { name: "Quem sou eu", href: "/quemSouEu" },
  { name: "Depoimentos", href: "/depoimentos" },
];

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed top-3 left-0 right-0 z-10 px-4 ">
        <div className="bg-white text-black max-w-7xl mx-auto flex items-center py-3 px-6 rounded-2xl mt-4 justify-between shadow-lg transition-colors duration-300">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center border rounded-full w-9 h-9 shadow-sm transition-all duration-300 shrink-0"
          >
            <img
              src={Logo}
              alt="Microfone anos 50"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Nav Links Desktop */}
          <nav>
            <ul className="flex gap-4 md:gap-10 items-center">
              <li className="hidden lg:block hover:text-purple-500 transition-colors duration-300">
                <Link to="/sobre">Sobre</Link>
              </li>
              <li className="hidden lg:block hover:text-purple-500 transition-colors duration-300">
                <Link to="/quemSouEu">Quem sou eu</Link>
              </li>
              <li className="hidden lg:block hover:text-purple-500 transition-colors duration-300">
                <Link to="/depoimentos">Depoimentos</Link>
              </li>
              <li className="lg:hidden">
                <MenuMobile navLinks={navLinks} />
              </li>
              
            </ul>
          </nav>

        </div>
      </header>
    </div>
  );
};