import React from "react";
import { Navigate } from 'react-router-dom';
import {ACTION_HOSPETIAL_LOGIN} from '../Action/HospitalAction'
import Store from '../Action/Store'
import Hospitalid from "../Gobaldata/hospitalid";
export default class Login extends React.Component{

    constructor(){
        super()
        this.state = {
            regmsg : '',
            loginmsg : '',
            loginstatus : false,
            hospetial:[]
        }
    }

    login = (event)=>{
        var ob = {
            hospitalid : this.lhospitalid.value,
            password: this.lpassword.value,
        }
        console.log(this.setState.loginstatus)
        fetch(`http://localhost:8080/Hospital/loginHospital`,{
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
                 Store.dispatch({...ACTION_HOSPETIAL_LOGIN,payload:{
                    hospitalid : data.hospitalid,
                    token:data.token

                }}) 
                this.setState({loginstatus:true})
            }else
            this.setState({loginmsg:data.msg})
            
        });;
        console.log(this.state.loginstatus)
        console.log(ob)
        
        event.preventDefault()
    }

    render(){
        if(this.state.loginstatus){
            return(
            <Navigate to={"/Dashbord"}/> )
        }
        return(
            <div class="tab-pane fade show" id="admin" role="tabpanel" aria-labelledby="profile-tab">
            <h3  class="register-heading">Hospital Login</h3>
            <form method="post"  onSubmit={this.login} action="">
            <div class="row register-form">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" class="form-control" ref={c=>this.lhospitalid=c} name="hospitalid" id="hospitalid" placeholder="Hospital ID *" required/>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input ref={c=>this.lpassword=c} type="password" class="form-control" placeholder="Password *" id="password" name="password"  required/>
                    </div>
                    
                    <input type="submit" class="btnRegister" name="adsub" value="Login"/>
                </div>
                <b style={{color:"red"}}>{this.state.regmsg}</b>
            </div>
        </form>
        </div>
        )
    }

}