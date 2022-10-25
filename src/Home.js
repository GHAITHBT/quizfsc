import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
export default function Home () {
  const navigate = useNavigate();
  const images = ["images/PFSC1.jpeg", "images/chef6.gif","images/FSC-1.png"];
  const delay = 2500;
  
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
  return (
	<div style={{backgroundImage: 
    "url('images/cheese3.jpg')",
           height:'100%',
           marginTop:'0px',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
           overflowX:"scroll",
           position:"absolute"}}>
      <table style={{width:"200vh",marginLeft:"50px"}}><tr><td>        <img alt="img1" src="images/fsc1.png" style={{width:"50%",height:"50px"}} ></img>
</td><td>        <div style={{fontSize:"20px",marginLeft:"45%",color:"white",backgroundColor:"grey"}}>AUTO-ÉVALUATION DES VALEURS DE L’ENTREPRISE</div>
</td></tr></table>
<hr style={{border: "2.5px solid #4682B4",width:"98%"}}></hr>
       <div className="slideshow">
      

      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)`,marginLeft:"10%" }}
      >
        {images.map((images, index) => (
          <div
            className="slide"
            key={index}>
            <img alt="img1" src={images} style={{width:"90%",height:"300px"}} ></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      
    </div>
    <div >
    <hr style={{border: "2.5px solid #4682B4",width:"98%"}}></hr>

      <table style={{width:"90%",marginLeft:"10%"}} >
        <tr><td>
          <div class="card text-white bg-dark mb-3" style={{width:"60%",cursor:"pointer"}}onClick={()=>navigate("/Info")}>
  <div class="card-header"><center> Auto-évaluation Food safety Culture</center></div>
  <div class="card-body">
  <img alt="img1" src="images/quiz.png" style={{width:"100%",height:"170px",cursor:"pointer"}} onClick={()=>navigate("/Info")} ></img>
  </div>
</div>
          
          
          
          </td>
        <td> 
        <div class="card text-white bg-dark mb-3" style={{width:"60%",cursor:"pointer"}}onClick={()=>navigate("/Password")}>
  <div class="card-header"><center> Statistique</center></div>
  <div class="card-body">
  <img alt="img1" src="images/stats.png" style={{width:"100%",height:"170px",cursor:"pointer"}}onClick={()=>navigate("/Password")} ></img>
   </div>
</div>
</td></tr>
      </table>
        <br></br>
       
        
  
    </div>

	</div>

  )
}