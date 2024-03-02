interface NavElementProps {
  description: string;
  showItems?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | null;
  hideItems?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | null;
  subElements?: JSX.Element[] | null;
  embededSubElements: boolean;
}

const NavElement: React.FC<NavElementProps> = ({
  showItems,
  subElements,
  description,
  hideItems,
  embededSubElements,
}) => {
  return (
    <li
      className="p-5 ml-5 hover:bg-sky-700 hover:text-center"
      onMouseOver={showItems}
      onMouseLeave={hideItems}
    >
      {description}
      {subElements && (
        <ul className="hidden">
          {subElements?.map((ele, index) => (
            <li className="mt-2" key={index}>
              {ele}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavElement;
