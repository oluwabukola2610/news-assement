import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" max-w-[1200px] mx-auto p-4">
      <div className="flex justify-between items-center">
        <div>
          <img src="/src/assets/images/logo.svg" alt="Logo" className="h-8" />
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            <img
              src="src/assets/images/icon-menu.svg"
              alt="menu-btn"
              className="block ml-20 md:hidden"
            />
          </button>
        </div>
        <div className="hidden md:flex md:flex-row md:space-x-4">
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 px-3 py-2 text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 px-3 py-2 text-sm font-medium"
          >
            New
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 px-3 py-2 text-sm font-medium"
          >
            Popular
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 px-3 py-2 text-sm font-medium"
          >
            Trending
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-red-500 px-3 py-2 text-sm font-medium"
          >
            Categories
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
          <div className="absolute top-0 right-0 z-50 h-full w-[250px]  bg-white shadow-lg">
            <button onClick={toggleMenu} className="absolute top-3 right-5">
              <img
                src="/src/assets/images/icon-menu-close.svg"
                alt="close-btn"
              />
            </button>
            <div className="space-y-6 p-3 mt-16">
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 px-3 text-lg py-2  font-medium block"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 px-3 text-lg py-2  font-medium block"
              >
                New
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 px-3 text-lg py-2  font-medium block"
              >
                Popular
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 px-3 text-lg py-2  font-medium block"
              >
                Trending
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-red-500 px-3 text-lg py-2  font-medium block"
              >
                Categories
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
