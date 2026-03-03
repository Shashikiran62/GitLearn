import { useState } from "react"

export default function MyColor(){
    const[rgb,setrgb]=useState();
    const[hex,sethex]=useState();
    const[clickedrgb,setClickedRgb]=useState();

    let handlergb=()=>{
        setrgb(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
        setClickedRgb(true);
    }
    let handlehex=()=>{
        sethex("#"+ Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,'0'))
        setClickedRgb(false);
    }
    let generate=()=>{
        clickedrgb?document.body.style.backgroundColor=rgb:document.body.style.backgroundColor=hex;
    }
    return(
        <div>
            <div>
                <button onClick={handlergb}>RGB</button>
                <button onClick={handlehex}>Hex</button>
                <button onClick={generate}>Generate</button>
            </div>
        </div>
    )
}