import { useState } from "react";

interface NavElementProps {
  description: string;
  sharedRef?: React.RefObject<HTMLLIElement>;
}

const NavElement: React.FC<NavElementProps> = ({ description, sharedRef }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={sharedRef}
      className={isHovered ? `text-sky-700 text-center m-2` : "m-2"}
    >
      {description}
    </li>
  );
};

export default NavElement;
