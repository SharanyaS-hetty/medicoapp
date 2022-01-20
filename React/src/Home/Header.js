import React from "react";

export default class Header extends React.Component{

    constructor(){
        super()
         this.state = {
            regmsg : '',
            loginmsg : ''
        }
    }
   

    render(){
        return(
            
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
            <div class="container">
        
              <a class="navbar-brand js-scroll-trigger" href="\" style={{marginTop: "10px",marginLeft:"-65px",fontFamily: 'IBM Plex Sans'}} ><h4><i class="fa fa-user-plus" aria-hidden="true"></i> MEDICO</h4></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item" style={{marginRight: "40px"}}>
                    <a class="nav-link js-scroll-trigger" href="" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>HOME</h6></a>
                  </li>
          
                  <li class="nav-item" style={{marginRight:"40px"}}>
                    <a class="nav-link js-scroll-trigger" href="\" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>ABOUT US</h6></a>
                  </li>
        
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="\" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6>CONTACT</h6></a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="\patientlogin" style={{color: "white",fontFamily: 'IBM Plex Sans'}}><h6> PATIENT LOGIN</h6></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>            

        )
    }

}