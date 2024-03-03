import NavElement from "./NavElement";

const NavList = () => {
  return (
    <ul className="flex justify-between">
      <NavElement description="Home" />
      <NavElement description="Divisions"></NavElement>
      <NavElement description="Robledo Cup" />
      <NavElement description="Contact Us" />
    </ul>
  );
};

export default NavList;
