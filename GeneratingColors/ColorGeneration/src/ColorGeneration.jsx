import { useState } from "react";
import "./ColorGeneration.css";
export default function ColorGeneration() {

    const[rgb,setrgb]=useState("");
    const[hex,setHex]=useState("");
    const[clickedRgb,setClickedRgb]=useState();
    
    let rgbgeneration=()=>{
        setrgb(`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
        setClickedRgb(true);

    }
    let hexgeneration=()=>{
          setHex('#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
          console.log(hex);
          setClickedRgb(false);



    }

let clicked=()=>{
    clickedRgb?document.body.style.backgroundColor=rgb:document.body.style.backgroundColor=hex;
}
  return (
    <div className="main">
        <div className="Buttons">
    <button onClick={rgbgeneration}>
      Rgb
    </button>
    <button onClick={hexgeneration}>
        Hex Color
    </button>
    <button onClick={clicked}>
        Generate
    </button>
    <br></br>
    </div>
    <div className="shows">
        <h1>Color Generation</h1>   
    </div>
    <div className="Hello">
        {clickedRgb?<h3>RGB:{rgb}</h3>:<h3>Hex:{hex}</h3>}
    </div>
  </div>
);}
