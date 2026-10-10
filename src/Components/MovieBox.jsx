import MovieDetails from "./MovieDetails";

export default function MovieBox({
  movies,
  query,
  isLoading,
  error,
  setSelectedID,
  movieDetails,
}) {
  return (
    <div
      className="movieBox p-4 grid grid-cols-1 mb-10 rounded-xl   border border-white/15 max-w-5xl mx-auto  w-[95%] md:grid-cols-[300px_1fr]   lg:grid-cols-[400px_1fr]  md:h-[600px]  sm:h-[650px]
       gap-3  bg-white/[0.03]  font-secondary"
    >
      <div className="movieLists scrollbar-hide overflow-y-auto h-full ">
        {isLoading && (
          <div className="text-5xl text-white text-center">
            <i className="fa-solid fa-spinner fa-spin-pulse"></i>
          </div>
        )}
        {error && <p className="text-red-500 text-2xl text-center">{error}</p>}
        {!isLoading && !error && query && (
          <MovieLists setSelectedID={setSelectedID} movies={movies} />
        )}{" "}
        {!query && !error && (
          <p className="text-white text-2xl text-center">Start Searching...</p>
        )}
      </div>
      <div className="movieDescription p-4 border border-white/15 rounded-xl bg-zinc-800  overflow-y-auto scrollbar-hide h-full">
        {movieDetails ? (
          <MovieDetails movieDetails={movieDetails} />
        ) : (
          <Description />
        )}
      </div>
    </div>
  );
}

// Movie List
function MovieLists({ movies, setSelectedID }) {
  return (
    <div className="movieLists  flex flex-col gap-3">
      {movies.map((movie) => (
        <Movie setSelectedID={setSelectedID} key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

// Individual movie item
function Movie({ movie, setSelectedID }) {
  return (
    <div
      onClick={() => setSelectedID(movie.imdbID)}
      className="flex cursor-pointer border border-white/15 rounded-xl p-3 transition-all duration-300 ease-out  hover:bg-white/5  gap-3 hover:border-red-500/60 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]  "
    >
      <div className="h-25 object-cover w-20">
        <img className="h-full w-full rounded-xl" src={movie.Poster} alt="" />
      </div>
      <div className=" flex flex-col gap-2">
        <div>
          <p className="font-semibold text-white text-m line-clamp-2">
            {movie.Title}
          </p>
        </div>
        <div>
          <p className="capitalize text-s text-zinc-400">{movie.Type}</p>
        </div>
        <div>
          <p className="text-s text-zinc-500">📅 {movie.Year}</p>
        </div>
      </div>
    </div>
  );
}

// Description default

function Description() {
  return (
    <div className="description h-full flex p-5 flex-col font-secondary text-white">
      <div className="mb-5">
        <p className="text-red-500 tracking-wider">ABOUT THE MOVIE</p>
        <h3 className="font-bold text-2xl md:text-4xl">
          Discover something new
        </h3>
      </div>
      <div>
        <p className="text-zinc-400">
          Explore movies, discover new stories, and find something worth
          watching. Browse through the collection and pick your next movie.
        </p>
      </div>
    </div>
  );
}
