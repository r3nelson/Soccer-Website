import { useState, useRef, useEffect } from "react";

import Navbar from "../Components/Navbar";
import { divisionSubList } from "../Components/subListContainers/divisionsSubList";
import { homeSubList } from "../Components/subListContainers/homeSubList";
import OverallSubListContainer from "../Components/OverallSubListContainer";

const Home = () => {
  const [parentRef, setParentRef] =
    useState<React.RefObject<HTMLLIElement> | null>(null);

  const testRef = useRef(null);
  useEffect(() => {
    console.log(testRef);
  });

  const handleRefUpdate = (ref: React.RefObject<HTMLLIElement>) => {
    setParentRef(ref);
  };

  return (
    <div ref={testRef}>
      <Navbar onRefUpdate={handleRefUpdate} />

      {parentRef?.current?.innerText === "Divisions" && (
        <OverallSubListContainer subLists={divisionSubList} />
      )}
      {parentRef?.current?.innerText === "Home" && (
        <OverallSubListContainer subLists={homeSubList} />
      )}
    </div>
  );
};

export default Home;
