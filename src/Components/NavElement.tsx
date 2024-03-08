import { useState, useEffect, useRef } from "react";

interface NavElementProps {
  description: string;
  updateParentRef?: null | ((ref: React.RefObject<HTMLLIElement>) => void);
}

const NavElement: React.FC<NavElementProps> = ({
  description,
  updateParentRef,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const localRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (updateParentRef && isHovered) {
      updateParentRef(localRef);
      //   console.log("From NavElement.tsx");
      //   console.log(localRef.current);
      //   console.log("--------------");
    }
    // else {
    //   updateParentRef(null);
    // }
  }, [isHovered, localRef, updateParentRef]);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={localRef}
      className={isHovered ? `text-sky-700 text-center m-2` : "m-2"}
    >
      {description}
    </li>
  );
};

export default NavElement;
