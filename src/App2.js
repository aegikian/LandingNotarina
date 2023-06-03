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
import Footer from "./modules/Footer";
import { Route, Routes, Link } from "react-router-dom";


function App2() {
    return (
        <div className="App">
            <div>
                <Topnav id='Topnav' />
                <div>
                    <About id='About' />
                    <br />
                </div>
                <Pluses id='Pluses' />
                <div className="EMdiv">
                    <Edm id='Edm' />
                </div>
                {/* <div className="Calendar">
          <Calendar id='Calendar' />
        </div> */}
                <br />

                <div className="WorkspaceNot">
                    <WorkspaceNot />
                </div>
                <div className="FunctionMobApp">
                    <FunctionMobApp id='FunctionMobApp' />
                </div>
                {/* <div className="FollowService">
          <FollowService id='FollowService' />
        </div> */}
                <div className="WorkspaceUser">
                    <WorkspaceUser />
                </div>
                <div className="CivillAndBuisness">
                    <CivilandBuisness />
                </div>
                <div className="Contacts">
                    <Contacts />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App2;
