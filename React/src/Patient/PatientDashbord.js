import React from "react"
 import { Navigate } from "react-router-dom"
import Store from "../Action/Store"
import {ACTION_PATIENT_LOGOUT , ACTION_PATIENT_UPDATE_TOKEN} from "../Action/PatientAction";

import {connect} from 'react-redux'
import Appointmentcon from "./Appointmentcon";
import AppointmentTest from "./AppointmentTest";
var mapStateToProps = state => {
    return {
        Patientd: state.Patient,
    }
  }
class PatientDashbord extends React.Component{

    constructor(){
        super()
         this.state = {
            logoinstatus :false,
            Patient:[]
        }
    }
    
    componentDidMount()
    {
     console.log(this.props.Patientd)
     console.log(this.props.Patientd.patientid)
     fetch(`http://localhost:8080/Hospital/getPatient/${this.props.Patientd.token}`)
     .then(response=>response.json()).then(data=>{
       console.log(data)
            if(data.status)
            {
                Store.dispatch({...ACTION_PATIENT_UPDATE_TOKEN,payload:{
                    token : data.token
                }})
                this.setState({Patient:data.data})
                console.log(this.state.Patient)
                console.log(this.state.Patient.name)
                
            }else{
                if(data.code==401)
                    alert("Invalid User !")
                if(data.code==400)
                    alert("Session Lost !")
                    this.setState({logoinstatus:true})  
                Store.dispatch({...ACTION_PATIENT_LOGOUT})                      
            }
        }); 
    }

    logout = (event)=>{
        this.setState({logoinstatus:true}) 
        Store.dispatch({...ACTION_PATIENT_LOGOUT})
      } 

    render(){
        if(this.state.logoinstatus){
            return(<Navigate to={"/patientlogin"}/>)
        }
        return(<>
        
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
  <a class="navbar-brand" href=""><i class="fa fa-user-plus" aria-hidden="true"></i>MEDICO </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav mr-auto">
       <li class="nav-item">
       <button  onClick={this.logout} name="Login" class="btn btn-primary"> <a class="nav-link"  ><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a></button>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
    </ul>
  </div>
</nav>
  
  
  <body style={{paddingTop:"50px"}}>
  
   <div class="container-fluid" style={{marginTop:"50px"}}>
    <h3 style = {{marginLeft: "40%",  paddingBottom: "20px", fontFamily: 'IBM Plex Sans'}}> Welcome {this.state.Patient.name}
   </h3>
    <div class="row">
  <div class="col-md-4" style={{maxWidth:"25%", marginTop: "3%"}}>
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-dash-list" data-toggle="list" href="#list-dash" role="tab" aria-controls="home">Dashboard</a>
      <a class="list-group-item list-group-item-action" id="Appointcon-list" data-toggle="list" href="#Appointcon" role="tab" aria-controls="home">Appointment for Consultancy </a>
      <a class="list-group-item list-group-item-action" id="Appointtest-list" data-toggle="list" href="#Appointtest" role="tab" aria-controls="home">Appointment for Test</a>
      <a class="list-group-item list-group-item-action" href="#appointmentStutes" id="list-pat-list" role="tab" data-toggle="list" aria-controls="home">Consultancy Appointment Status</a>
      <a class="list-group-item list-group-item-action" href="#testAppoint" id="list-pat-list" role="tab" data-toggle="list" aria-controls="home">Test Appointment Status</a>
      <a class="list-group-item list-group-item-action" href="#list-pres" id="list-pres-list" role="tab" data-toggle="list" aria-controls="home">Appointment History</a>
      
    </div><br/>
  </div>
  <div class="col-md-8" style={{marginTop: "3%"}}>
    <div class="tab-content" id="nav-tabContent" style={{width:" 950px"}}>


      <div class="tab-pane fade  show active" id="list-dash" role="tabpanel" aria-labelledby="list-dash-list">
        <div class="container-fluid container-fullw bg-white" >
              <div class="row">
               <div class="col-sm-4" style={{left: "5%"}}>
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body">
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-terminal fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop:" 5%"}}> Book My Appointment</h4>
                                     
                      <p class="links cl-effect-1">
                        <a href="#Appointcon" onclick="clickDiv('#Appointcon-list')">
                          Book Appointment
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4" style={{left: "10%"}}>
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body" >
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-paperclip fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop: "5%"}}>My Appointments</h4>
                    
                      <p class="cl-effect-1">
                        <a href="#testAppoint" onclick="clickDiv('#list-pat-list')">
                          View Appointment History
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                </div>

                <div class="col-sm-4" style={{left:" 20%",marginTop:"5%"}}>
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body" >
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-list-ul fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop: "5%"}}>Prescriptions</h4>
                    
                      <p class="cl-effect-1">
                        <a href="#list-pres" onclick="clickDiv('#list-pres-list')">
                          View Prescription List
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

    <Appointmentcon patientidata={this.props.Patientd.patientid}></Appointmentcon>

    <AppointmentTest patientidata={this.props.Patientd.patientid}></AppointmentTest>




      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
        <form class="form-group" method="post" action="func.php">
          <label>Doctors name: </label>
          <input type="text" name="name" placeholder="Enter doctors name" class="form-control"/>
          <br/>
          <input type="submit" name="doc_sub" value="Add Doctor" class="btn btn-primary"/>
        </form>
      </div>
       <div class="tab-pane fade" id="list-attend" role="tabpanel" aria-labelledby="list-attend-list">...</div>
    </div>
  </div>
</div>
   </div>
    

  </body>
        </>
        )
    }

}
export default connect(mapStateToProps,null)(PatientDashbord)