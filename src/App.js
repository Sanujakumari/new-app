import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { MovieList } from './MovieList';
import { ColorBox } from './ColorBox';




function App(){
  

  return(
    //<NewMovieList />
  < MovieList />
  //<ColorList />
  )
  }
  
  function ColorList(){
    const [color,setColor]=useState("orange");
    const styles={ backgroundColor: color, color:"black"};
    const INITIAL_COLORS=["crimson","orange","green"];
    const [colors,setColors]=useState(INITIAL_COLORS);


    return (
      <div>
         <input 
      value={color}
      style={styles}
      onChange={(event)=>setColor(event.target.value)}
      placeholder="Enter a color"
      />
      <button onClick={()=>setColors([...colors,color])}>Add color</button>
      {colors.map((clr,index)=>(
        <ColorBox key={index} color ={clr}/>
      ))}
      </div>
     
    );
  }
export default App;

