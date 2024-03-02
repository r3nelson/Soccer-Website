import NavElement from "./NavElement";

const testSubElements: JSX.Element[] = [
  <NavElement description="Test1" embededSubElements={false} />,
  <NavElement description="Test2" embededSubElements={false} />,
  <NavElement description="Test3" embededSubElements={false} />,
];

const NavList = () => {
  const divisionSubElements: JSX.Element[] = [
    <NavElement description="Men" embededSubElements={false} />,
    <NavElement description="Women" embededSubElements={false} />,
    <NavElement description="Youth" embededSubElements={false} />,
    <NavElement
      description="Co-ed"
      subElements={testSubElements}
      showItems={showItems}
      hideItems={hideItems}
      embededSubElements={true}
    />,
  ];

  function showItems(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    // on hover remove class hidden
    const hoveredElement = e.target as HTMLElement;
    const childElement = hoveredElement.firstElementChild as HTMLElement;
    if (childElement.classList.contains("hidden")) {
      childElement.classList.remove("hidden");
    }
  }

  function hideItems(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    const hoveredElement = e.target as HTMLElement;
    const childElement = hoveredElement.firstElementChild as HTMLElement;
    childElement.classList.add("hidden");
  }
  return (
    <ul className="flex justify-between">
      <NavElement description="Home" />
      <NavElement
        description="Divisions"
        subElements={divisionSubElements}
        showItems={showItems}
        hideItems={hideItems}
      />
      <NavElement description="Contact Us" />
    </ul>
  );
};

export default NavList;
