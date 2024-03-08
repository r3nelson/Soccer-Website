import { useRef } from "react";

interface OverallSubListContainerProps {
  subLists?: JSX.Element[] | null; // list of sublists
}

const OverallSubListContainer: React.FC<OverallSubListContainerProps> = ({
  subLists,
}) => {
  const myDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-3 gap-2 w-full border-b border-2 border-black mt-20 text-center">
      {subLists &&
        subLists?.map((ele, index) => (
          <div className="" ref={myDivRef} key={index}>
            {ele}
          </div>
        ))}
    </div>
  );
};

export default OverallSubListContainer;
