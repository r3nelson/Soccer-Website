import SubLists from "../Components/SubLists";
import NavElement from "../Components/NavElement";
import OverallSubListContainer from "../Components/OverallSubListContainer";

const div1SubElements: JSX.Element[] = [
  <NavElement description="Div 1 Schedule" />,
  <NavElement description="Div 1 Scores and Standings" />,
  <NavElement description="Div 1 Teams and Rosters" />,
];
const div2SubElements: JSX.Element[] = [
  <NavElement description="Div 2 Schedule" />,
  <NavElement description="Div 2 Scores and Standings" />,
  <NavElement description="Div 2 Teams and Rosters" />,
];
const div3SubElements: JSX.Element[] = [
  <NavElement description="Div 3 Schedule" />,
  <NavElement description="Div 3 Scores and Standings" />,
  <NavElement description="Div 3 Teams and Rosters" />,
];
const mens35SubElements: JSX.Element[] = [
  <NavElement description="Men's 35+ Schedule" />,
  <NavElement description="Men's 35+ Scores and Standings" />,
  <NavElement description="Men's 35+ Teams and Rosters" />,
];
const mastersSubElements: JSX.Element[] = [
  <NavElement description="Masters Schedule" />,
  <NavElement description="Masters Scores and Standings" />,
  <NavElement description="Masters Teams and Rosters" />,
];
const womenSubElements: JSX.Element[] = [
  <NavElement description="W1 Schedule" />,
  <NavElement description="W1 Scores and Standings" />,
  <NavElement description="W1 Teams and Rosters" />,
];
const coedSubElements: JSX.Element[] = [
  <NavElement description="Co-ed 11-A-Side" />,
  <NavElement description="Co-ed 7-A-Side" />,
];
const uscsSubElements: JSX.Element[] = [
  <NavElement description="Hawaii State Cup" />,
  <NavElement description="Hawaii PDP" />,
];
const juniorsSubElements: JSX.Element[] = [
  <NavElement description="Leagues" />,
  <NavElement description="Scores and Standings" />,
  <NavElement description="Teams and Rosters" />,
];

const divisionSubList: JSX.Element[] = [
  <SubLists subListTitle="Div 1" subElements={div1SubElements} />,
  <SubLists subListTitle="Div 2" subElements={div2SubElements} />,
  <SubLists subListTitle="Div 3" subElements={div3SubElements} />,
  <SubLists subListTitle="Men's 35+" subElements={mens35SubElements} />,
  <SubLists subListTitle="Masters" subElements={mastersSubElements} />,
  <SubLists subListTitle="Women" subElements={womenSubElements} />,
  <SubLists subListTitle="Co-ed" subElements={coedSubElements} />,
  <SubLists subListTitle="USCS" subElements={uscsSubElements} />,
  <SubLists subListTitle="Miso Juniors" subElements={juniorsSubElements} />,
];

const Home = () => {
  return (
    <div className="w-full">
      <OverallSubListContainer subLists={divisionSubList} />
    </div>
  );
};

export default Home;
