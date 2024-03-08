import SubLists from "../SubLists";
import NavElement from "../NavElement";

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

const homeSubList: JSX.Element[] = [
  <SubLists subListTitle="Div 1" subElements={div1SubElements} />,
  <SubLists subListTitle="Div 2" subElements={div2SubElements} />,
  <SubLists subListTitle="Div 3" subElements={div3SubElements} />,
];

export { homeSubList };
