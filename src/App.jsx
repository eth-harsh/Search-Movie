import { useState } from "react";
import Header from "./Components/Header";
import SearchBox from "./Components/Search-box";
import MovieBox from "./Components/MovieBox";
import GetData from "./Components/GetData";
import GetmovieDetails from "./Components/GetMovieDetails";

function App() {
  const [query, setQuery] = useState("Interstellar");
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  //receiving movie id from MovieBox
  document.title = `Movie | ${movieDetails && movieDetails.Title}`;
  console.log(selectedID);

  return (
    <div className="app min-h-screen flex flex-col bg-zinc-950 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_5px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]">
      <main className="h-full w-full overflow-hidden  max-w-7xl mx-auto ">
        <Header></Header>
        <SearchBox setQuery={setQuery}></SearchBox>
        <MovieBox
          setSelectedID={setSelectedID}
          query={query}
          isLoading={isLoading}
          error={error}
          movies={movies}
          movieDetails={movieDetails}
        ></MovieBox>
        <GetData
          setIsLoading={setIsLoading}
          setMovie={setMovie}
          query={query}
          setError={setError}
        ></GetData>
        {selectedID && (
          <GetmovieDetails
            setMovieDetails={setMovieDetails}
            selectedID={selectedID}
          />
        )}{" "}
      </main>
    </div>
  );
}

export default App;
