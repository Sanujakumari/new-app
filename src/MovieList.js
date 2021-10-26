import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Msg } from "./Msg";

export function MovieList() {
  const INITIAL_MOVIES = [
    {
      name: "Drishyam",
      pic: "https://images.indianexpress.com/2021/02/Drishyam-2.jpg",
      summary: "Georgekutty, a cinema hall owner, thrives in life but is a changed man.However, when his family gets entangled in a criminal investigation, he must protect them from the legal institution yet again.",

      watch: "Amazon Prime Video.",
      rating: "8.4"
    },
    {
      name: "Karnan",
      pic: "https://i.ytimg.com/vi/EMidGvnOWR0/maxresdefault.jpg",
      summary: "A small village in Tamil Nadu is inhabited by people belonging to a lower caste.Karnan, a young man, is revolted by the inhuman treatment given to his villagers and fights for their rights.",

      watch: "Netflix",
      rating: "7.9"
    },
    {
      name: "Joji",
      pic: "https://english.cdn.zeenews.com/sites/default/files/2021/04/08/928390-joji.png",
      summary: "Joji, an engineering dropout, dreams of becoming rich without his family's help. However, things take a turn after an unexpected event in the family.",

      watch: "Amazon Prime Video",
      rating: "7.9"
    },
    {
      name: "Ram Prasad ki Tehrvi ",
      pic: "https://i.ytimg.com/vi/FuogqMTSp5M/maxresdefault.jpg",
      summary: "After Ramprasad's untimely demise, his family comes together under one roof for a period of thirteen days. During this time, their insecurities and problems come to the forefront",

      watch: "Netflix",
      rating: "7.1"
    },
    {
      name: "The White Tiger ",
      pic: "https://gumlet.assettype.com/barandbench%2F2021-01%2F1dbffda9-7b89-4957-8e2c-cfce2d9c7509%2F_White_Tiger_Poster_and_Delhi_HC__3_.jpg?rect=0%2C0%2C1600%2C900&auto=format%2Ccompress&fit=max&format=webp&w=400&dpr=2.6 ",
      summary: "A rich Indian family's ambitious driver uses his wit and cunning to escape from poverty and rise to the top as an entrepreneur.",
      watch: "Netflix",
      rating: "7.1"
    }
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <section>
      <div className="add-movie-form">
        <TextField value={name}
          onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
        <TextField value={poster}
          onChange={(event) => setPoster(event.target.value)} label="Poster url" variant="outlined" />
        <TextField value={rating}
          onChange={(event) => setRating(event.target.value)}
          label="Rating" variant="outlined" />
        <TextField value={summary}
          onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />



        <Button onClick={() => {
          console.log({ name, poster, rating, summary });
          const newMovie = { name, poster, rating, summary };
          setMovies([...movies, newMovie]);
          setName("");
          setPoster("");
          setRating("");
          setSummary("");
        }} variant="contained">Add movie</Button>

        {/* <button onClick={()=>{
              console.log({name,poster,rating,summary})
              const newMovie={name,poster,rating,summary}
            setMovies([...movies,newMovie]);
            setName("")
            setPoster("");
            setRating("");
            setSummary("");
            }}> Add movie</button>  */}
      </div>

      <div className="App">
        {movies.map((user, index) => (
          <Msg
            key={index}
            name={user.name}
            pic={user.pic}
            summary={user.summary}
            watch={user.watch}
            rating={user.rating} />))}
      </div>
    </section>
  );
}
