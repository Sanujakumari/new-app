import { useState } from "react";
import Button from '@mui/material/Button';
import { Counter } from "./Counter";

export function Msg({ name, pic, summary, summary1, watch, rating }) {
  const [show, setShow] = useState(false);
  //  const styles={display: show ? "block":"none"}
  return (

    <div className="movie-container">

      <img className="movie-poster" height="300" width="500" src={pic} alt={name} />
      <div className="movie-head">
        <h3 className="movie-name">{name}</h3>
        <p className="rating"> ⭐: {rating}</p>

      </div>
      <div className="movie-specs">
        {/* <button onClick={()=>setShow(!show)} className="movie-show-button">
              {show ? "Hide" : "Show"} description</button> */}
        <div className="details">
          <Button variant="contained" onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} description</Button>

          {/* <h4  style={styles}className="summary">{summary}</h4> */}
          {show ? <h4>{summary}</h4> : ""}

          {/* <Button variant="outlined" className="rating"  > ⭐: {rating}</Button> */}

        </div>
      </div>
      <Counter />
    </div>
  );
}
