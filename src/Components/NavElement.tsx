import { useState } from "react";

interface NavElementProps {
  description: string;
  //   showItems?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | null;
  //   hideItems?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | null;
  //   children?: React.ReactNode;
}

const NavElement: React.FC<NavElementProps> = ({
  description,
  //   showItems,
  //   hideItems,
  //   children,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  //   const showSubList = (childElement: HTMLElement) => {
  //     childElement.classList.remove("hidden");
  //   };
  //   const hideSubList = (childElement: HTMLElement) => {
  //     childElement.classList.add("hidden");
  //   };

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setIsHovered(true);
    const element = e.target;
    console.log(element);
    // console.log(`firstElementChild: ${element.firstElementChild}`);
    // console.log(element.firstElementChild);

    // const childElement = e.target.firstChild as HTMLElement;
    // showSubList(childElement);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setIsHovered(false);
    const element = e.target;
    console.log(element);

    // const childElement = e.target.firstChild as HTMLElement;
    // hideSubList(childElement);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isHovered ? `text-sky-700 text-center m-2` : "m-2"}
    >
      {description}
      {/* {isHovered && children} */}
    </li>
  );
};

export default NavElement;
