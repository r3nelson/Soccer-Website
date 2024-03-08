import Navbar from "../Components/Navbar";
import { divisionSubList } from "../Components/subListContainers/divisionsSubList";
import OverallSubListContainer from "../Components/OverallSubListContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      {true && <OverallSubListContainer subLists={divisionSubList} />}
    </div>
  );
};

export default Home;
