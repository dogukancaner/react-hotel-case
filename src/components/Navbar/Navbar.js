import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/logo.png";
const Navbar = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between lg-gap-0">
        <Link to="/">
          <img className="w-[180px]" src={Logo} alt="" />
        </Link>
        <div
          className={`${
            header ? " text-black" : "text-white"
          } flex gap-6 lg:gap-8 font-medium tracking-[1px] text-[16px] lg:text-[18px] items-center `}
        >
          <Link to="/" className="hover:text-gray-400 duration-300">
            Anasayfa
          </Link>
          <Link to="/" className="hover:text-gray-400 duration-300">
            Odalarımız
          </Link>
          <Link to="/" className="hover:text-gray-400 duration-300">
            Galeri
          </Link>
          <Link to="/" className="hover:text-gray-400 duration-300">
            İletişim
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
