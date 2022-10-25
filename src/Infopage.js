import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
export default function InfoPage () {
    const navigate = useNavigate();
    const current = new Date();

    function BT() {
        var x = document.getElementById("BT");
        if (x.style.display === "none") {
          x.style.display = "block";
        } 
      }
    
  return (
	<div>
    <div  style={{backgroundImage: 
 "url('images/cheese2.jpg')",
        height:'110vh',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
   
    <div class="card text-white bg-dark mb-3 info_box" style={{width:"60%",cursor:"pointer"}}>
        <center ><h4 style={{color:"white"}}>Quel est votre role dans la societe</h4></center>
  <div class="card-body">
  <input type="radio" value="Male" name="gender" onChange={(e) =>BT( localStorage.setItem('Poste',"chef"))}/> *************<br></br>
        <input type="radio" value="Female" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"chef-1"))}/> *******<br></br>
        <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"chef-2"))}/> ********<br></br>
  </div>
  <div class="card-footer">
       <center>  <div id="BT" style={{display: 'none' }}>
        <Button variant="success"   onClick={()=>navigate("/about")+localStorage.setItem("hours", current.getTime())+localStorage.setItem("minutes", current.getMinutes())}>Commencer</Button></div></center>
        </div>
</div>

	</div>
  </div>

  )
}