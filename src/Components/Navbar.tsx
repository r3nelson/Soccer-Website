import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 bg-black text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <NavList />
      </div>
    </nav>
  );
};

export default Navbar;
