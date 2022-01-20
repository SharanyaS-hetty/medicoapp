import React from "react";

export default class AppointmentTest extends React.Component{

    constructor(){
        super()
        this.state = {
            regmsg : '',
            loginmsg : '',
            loginstatus : false,
            hospetial:[],
            categories: [  
              {id: 1, value: "X-ray"}, 
              {id: 2, value: "MRI Scanning"},  
              {id: 3, value: "Scanning"},  
              {id: 4, value: "CT Scan"},  
              {id: 5, value: "Urine Analysis"},
              {id:6, value: "Thyroid"} ,
              {id: 7, value: "Blood test"},
              {id: 8, value: "ultrasound"},
              {id: 9, value: "General"} 
            ],  
            checkedItems: new Map()  
          };  
          
          this.handleChange = this.handleChange.bind(this);  
          this.handleSubmit = this.handleSubmit.bind(this);  
        }  
             
        handleChange(event) {  
              var isChecked = event.target.checked;  
              var item = event.target.value;  
                 
              this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));  
        }  
             
        handleSubmit(event) {  
          console.log(this.state);  
          event.preventDefault();  
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
             "testnames":this.testnames.value,
             "date":this.datev.value,
             "time":this.time.value,
             "statusMessage":"Pending"
         }
        //  fetch(`http://localhost:8080/Hospital/addAppointementTest`,{
        //      method : 'POST',
        //      headers:{
        //          "Content-Type" : "application/json"
        //      },
        //      body : JSON.stringify(ob)
        //  }).then(response=>response.json()).then(data=>{
        //      console.log(data)
        //      if(data.status)
        //      {
        //          this.setState({regmsg:data.msg})
        //      }
        //      else{
        //        this.setState({regmsg:data.msg})
        //      }
        //  });
         console.log(ob)
        event.preventDefault()
    }

    render(){
        return(
            <>
            <div class="tab-pane fade" id="Appointtest" role="tabpanel" aria-labelledby="Appointcon-list">
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <center><h4>Take a Appointment for Test </h4></center><br/>
              <form class="form-group" onSubmit={this.takeAppointment} >
                <div class="row">
                  
                    <div class="col-md-4">
                          <label for="spec">Hospital</label>
                        </div>
                        <div class="col-md-8">
                          <select name="spec" class="form-control" id="spec">
                                    <option value="" disabled selected>Select Hospital</option>
                               {this.state.hospetial.map(ob=>

                                     <option value={ob.hospitalid}>{ob.hospitalname} {ob.hospitalid}</option>
                               )}
                          </select>
                        </div>
                        <br/><br/>


                
                    
                  
                  
                  
                         <div class="col-md-4"><label for="testnames" >Test:</label></div>
                                <div class="col-md-8" >
                                 
             
             {  
               this.state.categories.map(item => (  
                  
                  <span> <label >    
                     <input  
                       type="checkbox"  
                       value={item.id}  
                       onChange={this.handleChange}  
                     /> {item.value} &nbsp; 
                   </label>  
                 </span>
               ))  
             }  
                
             <br/>  
           
           
                                </div>
                                <br/><br/> 

                               
                                
     
  

                  <div class="col-md-4"><label>Appointment Date</label></div>
                  <div class="col-md-8"><input type="date" class="form-control datepicker" name="appdate"/></div><br/><br/>

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



      
      <div class="tab-pane fade" id="testAppoint" role="tabpanel" aria-labelledby="list-pat-list">
        
              <table class="table table-hover">
                <thead>
                  <tr>
                    
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Test</th>
                    <th scope="col">Appointment Date</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                 
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                          <td>
                    </td>

                        <td></td>
                        </tr>
                       
                </tbody>
              </table>
        <br/>
      </div>
      </>
        )
    }

}
