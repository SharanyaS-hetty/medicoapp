import React from "react";

export default class Appointmentcon extends React.Component{

    constructor(){
        super()
        this.state = {
            regmsg : '',
            loginmsg : '',
            loginstatus : false,
            hospetial:[],
        }
    }

    componentDidMount()
    {
     fetch(`http://localhost:8080/Hospital/findHospital`)
     .then(response=>response.json()).then(data=>{
       console.log(data)
       if(data.status)
       this.setState({hospetial:data.data})

        }); 
        console.log(this.props.patientidata.name)
        console.log(this.props.patientidata.patid)
    }
    takeAppointment=(event)=>{
        var ob={
            "hospitalid":this.hospetialid.value,
            "patid":this.props.patientidata.patid,
            "pname":this.props.patientidata.name,
            "specialization":this.Specialization.value,
            "date":this.datev.value,
            "time":this.time.value,
            "statusMessage":"Pending"
        }
        fetch(`http://localhost:8080/Hospital/addAppointementcon`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            if(data.status)
            {
                this.setState({regmsg:data.msg})
            }
            else{
              this.setState({regmsg:data.msg})
            }
        });
        console.log(ob)
       event.preventDefault()
    }



    render(){
        return(
            <>
            <div class="tab-pane fade" id="Appointcon" role="tabpanel" aria-labelledby="Appointcon-list">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <center><h4>Take a Appointment for Consultancy</h4></center><br/>
              <form class="form-group" onSubmit={this.takeAppointment} method="post">
                <div class="row">

                <div class="col-md-4">
                          <label for="spec">Hospital</label>
                        </div>
                        <div class="col-md-8">
                          <select name="spec" ref={c=>this.hospetialid=c} class="form-control" id="spec" >
                                    <option value="" disabled selected>Select Hospital</option>
                               {this.state.hospetial.map(ob=>

                                     <option value={ob.hospitalid}> {ob.hospitalname} {ob.address}</option>
                               )}
                          </select>
                        </div>
                        <br/><br/>

              <div class="col-md-4"><label for="Specialization">Specialization:</label></div>
                <div class="col-md-8">
                <select name="special" ref={c=>this.Specialization=c} class="form-control" id="special" required="required">
                          <option value="head" name="spec" disabled selected>Select Specialization</option>
                          <option value="General" name="spec">General</option>
                          <option value="Cardiologist" name="spec">Cardiologist</option>
                          <option value="Neurologist" name="spec">Neurologist</option>
                          <option value="Pediatrician" name="spec">Pediatrician</option>
                        </select>
                  </div><br/><br/> 

                  <div class="col-md-4"><label>Appointment Date</label></div>
                  <div class="col-md-8"><input type="date" ref={c=>this.datev=c} class="form-control datepicker" min={new Date().toISOString().split('T')[0]} name="appdate"/></div><br/><br/>

                  <div class="col-md-4"><label>Appointment Time</label></div>
                  <div class="col-md-8">
                    <select name="apptime" ref={c=>this.time=c} class="form-control" id="apptime" required="required">
                      <option value="" disabled selected>Select Time</option>
                      <option value="09:00AM To 12:00PM">09:00AM To 12:00PM </option>
                      <option value="12:00PM To 03:00PM">12:00PM To 03:00PM</option>
                      <option value="03:00PM To 06:00PM">03:00PM To 06:00PM</option>
                      <option value="06:00PM To 08:00PM">06:00PM To 08:00PM</option>
                    </select>
                  </div><br/><br/>

                  <div class="col-md-4">
                    <input type="submit" name="app-submit" value="Take Appointment" class="btn btn-primary" id="inputbtn"/>
                  </div>
                  
                  <div class="col-md-8"></div>     
                  <b style={{color:"red"}}>{this.state.regmsg}</b>             
                </div>
              </form>
            </div>
          </div>
        </div><br/>
      </div>
      <div class="tab-pane fade" id="appointmentStutes" role="tabpanel" aria-labelledby="list-pres-list">
        
              <table class="table table-hover">
                <thead>
                  <tr>
                    
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Appointment ID</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Diseases</th>
                    <th scope="col">Allergies</th>
                    <th scope="col">Prescriptions</th>
                    <th scope="col">Bill Payment</th>
                  </tr>
                </thead>
                
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                       </tr>
                          
              </table>
        <br/>
      </div>
      </>
        )
    }

}
