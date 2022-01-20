import React from "react";
import Login from "../Login/Login";

import Patient from "../Patient/Patient";
import Register from "../Register/Register";
import Header from "./Header";
import Dashbord from "../Dashbord/Dashbord";
//import Register from "../Register/Register";

export default class Home extends React.Component{
    constructor(){
        super()
         this.state = {
            regmsg : '',
            loginmsg : '',
            loginstatus:false
        }
    }
    
    login = (event)=>{
        var ob = {
            hospitalid : this.lhospitalid.value,
            password: this.lpassword.value,
        }
        fetch(`http://localhost:8082/Hospital/loginHospital`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({regmsg:data.data})
            this.setState({loginstatus:true})
        });;
        console.log(ob)
        event.preventDefault()
    }

    render(){
        
        return(
            <div>
                <Header></Header>

        <div class="container register" style={{fontFamily: 'IBM Plex Sans'}}>
                <div class="row">
                    <div class="col-md-3 register-left" style={{marginTop:" 10% ",right:" 5%"}}>
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                       
                    </div>
                    <div class="col-md-9 register-right" style={{marginTop:" 40px" ,left: "80px"}}>
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist" style={{width: "60%"}}>
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Patient</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hosptial Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#admin" role="tab" aria-controls="admin" aria-selected="false">Hosptial Login</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <Patient></Patient>
                            <Register></Register>
                            <Login></Login>

                        </div>
                    </div>
                </div>

            </div>

            </div>
        )
    }

}