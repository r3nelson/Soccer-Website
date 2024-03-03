interface SubListsProps {
  subListTitle: string;
  subElements?: JSX.Element[] | null; // takes in list of NavElements which are li
}

const SubLists: React.FC<SubListsProps> = ({ subElements, subListTitle }) => {
  return (
    <div className="shadow-sm hover:shadow-lg">
      <h2 className="font-black mt-3">{subListTitle}</h2>
      <ul>
        {subElements &&
          subElements?.map((ele, index) => (
            <div className="" key={index}>
              {ele}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default SubLists;
