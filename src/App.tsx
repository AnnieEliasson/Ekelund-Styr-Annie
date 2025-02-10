import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import Modal from "./components/Modal/Modal";

import SideBar from "./components/SideBar/SideBar";
import { PropertiesProvider } from "./context/PropertyContextProvider";

function App() {
  return (
    <>
      {/* <div className="test"></div>
      <button className="test-btn">Test</button>
      <ul className="testList">
        {testList.map((item) => {
          return <li className="testListItem">{item}</li>;
        })}
      </ul>
       */}
      <PropertiesProvider>
        <Modal />
        <Dashboard />
        <SideBar />
      </PropertiesProvider>
      <img className="logo" src="src\assets\test2.png" alt="" />

      {/* <StatusBtn type={"clickable"} />
      <SearchBar />
      <NavBar />
      <AboutCard /> */}
    </>
  );
}

export default App;
