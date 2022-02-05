import React ,{} from 'react';
import "../Styles/Navbar.css";


function Navbar() {
  return <>
     
      
          <div >
          <nav class="nav navbar-expand-lg navbar-light bg-light p-3" id="nav1">
    <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
        <a class="navbar-brand" href="#">
       Physic<span class="middle">H</span>ealth
         </a>
       
    </div>
    <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="twitter.com">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Personal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Coach</a>
        </li>
      
      </ul>
      <button type="button" id="button1" class="btn btn-primary justify-content-end">Sign in</button>
  </nav>
         
          </div>
      
  </>;
}


export default Navbar;
