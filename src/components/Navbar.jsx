import { useState } from "react";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navbarLinks = [
    { id: 1, title: "Inicio", link: "/" },
    { id: 2, title: "Nosotros", link: "/" },
    { id: 3, title: "Contacto", link: "/" },
    { id: 4, title: "Soporte", link: "/" },
  ];
  //Social Media Links
  const navbarRedes = [
    {
      id: 1,
      title: "Facebook",
      link: "https://www.facebook.com",
      icon: "bi bi-facebook",
    },
    {
      id: 2,
      title: "GitHub",
      link: "https://www.github.com:",
      icon: "bi bi-github",
    },
  ];

  return (
    <nav className="w-full bg-gray-900">
      {/* View Desktop */}
      <div className="flex justify-between items-center sm:px-12 sm:py-3 px-20 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bandera_de_la_Provincia_de_Catamarca.svg/1280px-Bandera_de_la_Provincia_de_Catamarca.svg.png"
            }
            alt="logo-catamarca"
            className="w-[50px]"
          />
        </div>
        {/* BURGER BTN */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={toggleMenu}
        >
          {/* le pasamos la referencia de la funcion toggleMenu */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              /> // ICON X
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
              // ICON HAMBURGUESA
            )}
            {/* // BURGER ICON */}
          </svg>
        </button>
        {/* NAVEGATION LINKS DESKTOP*/}
        <div className="hidden md:block">
          <ul className="flex space-x-4 px-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="text-sm text-white hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110 inline-block"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* NAVEGATION SOCIAL DESKTOP*/}
        <div className="hidden md:block">
          <ul className="flex space-x-4 px-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer" //para evitar que te trackeen desde que pagina vienes
                  className="text-sm text-white hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110 inline-block"
                >
                  <i
                    className={`${link.icon} sm:text-2x1 text-lg text-white transition-all duration-300 hover:text-yellow-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* View Mobile */}
      <div
        className={`md:hidden  bg-gray-800 transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Si es open */}
        {/* View Mobile Links */}
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                href={link.link}
                className="text-sm text-white hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110 inline-block py-2"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* View Mobile Social */}
        <ul className="flex space-x-4 px-4 py-2 border-t border-yellow-700 justify-center">
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                onClick={() => setIsOpen(false)}
              >
                <i
                  className={`${link.icon} text-lg text-white hover:text-yellow-500`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
