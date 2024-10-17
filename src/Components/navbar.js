import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <nav className="bg-transparent border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="./Images/petlogo.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-indigo-800">PataAmiga</span>
        </a>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        
          <button
            type="button"
            className="flex text-sm bg-indigo-800 rounded-full focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-12 h-12 rounded-full"
              src="./Images/Png.png"
              alt="user photo"
            />
          </button>

          {/* Dropdown do usuário */}
          {isUserDropdownOpen && (
            <div
              className="absolute lg:right-40 lg:top-10 md:right-10 md:top-10 right-5 top-20 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-indigo-950 dark:divide-indigo-800"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Isabela Morone</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">MoronePapagaia@gmail.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Botão para abrir/fechar o menu principal */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center hover:text-white text-sm text-indigo-800 rounded-lg md:hidden hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:dark-indigo-800"
            aria-controls="navbar-user"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu principal */}
        <div
          className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex flex-col md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4  md:p-0 mt-4 border border-gray-100 rounded-lg  bg-opacity-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-indigo-800 hover:border-b-2 border-indigo-800 md:bg-transparent md:text-indigo-700 md:p-0 hover:scale-105  transition-all duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-indigo-900 bg-gray-200 hover:border-b-2 border-indigo-800 md:bg-transparent md:text-indigo-700 md:p-0 hover:scale-105  transition-all duration-300"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-indigo-900 bg-gray-200 hover:border-b-2 border-indigo-800 md:bg-transparent md:text-indigo-700 md:p-0 hover:scale-105  transition-all duration-300"
              >
                Adoção
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-indigo-900 bg-gray-200 hover:border-b-2 border-indigo-800 md:bg-transparent md:text-indigo-700 md:p-0 hover:scale-105  transition-all duration-300"
              >
                Denuncias
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
