import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "#home" },
    { link: "About", path: "#about" },
    { link: "Projects", path: "#projects" },
    { link: "Contact", path: "#contact" },
  ];
  return (
    <>
      <nav className="top-0 left-0 z-50 fixed bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 shadow-lg mx-auto md:px-14 p-4 w-full text-gray-100">
        <div className="flex justify-between items-center mx-auto font-medium text-lg container">
          <div className="flex items-center space-x-12 lg:space-x-96">
            <a
              href="/"
              className="flex items-center font-semibold text-2xl text-gray-100"
            >
              Edgie
              <span className="ml-2 text-yellow-300">Alturas</span>
            </a>
            {/* here the navItems */}
            <ul className="md:flex space-x-8 hidden">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block hover:bg-purple-800 px-4 py-2 rounded focus:ring-2 focus:ring-purple-600 text-slate-900 hover:text-slate-200 transition duration-200 ease-in-out focus:outline-none"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
          {/* hamburger button  */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300 duration-300"
            >
              {isMenuOpen ? (
                <FaXmark className="text-primary size-6" />
              ) : (
                <FaBars className="text-primary size-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 mt-[4.3rem] px-4 pt-5 pb-5 bg-purple-300 text-lg font-semibold uppercase text-center ${
          isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block hover:bg-purple-800 px-4 py-2 rounded-md focus:ring-2 focus:ring-purple-600 text-slate-900 hover:text-slate-200 transition duration-200 ease-in-out focus:outline-none"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};
export default Navbar;
