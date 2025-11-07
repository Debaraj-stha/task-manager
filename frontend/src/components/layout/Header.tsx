
import Brand from "../common/Brand";
import { Link } from "react-router-dom";
import { HEADERBG } from "../../constants/colors";
import { NAV_LINKS } from "../../constants/content/common";
import { BiMenu, BiX } from "react-icons/bi";
import ThemeToggler from "../common/ThemeToggler";
import { useState } from "react";
import { ROUTES } from "../../constants/routes";

const Header = () => {
  const [isOpened, setOpened] = useState(false)
  const role = "guest"

  const toggleMenu = () => {
    return <button onClick={() => setOpened((prev) => !prev)} className="md:hidden text-white focus:outline-none z-50">
      {isOpened ? <BiX /> : <BiMenu />}
    </button>
  }

  const renderLinks = () => NAV_LINKS.filter(l => l.role.includes(role)).map((link, i) => (
    <Link
      key={i}
      to={ROUTES[link.routeKey]}
      className="hover:text-yellow-300 transition-colors duration-300"
    >
      {link.label}
    </Link>
  ))


  return (
    <header
      className="py-4 px-6 sticky top-0 flex flex-col md:flex-row shadow-md z-50 backdrop-blur-md bg-opacity-90"
      style={{ backgroundColor: HEADERBG }}
    >
      {/* header */}
      <div className="flex justify-between z-50">
        <Brand />
        {toggleMenu()}
      </div>
      <div className="hidden md:flex flex-row   justify-between w-full items-center">
        <nav className="hidden md:flex gap-6 text-white font-medium mx-auto">
          {renderLinks()}
        </nav>
        <ThemeToggler />
      </div>
      <div>

      </div>
      {/* Mobile Overlay */}
      {isOpened && (
        <div
          className="fixed inset-0 bg-gray-900/80 h-screen backdrop-blur-sm z-30 transition-opacity duration-300 "
          onClick={() => setOpened(false)}
        ></div>
      )}
      {/* sidebar for Mobile */}
      <div className={`${isOpened ? "block" : "hidden"} md:hidden min-h-screen   space-y-6 absolute px-6 py-16 inset-0 w-1/2 z-40`} style={{ backgroundColor: HEADERBG }}>

        <nav className="flex flex-col gap-5 items-start">
          {renderLinks()}
        </nav>
        <ThemeToggler isMobile={true} />
      </div>
    </header>
  );
};

export default Header;
