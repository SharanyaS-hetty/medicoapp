import React from "react";
import Home from "./Home/Home";
import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import Dashbord from "./Dashbord/Dashbord";
import PatientLogin from "./Patient/PatientLogin";
import PatientDashbord from './Patient/PatientDashbord'
 export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      authenticated:false,
      loading:true
    };
  }

  render(){
    return(
             <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Dashbord" element={<Dashbord/>}/>
             <Route path="/patientlogin" element={<PatientLogin/>}/>
             <Route path="/patientdashbord" element={<PatientDashbord/>}/>
             </Routes>
    )
  }
}
