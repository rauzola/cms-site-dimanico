"use client"; // Adiciona esta linha no topo do arquivo

import { PrismicNextLink } from '@prismicio/next';
import { PrismicText } from '@prismicio/react';
import { useState } from 'react';

interface Link {
  label: string;
  link: any; // Ajuste o tipo conforme necessário
}

interface HeaderProps {
  logoName: string;
  navigationLinks: Link[];
  logoImage: string | any; // Ajuste o tipo conforme necessário
}

export default function Header({ logoName, navigationLinks, logoImage }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alternar visibilidade do menu suspenso
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Alternar visibilidade do menu móvel
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  console.log(logoImage, "navigationLinks")



  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo e Título */}
          <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoImage} className="h-16 w-16 rounded" alt="Flowbite Logo" />  {/*  borda da imagem  */}

            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {logoName}
            </span> */}

          </a>


          {/* Botão do Menu Móvel */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Menu de Navegação */}
          <div className={`relative w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse 
              md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              {/* Item do Menu: Home */}



              {/* Itens do Menu */}
              {navigationLinks.map((item: any, index: number) => (
                <PrismicNextLink
                  key={index}
                  field={item.link}
                  className="block px-2  hover:bg-gray-100 "
                >
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              ))}



            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
