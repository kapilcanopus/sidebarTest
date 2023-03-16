import React, {useState} from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/main/Content";

function App() {
  const [checkedItems, setCheckedItems] = useState([]);
  return (
    <div className="my-page">
      <div className="side-bar">
        <Sidebar checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
      </div>
      <div className="main">
        <Content checkedItems={checkedItems}/>
      </div>
    </div>
  );
}

export default App;
