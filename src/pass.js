import React,{useState,useEffect} from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
export default function Pass () {
    const navigate = useNavigate();
    const [password,setPassword]=useState()
    function BT() {
       
      }
      useEffect(() => {
        var x = document.getElementById("BT");
       
        if(password=="12345678"){
            if (x.style.display === "none") {
              x.style.display = "block";
            } }
      }, [password]);
  return (
	
    <div  style={{backgroundImage: 
        "url('images/cheese2.jpg')",
               height:'110vh',
               marginTop:'-70px',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'}}>
   
   <div class="card text-white bg-dark mb-3 info_box" style={{width:"60%",cursor:"pointer"}}>
        <center ><h4 style={{color:"white"}}>Mot de Passe</h4></center>
  <div class="card-header"><center> Seuls les utilisateurs autorisés peuvent consulter les données</center></div>
  <div class="card-body">
  <input type="password" style={{ width: "100%",
  padding: "10px 10px",
  margin: "8px 0",
  boxSizing: "border-box"}}onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div class="card-footer"><div id="BT" style={{display: 'none' }}>
       <center> <Button variant="success"   onClick={()=>navigate("/Chart")}>Continuer</Button></center>
        </div></div>
</div>
	</div>

  )
}