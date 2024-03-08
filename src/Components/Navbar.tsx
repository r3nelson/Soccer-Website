import { useEffect, useRef } from "react";

import Logo from "./Logo";
import NavElement from "./NavElement";

const Navbar = ({
  onRefUpdate,
}: {
  onRefUpdate: (ref: React.RefObject<HTMLLIElement>) => void;
}) => {
  const sharedRef = useRef<HTMLLIElement>(null);

  const updateParentRef = (ref: React.RefObject<HTMLLIElement>) => {
    onRefUpdate(ref);
  };

  useEffect(() => {
    // console.log("From Navbar.tsx");
    // console.log(sharedRef.current);
    // console.log("--------------");
    sharedRef;
  }, []);

  return (
    <nav className="fixed top-0 bg-black text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <ul className="flex justify-between">
          <NavElement description="Home" updateParentRef={updateParentRef} />
          <NavElement
            description="Divisions"
            updateParentRef={updateParentRef}
          ></NavElement>
          <NavElement description="Robledo Cup" />
          <NavElement description="Contact Us" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
