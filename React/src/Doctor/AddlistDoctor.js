import React from "react";

export default class AddlistDoctor extends React.Component{

    constructor(){
        super()
         this.state = {
            regmsg : '',
            sucgmsg : '',
            Doctor:[]
        }
    }
    componentDidMount ()
  {
    // GET URL
    console.log(this.props.Hosdata)
    fetch(`http://localhost:8080/Hospital/findDoctors/${this.props.Hosdata}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        this.setState({Doctor:data.data})
    })
    .catch(err=>{
      alert("Something Wrong !")
    })
  }
   onTimeChange=(timedata)=> {
    var timeSplit = timedata.value.split(':'),
      hours,
      minutes,
      meridian;
    hours = timeSplit[0];
    minutes = timeSplit[1];
    if (hours > 12) {
      meridian = 'PM';
      hours -= 12;
    } else if (hours < 12) {
      meridian = 'AM';
      if (hours == 0) {
        hours = 12;
      }
    } else {
      meridian = 'PM';
    }
    var time=hours + ':' + minutes + ' ' + meridian;
    console.log(time)
    return time;
  }
  addDoctor=(event)=>{

      var ob = {

        hospitalid:this.props.Hosdata,
        name:this.docname.value,
        phone:this.phone.value,
        logintime: this.onTimeChange (this.logintime),
        logouttime:  this.onTimeChange (this.logouttime),
        specialization: this.Specialization.value
      }
      fetch(`http://localhost:8080/Hospital/addDocter`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            if(data.status){
            this.setState({Doctor:[...this.state.Doctor,ob]})
            this.setState({sucgmsg:data.msg})
            this.setState({regmsg:''})
            }
            else{
              this.setState({regmsg:data.msg})
            }
        });;
      console.log(ob)
      event.preventDefault()
  }
    render(){
        return(
            <>
            <div class="tab-pane fade" id="list-doc" role="tabpanel" aria-labelledby="list-home-list">
              <div class="col-md-8">
        <form class="form-group" action="doctorsearch.php" method="post">
        <div class="row">
        <div class="col-md-10"><input type="text" name="doctor_contact" placeholder="Enter Email ID" class = "form-control"/></div>
        <div class="col-md-2"><input type="submit" name="doctor_search_submit" class="btn btn-primary" value="Search"/></div></div>
        </form>
        </div>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">SL No.</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Specialization</th>
                    <th scope="col">Login Time</th>
                    <th scope="col">Logout Time</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.Doctor.map((ob,index)=>{
                    return <tr key={index}>
                      <td>{index+1}</td>
                      <td>{ob.name}</td>
                      <td>{ob.phone}</td>
                      <td>{ob.specialization}</td>
                      <td>{ob.logintime}</td>
                      <td>{ob.logouttime}</td>
                      </tr>
                  })}
                </tbody>
              </table>
        <br/>
        </div> 
        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <form class="form-group" onSubmit={this.addDoctor} method="">
                      <div class="row">
                              <div class="col-md-4"><label>Doctor Name:</label></div>
                              <div class="col-md-8"><input type="text" class="form-control" name="doctor" ref={c=>this.docname=c} required/></div><br/><br/>
                              <div class="col-md-4"><label>Specialization:</label></div>
                              <div class="col-md-8">
                               <select name="special" ref={c=>this.Specialization=c} class="form-control" id="special" required="required">
                                  <option value="head" name="spec" disabled selected>Select Specialization</option>
                                  <option value="General" name="spec">General</option>
                                  <option value="Cardiologist" name="spec">Cardiologist</option>
                                  <option value="Neurologist" name="spec">Neurologist</option>
                                  <option value="Pediatrician" name="spec">Pediatrician</option>
                                </select>
                                </div><br/><br/>
                              <div class="col-md-4"><label>Phone</label></div>
                              <div class="col-md-8"><input type="tel" minlength="10" maxlength="10" ref={c=>this.phone=c} class="form-control"   name="phone" id="phone" required/></div><br/><br/>
                              <div class="col-md-4"><label>login Time</label></div>
                              <div class="col-md-8"  id='cpass'><input type="time" ref={c=>this.logintime=c} class="form-control"  name="logintime" id="logintime" required/><span id='message'></span> </div><br/><br/>
                              <div class="col-md-4"><label>logout Time</label></div>
                              <div class="col-md-8"  id='cpass'><input type="time"ref={c=>this.logouttime=c}  class="form-control"  name="logouttime" id="logouttime" required/><span id='message'></span> </div><br/><br/>
                            
                        </div>
                      <input type="submit" name="docsub" value="Add Doctor" class="btn btn-primary"/>
                    </form>
                    <b style={{color:"red"}}>{this.state.regmsg}</b>
                    <b style={{color:"green"}}>{this.state.sucgmsg}</b>
                  </div>

        </>
        )
    }

}