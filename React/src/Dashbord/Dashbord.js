import React from "react"
import Store from "../Action/Store"
import {ACTION_HOSPETIAL_LOGOUT , ACTION_HOSPETIAL_UPDATE_TOKEN} from "../Action/HospitalAction";
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux'
import AddlistDoctor from "../Doctor/AddlistDoctor";

var mapStateToProps = state => {
  return {
     Hopital: state.Hospitals,
  }
}

 class Dashbord extends React.Component{

  constructor(){
    super()
    this.state = {
        updateProfilemsg : '',
        logoinstatus:false,
        hospitalid:'',
        Hospitals : [],
    }       
}

  

    logout = (event)=>{
      this.setState({logoinstatus:true}) 
      Store.dispatch({...ACTION_HOSPETIAL_LOGOUT})
    } 
    componentDidMount()
    {
        console.log(this.props.Hopital)
        this.setState({Hopsitals:this.props.Hopital})
        console.log(this.props.Hopital.hospitalid)
     fetch(`http://localhost:8080/Hospital/gethospitalbyid/${this.props.Hopital.token}`)
     .then(response=>response.json()).then(data=>{
       console.log(data)
            if(data.status)
            {
                Store.dispatch({...ACTION_HOSPETIAL_UPDATE_TOKEN,payload:{
                    token : data.token
                }})
                this.setState({Hopsitals:data.data})
                this.setState({hospitalid:data.data.hospitalid})
            }else{
                if(data.code==401)
                    alert("Invalid User !")
                if(data.code==400)
                    alert("Session Lost !")
                    this.setState({logoinstatus:true})  
                Store.dispatch({...ACTION_HOSPETIAL_LOGOUT})                      
            }
        }); 
        console.log(this.props.Hopital)
    }
    
    render(){
      if(this.state.logoinstatus){
        return(
        <Navigate to={"/"}/> )
    }
        return(
<body style={{paddingTop:"50px"}}>
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav"  >
            <div class="container">
        
              <a class="navbar-brand js-scroll-trigger" href="\" style={{marginTop: "10px",marginLeft:"-65px",fontFamily: 'IBM Plex Sans'}} ><h4><i class="fa fa-user-plus" aria-hidden="true"></i> MEDICO</h4></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item" style={{marginRight: "40px"}}>
                    <a class="nav-link js-scroll-trigger" href="\"  style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>HOME</h6></a>
                  </li>
          
                  <li class="nav-item" style={{marginRight:"40px"}}>
                    <a class="nav-link js-scroll-trigger" href="\"  style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>ABOUT US</h6></a>
                  </li>
        
                  <li class="nav-item">
                  <button  onClick={this.logout} name="Login" class="btn btn-primary"> <a class="nav-link"  ><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a></button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>    
   <div class="container-fluid" style={{marginTop:"50px"}}>
    <h3 style = {{marginLeft: "40%", paddingBottom: "20px",fontFamily: 'IBM Plex Sans'}}> WELCOME </h3>
    <div class="row">
  <div class="col-md-4" style={{maxWidth:"25%",marginTop: "3%"}}>
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-dash-list" data-toggle="list" href="#list-dash" role="tab" aria-controls="home">Dashboard</a>
      <a class="list-group-item list-group-item-action" href="#list-doc" id="list-doc-list"  role="tab"    aria-controls="home" data-toggle="list">Doctor List</a>
      <a class="list-group-item list-group-item-action" href="#list-settings" id="list-adoc-list"  role="tab" data-toggle="list" aria-controls="home">Add Doctor</a>
      <a class="list-group-item list-group-item-action" href="#list-pat" id="list-pat-list"  role="tab" data-toggle="list" aria-controls="home">Patient List</a>
      <a class="list-group-item list-group-item-action" href="#list-app" id="list-app-list"  role="tab" data-toggle="list" aria-controls="home">Appointment Details</a>
      <a class="list-group-item list-group-item-action" href="#list-pres" id="list-pres-list"  role="tab" data-toggle="list" aria-controls="home">Prescription List</a>
      <a class="list-group-item list-group-item-action" href="#list-mes" id="list-mes-list"  role="tab" data-toggle="list" aria-controls="home">Queries</a>
      
    </div><br/>
  </div>
  <div class="col-md-8" style={{marginTop: "3%"}}>
    <div class="tab-content" id="nav-tabContent" style={{width: "950px"}}>

      <div class="tab-pane fade show active" id="list-dash" role="tabpanel" aria-labelledby="list-dash-list">
        <div class="container-fluid container-fullw bg-white" >
              <div class="row">
               <div class="col-sm-4">
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body">
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-users fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop: "5%"}}>Doctor List</h4>
                      
                      <p class="links cl-effect-1">
                        <a href="#list-settings" >
                          View Doctors
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4" style={{left: "-3%" }}>
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body" >
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-users fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop: "5%"}}>Patient List</h4>
                      
                      <p class="cl-effect-1">
                        <a href="#app-hist" onclick="clickDiv('#list-pat-list')">
                          View Patients
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body" >
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-paperclip fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop: "5%"}}>Appointment Details</h4>
                    
                      <p class="cl-effect-1">
                        <a href="#app-hist" onclick="clickDiv('#list-app-list')">
                          View Appointments
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                </div>

                <div class="row">
                <div class="col-sm-4" style={{left: "13%",marginTop: "5%"}}>
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body" >
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-list-ul fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop: "5%"}}>Prescription List</h4>
                    
                      <p class="cl-effect-1">
                        <a href="#list-pres" onclick="clickDiv('#list-pres-list')">
                          View Prescriptions
                        </a>
                      </p>
                    </div>
                  </div>
                </div>


                <div class="col-sm-4" style={{left: "18%",marginTop:" 5%"}}>
                  <div class="panel panel-white no-radius text-center">
                    <div class="panel-body" >
                      <span class="fa-stack fa-2x"> <i class="fa fa-square fa-stack-2x text-primary"></i> <i class="fa fa-plus fa-stack-1x fa-inverse"></i> </span>
                      <h4 class="StepTitle" style={{marginTop: "5%"}}>Manage Doctors</h4>
                    
                      <p class="cl-effect-1">
                        <a href="#app-hist" onclick="clickDiv('#list-adoc-list')">Add Doctors</a>

                        <a href="#app-hist" onclick="clickDiv('#list-ddoc-list')">
                          Delete Doctors
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                
              </div>
            </div>

      <AddlistDoctor Hosdata={this.props.Hopital.hospitalid}></AddlistDoctor>
     

    <div class="tab-pane fade" id="list-pat" role="tabpanel" aria-labelledby="list-pat-list">

       <div class="col-md-8">
      <form class="form-group" action="patientsearch.php" method="post">
        <div class="row">
        <div class="col-md-10"><input type="text" name="patient_contact" placeholder="Enter Contact" class = "form-control"/></div>
        <div class="col-md-2"><input type="submit" name="patient_search_submit" class="btn btn-primary" value="Search"/></div></div>
      </form>
    </div>
        
              <table class="table table-hover">
                <thead>
                  <tr>
                  <th scope="col">Patient ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Password</th>
                  </tr>
                </thead>
                <tbody>
                      <tr>
                        <td>$pid</td>
                        <td>$fname</td>
                        <td>$lname</td>
                        <td>$gender</td>
                        <td>$email</td>
                        <td>$contact</td>
                        <td>$password</td>
                      </tr>
                
                </tbody>
              </table>
        <br/>
      </div>


      <div class="tab-pane fade" id="list-pres" role="tabpanel" aria-labelledby="list-pres-list">

       <div class="col-md-8">
  
        <div class="row">
        
    
        
              <table class="table table-hover">
                <thead>
                  <tr>
                  <th scope="col">Doctor</th>
                    <th scope="col">Patient ID</th>
                    <th scope="col">Appointment ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Disease</th>
                    <th scope="col">Allergy</th>
                    <th scope="col">Prescription</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>
        <br/>
      </div>
      </div>
      </div>




      <div class="tab-pane fade" id="list-app" role="tabpanel" aria-labelledby="list-pat-list">

         <div class="col-md-8">
      <form class="form-group" action="appsearch.php" method="post">
        <div class="row">
        <div class="col-md-10"><input type="text" name="app_contact" placeholder="Enter Contact" class = "form-control"/></div>
        <div class="col-md-2"><input type="submit" name="app_search_submit" class="btn btn-primary" value="Search"/></div></div>
      </form>
    </div>
        
              <table class="table table-hover">
                <thead>
                  <tr>
                  <th scope="col">Appointment ID</th>
                  <th scope="col">Patient ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Consultancy Fees</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Appointment Status</th>
                  </tr>
                </thead>
                <tbody>
                  
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                    </td>
                      </tr>
                   
                </tbody>
              </table>
        <br/>
      </div>

<div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>

      


       <div class="tab-pane fade" id="list-attend" role="tabpanel" aria-labelledby="list-attend-list">...</div>

       <div class="tab-pane fade" id="list-mes" role="tabpanel" aria-labelledby="list-mes-list">

         <div class="col-md-8">
      <form class="form-group" action="messearch.php" method="post">
        <div class="row">
        <div class="col-md-10"><input type="text" name="mes_contact" placeholder="Enter Contact" class = "form-control"/></div>
        <div class="col-md-2"><input type="submit" name="mes_search_submit" class="btn btn-primary" value="Search"/></div></div>
      </form>
    </div>
        
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
               
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                </tbody>
              </table>
        <br/>
      </div>



    </div>
  </div>
</div>
   </div>
  </body>

        )
    }

}
export default connect(mapStateToProps,null)(Dashbord)