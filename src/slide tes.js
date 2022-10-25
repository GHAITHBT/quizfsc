import React from "react";
import "./App.css";
import {useNavigate} from "react-router-dom"



export default function Slideshow() {
    var navi = useNavigate();

    const images = ["images/PFSC1.jpeg", "images/chef.jpg"];
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
    <div className="slideshow">
        <div>AUTO-ÉVALUATION DES VALEURS DE L’ENTREPRISE</div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((images, index) => (
          <div
            className="slide"
            key={index}>
            <img alt="img1" src={images} style={{width:"100%",height:"550px"}} ></img>
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
       <button class="" onClick={()=>navi("/Info")}><span class="animate-charcter-yellow">Prenez le questionnaire</span></button><br></br>
        <button class=""> <span class="animate-charcter-yellow">Rapport</span></button>
    </div>
  );
}