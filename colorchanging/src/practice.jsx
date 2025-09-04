import React from "react";
import { useState } from "react";


function ChangeBG(){
    const [color,setcolor]=useState("white")
      const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "cyan", "teal", "lime"];
    const randomIndex = Math.floor(Math.random() * colors.length);    
    return colors[randomIndex];
  };


    return(
        <div className="flex flex-row justify-center items-center duration-300 h-screen w-full " style={{backgroundColor:color}}>
            <button className="p-4 m-2 rounded-xl bg-red-500" onClick={()=>setcolor("red")}>Red</button>
            <button className="p-4 m-2 rounded-xl bg-green-500" onClick={()=>setcolor("green")}>green</button>
            <button className="p-4 m-2 rounded-xl bg-cyan-400" onClick={()=>setcolor("cyan")}>cyan</button>
            <button className="p-4 m-2 rounded-xl  bg-amber-300 " onClick={()=>setcolor(getRandomColor)} >Random</button>
            <button className="p-4 m-2 rounded-xl  bg-black text-white"onClick={()=>setcolor("white")} >reset</button>

            
        </div>
    )
}
export default ChangeBG