import React from "react";

export default class ListDoctors extends React.Component{

    constructor(){
        super()
         this.state = {
            regmsg : '',
            Doctor:[]
        }
    }
    componentDidMount ()
  {
    // GET URL
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
   

    render(){
        return(
           
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
          </tr>
        </thead>
        <tbody>
        {this.state.Doctor.map((ob,index)=>{
            return <tr key={index}>
              <td>{index+1}</td>
              <td>{ob.name}</td>
              <td>{ob.phone}</td>
              <td>{ob.Specialization}</td>
            </tr>
          })}
        </tbody>
      </table>
<br/>
</div>



        )
    }

}