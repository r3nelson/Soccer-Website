interface OverallSubListContainerProps {
  subLists?: JSX.Element[] | null; // list of sublists
}

const OverallSubListContainer: React.FC<OverallSubListContainerProps> = ({
  subLists,
}) => {
  return (
    <div className=" hidden grid grid-cols-3 gap-2 w-full border-b border-2 border-black mt-20 text-center">
      {subLists &&
        subLists?.map((ele, index) => (
          <div className="" key={index}>
            {ele}
          </div>
        ))}
    </div>
  );
};

export default OverallSubListContainer;
