import "./App.css";
import Topnav from "./top";
import About from "./modules/About";
import Pluses from "./modules/Pluses";
import Edm from "./modules/EDM";
import Calendar from "./modules/Calendar";
import MobScreen from "./modules/MobScreen";
import HeadFont from "./modules/HeadFont";
import WorkspaceNot from "./modules/WorkspaceNot";
import FunctionMobApp from "./modules/FunctionMobApp";
import FollowService from "./modules/FollowService";
import WorkspaceUser from "./modules/WorkspaceUser";
import CivilandBuisness from "./modules/CivilandBuisness";
import { Contacts } from "./modules/Contacts";
import { Footer } from "./modules/Footer";
import { Route, Routes, Link } from "react-router-dom";
import App2 from "./App2";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="download" element={<HeadFont />} />
        <Route path="/" element={<App2 />} />
      </Routes>
    </div>
  );
}

export default App;
