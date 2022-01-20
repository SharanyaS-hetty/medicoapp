import React from "react";
import { Navigate } from "react-router-dom";
import Store from "../Action/Store";
import {ACTION_PATIENT_LOGIN}  from '../Action/PatientAction'
export default class PatientLogin extends React.Component{

    constructor(){
        super()
         this.state = {
            loginto :false,
            backto:false,
            
        }
    }
     login = (event)=>{
        var ob = {
            email : this.email.value,
            password: this.password.value,
            loginstatus:false,
            regmsg:''

        }
        console.log(this.setState.loginstatus)
        
        fetch(`http://localhost:8080/Hospital/Patientlogin`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            console.log(data.hospitalid)
            this.setState({regmsg:data.msg})
            if(data.status)
            {
                 Store.dispatch({...ACTION_PATIENT_LOGIN,payload:{
                    patientid: data.data,
                    token:data.token

                }}) 
                this.setState({loginstatus:true})
            }else
            this.setState({loginmsg:data.msg})
            
        }); 
        console.log(this.state.loginstatus)
        console.log(ob)
        
        event.preventDefault()
    } 

    render(){
        if(this.state.loginstatus){
            return(
            <Navigate to={"/patientdashbord"}></Navigate>)
        }
        return(<>
         <body style={{background: "-webkit-linear-gradient(left, #3931af, #00c6ff)", backgroundSize: "cover"}}>

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
    <div class="container">

      <a class="navbar-brand js-scroll-trigger" href="/" style={{marginTop:" 10px",marginLeft:"-65px",fontFamily: 'IBM Plex Sans'}}><h4><i class="fa fa-user-plus" aria-hidden="true"></i> MEDICO</h4></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" style={{marginRight: "40px"}}>
            <a class="nav-link js-scroll-trigger" href="\" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>HOME</h6></a>
          </li>
  
          <li class="nav-item" style={{marginRight: "40px"}}>
            <a class="nav-link js-scroll-trigger" href="" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>ABOUT US</h6></a>
          </li>

          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="\" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>CONTACT</h6></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>



    <div class="container-fluid" style={{marginTop:"60px",marginBottom:"60px",color:"#34495E"}}>
      <div class="row">

         <div class="col-md-7" style={{paddingLeft: "180px"}}>
                 <div style={{webkitAnimation: "mover 2s infinite alternate",animation: "mover 1s infinite alternate"}}>
          <img src="images/ambulance1.png" alt="" style={{width: "20%",paddingLeft: "40px",marginTop: "150px",marginLeft: "45px",marginBottom:"15px"}}/>
      </div>

      <div style={{color: "white"}}>
            <h4 style={{fontFamily: 'IBM Plex Sans'}}> We are here for you!</h4>
          </div>

         </div>

         <div class="col-md-5" style={{marginTop:" 5%",right:" 5%"}}>
          <div class="card" style={{fontFamily: 'IBM Plex Sans'}}>
            <div class="card-body"style={{marginTop: "5%"}} >
              <center>
                <i class="fa fa-hospital-o fa-3x" aria-hidden="true" style={{color:"#0062cc"}}></i>
                <br/>
              <h3 style={{marginTop: "5%"}}>Patient Login</h3><br/>
              <form class="form-group" method="POST" action="func.php">
                <div class="row" style={{marginTop: "5%"}}>
                  <div class="col-md-4">
                  <label>Email-ID: </label></div>
                  <div class="col-md-8">

                      <input type="email" ref={c=>this.email=c} name="email" class="form-control" placeholder="enter email ID" required/>

                      </div><br/><br/>
                  <div class="col-md-4" style={{marginTop: "10%"}}><label>Password: </label></div>
                  <div class="col-md-8" style={{marginTop: "8%"}}><input type="password" ref={c=>this.password=c} class="form-control" name="password2" placeholder="enter password" required/></div><br/><br/><br/>
                  
                </div>
                <b style={{color:"red"}}>{this.state.regmsg}</b>
                <div class="row">
                
                <div class="col-md-4" style={{marginTop: "5%",paddingLeft: "150px"}}>
                </div>           
                  <div class="col-md-4" style={{marginTop: "5%",paddingLeft: "10px"}}>
                  <button type="submit"  onClick={this.login}   name="Login" class="btn btn-primary">Login</button>
                  </div> 
                </div>
              </form>
            </center>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
        </>


        )
    }

}