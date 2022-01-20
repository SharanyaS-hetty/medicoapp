import React from "react";
import { Link, Navigate } from "react-router-dom";

export default class Patient extends React.Component{

    constructor(){
        super()
         this.state = {
            plogin:false,
            loginmsg : '',
            message:''
        }
    }

    register=(event)=>{
        var ob={
            name:this.name.value+" "+ this.lname.value,
            age:this.age.value,
            gender:this.gender.value,
            phoneno:this.phone.value,
            email:this.email.value,
            password:this.password.value,
            status:true
        }
        fetch(`http://localhost:8080/Hospital/PatientRegisterd`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            if(data.status){
            this.setState({regmsg:data.msg})
            this.setState({plogin:true})
            }else{
                this.setState({regmsg:data.msg})
            }
            
        });;
       console.log(ob);
       event.preventDefault()
    }

    render(){
        if(this.state.plogin){
            return(<Navigate to={"/patientlogin"}/>)
        }
        return(
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Register as Patient</h3>
                                <form method="post" onSubmit={this.register} >
                                <div class="row register-form">
                                    
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" ref={c=>this.name=c}  placeholder="First Name *" name="fname"  required/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" ref={c=>this.email=c}  placeholder="Your Email *" name="email"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" ref={c=>this.password=c}  placeholder="Password *" id="password" name="password" required/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <div class="maxl">
                                            <select name="special" ref={c=>this.gender=c} class="form-control" id="special" required="required">
                                <option value="" name="spec" disabled selected>Gender</option>
                                <option value="Male" name="spec">Male</option>
                                <option value="Female" name="spec">Female</option>

                                              </select>
                                              </div>
                                            <Link to={"/patientlogin"}>Already have an account?</Link>
                                        </div>
                                    </div>
                                
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" ref={c=>this.lname=c} placeholder="Last Name *" name="lname" onkeydown="return alphaOnly(event);" required/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <input type="tel" minlength="10" maxlength="10" ref={c=>this.phone=c} name="contact" class="form-control" placeholder="Your Phone *"  />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" ref={c=>this.cpassword=c} id="cpassword" placeholder="Confirm Password *" name="cpassword"  onkeyup='check();' required/><span id='message'></span>
                                        </div>
                                        <div class="form-group">
                                            <input type="number" class="form-control" ref={c=>this.age=c} id="cpassword" placeholder="Age" name="cpassword"  onkeyup='check();' required/><span id='message'></span>
                                        </div>
                                        <b style={{color:"red"}}>{this.state.regmsg}</b>
                                        <input type="submit" class="btnRegister"  name="patsub1" value="Register"/>
                                    </div>

                                </div>
                            </form>
                            </div>
        )
    }

}