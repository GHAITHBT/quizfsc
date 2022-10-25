import React, { Component }  from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'

import { useState,useEffect } from "react";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Chart=()=> {
  const [Data, setData] = useState([]);
  const [DataAR, setDataAR] = useState([]);
  const [ViewPostfour, SetPostShowfour] = useState(false)
    const handlePostShowfour = () => { SetPostShowfour(true) }
    const hanldePostClosefour = () => { SetPostShowfour(false) }
  var nbps10=0
  var nbps18=0
  var nbp20=0
  var nbpi10=0
var  nbp1=0
var nbp2=0
var nbp3=0
  const GetEmployeeData = () => {
    //here we will get all employee data
    const url = 'http://localhost:5001/data'
    axios.get(url)
    
        .then(response => {
            setData(response.data)
            console.log(Data)
            response.data.forEach(element => {
    if(element.Poste=="chef"){
      nbp1++
    }
    if(element.Poste=="chef-1"){
      nbp2++
    }
    if(element.Poste=="chef-2"){ 
      nbp3++
    }
        })
      })
        .catch(err => {
            console.log(err)
        })
        nbPO()
    }
    
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.fournisseur),
    datasets: [{
        label: "Quantité stock",
        data: Data.map((data) => data.Quantité),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const data = {
    labels: ["p1","p2","p3"], // first change
    datasets: [{
      label: 'Quantité Stock par Fournisseur',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#D35400",
        "#F1C40F ",
        "#34495E",
        "#2a71d0",],
      borderColor: 'blue',
      pointHitRadius: 20,
      data:[nbp1,nbp2,nbp3] // second change
    }]
  }; 
  const dataAR = {
    labels: DataAR.map(o => o.date), // first change
    datasets: [{
      label: 'Dinar',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",],
      borderColor: 'rgb(41, 33, 116,0.5)',
      pointHitRadius: 20,
      data: DataAR.map(o => parseInt(o.Montant)) // second change
    }]
  };
  function nbPO  () {
  Data.forEach(element => {
    if(element.Poste=="chef"){
      nbp1=nbp1+1
    }
    if(element.Poste=="chef-1"){
      nbp2=nbp2+1
    }
    if(element.Poste=="chef-2"){ 
      nbp3=nbp3+1
    }
    if(element.score>10){
nbps10++
    }
    if(element.score>18){
      nbps18++
          }
          if(element.score==20){
            nbp20++
                }
                if(element.score>10){
                  nbpi10++
                      }
    
  });
  const data = {
    labels: ["p1","p2","p3"], // first change
    datasets: [{
      label: 'nombre participants selon leurs poste de travaille',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#D35400",
        "#F1C40F ",
        "#34495E",
        "#2a71d0",],
      borderColor: 'blue',
      pointHitRadius: 20,
      data:[nbp1,nbp2,nbp3] // second change
    }]
  }; 
  return(
    <div>           <PieChart chartData={data}></PieChart>
    <BarChart chartData={data}></BarChart>

    </div>
  )

}
function nbPOS  () {
  Data.forEach(element => {
    
    if(element.score>=10){
nbps10++
    }
    if(element.score>=18){
      nbps18++
          }
          if(element.score==20){
            nbp20++
                }
                if(element.score<10){
                  nbpi10++
                      }
    
  });
  const data = {
    labels: ["<10",">=10",">=18","=20"], // first change
    datasets: [{
      label: 'nombre participants selon leurs poste de travaille',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#D35400",
        "#F1C40F ",
        "#34495E",
        "#2a71d0",],
      pointHitRadius: 20,
      data:[nbpi10,nbps10,nbps18,nbp20] // second change
    }]
  }; 
  return(
    <div style={{width:"300px",height:"300px"}}>           <PieChart chartData={data}></PieChart>
    <BarChart chartData={data}></BarChart>

    </div>
  )

}
  useEffect(() => {
    GetEmployeeData();
//nbPO()
   // GetFournisseurData()
}, [])
const current = new Date();

const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
  return (
    
    <div >
      <table style={{width:"120%",marginLeft:"50px"}}><tr><td>        <img alt="img1" src="images/fsc1.png" style={{width:"50%",height:"50px"}} ></img>
</td><td>        <div style={{fontSize:"20px",marginLeft:"30%",color:"black",backgroundColor:"white"}}>AUTO-ÉVALUATION DES VALEURS DE L’ENTREPRISE</div>
</td></tr></table>
<hr></hr>
<h3 style={{backgroundColor:"white"}}>Nombre de participants {Data.length}</h3>
<Table className=' responsivetable table-striped table-hover table-bordered'><tr>
  <td style={{'height': `700px` , 'overflow':'Scroll', 'display': 'block'}}><Table className=' responsivetable table-striped table-hover table-bordered'>
  <tr><th><center>Poste</center></th>
<th colSpan={2}><center>Score</center></th>
<th><center>Temps</center></th>  
   </tr>
   <tbody >
                            {Data?.map((item) =>
                                <tr >
                                  <td style={{border:"1px"}}>{item.Poste}</td>
                                    <td>{item.score}</td>
                                    <td> {(item.score / 20) * 100}%</td>
                                    <td>{item.score}</td></tr>
                                    )}
                                    </tbody>
  
  
  
  
  </Table></td><td>{nbPOS()}</td></tr></Table>

      

<div className='model-box-view'>
<Modal
    show={ViewPostfour}
    onHide={hanldePostClosefour}
    backdrop="static"
    keyboard={false}
>
    <Modal.Header closeButton>
        <Modal.Title>Ajouter Fournisseur</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div>
           {nbPO()}
        </div>
    </Modal.Body>
    <Modal.Footer>
    <Button variant='warning' onClick={hanldePostClosefour}style={{marginTop:"25px"}}>Fermer</Button>
    </Modal.Footer>
</Modal>
</div>
</div>

  );
}

