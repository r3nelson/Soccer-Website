import { useEffect, useRef } from "react";

import Logo from "./Logo";
import NavElement from "./NavElement";

// interface NavbarProps {
//   sharedRef: React.RefObject<HTMLDivElement>;

// }

// : React.FC<NavbarProps>

const Navbar = () => {
  const sharedRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    console.log(sharedRef.current);
  }, [sharedRef]);

  return (
    <nav className="fixed top-0 bg-black text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <ul className="flex justify-between">
          <NavElement description="Home" />
          <NavElement
            description="Divisions"
            sharedRef={sharedRef}
          ></NavElement>
          <NavElement description="Robledo Cup" />
          <NavElement description="Contact Us" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
