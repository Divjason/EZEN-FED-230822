import "./App.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";

// const TabContent = ({ tab }) => {
//   if (tab == 0) {
//     return <div>내용 0</div>;
//   } else if (tab == 1) {
//     return <div>내용 1</div>;
//   } else if (tab == 2) {
//     return <div>내용 2</div>;
//   }
// };

function App() {
  const [tab, setTab] = useState(0);
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab
        eventKey="home"
        title="Home"
        onClick={() => {
          setTab(0);
        }}
      >
        {/* <TabContent tab={tab} /> */}
        오늘의 메뉴
      </Tab>
      <Tab
        eventKey="profile"
        title="Profile"
        onClick={() => {
          setTab(1);
        }}
      >
        {/* <TabContent tab={tab} /> */}
        오늘의 집
      </Tab>
      <Tab
        eventKey="longer-tab"
        title="Loooonger Tab"
        onClick={() => {
          setTab(2);
        }}
      >
        {/* <TabContent tab={tab} /> */}
        오늘의 패션
      </Tab>
    </Tabs>
  );
}

export default App;
