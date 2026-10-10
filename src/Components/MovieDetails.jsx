import Star from "./Star";
export default function MovieDetails({ movieDetails }) {
  return (
    <div className="movieDetails font-secondary flex flex-col gap-4">
      <div className="grid grid-cols-[auto_1fr] gap-4 text-left">
        <div className="image inline-block h-55 w-40 cursor-pointer ">
          <img
            className="rounded-xl h-full w-full object-cover border  border-white/15"
            src={movieDetails.Poster}
            alt={movieDetails.Title}
          />
        </div>
        <div className="summary">
          <div className="flex flex-col gap-2">
            <p className="font-primary text-sm text-red-500 font-lighter tracking-wider">
              MOVIE DETAILS
            </p>
            <div className="title">
              <p className="text-3xl capitalize text-white font-bold">
                {movieDetails.Title}
              </p>
            </div>
            <div className="extra">
              <span className="text-zinc-400">
                {movieDetails.Year} • {movieDetails.Runtime} •{" "}
                {movieDetails.Genre}
              </span>
              <div className="mt-3 text-white">
                ⭐ {movieDetails.imdbRating}{" "}
                <span className="text-zinc-400 text-sm">/ 10 IMDb</span>
              </div>
              <div>
                <Star></Star>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailedBreakdown ">
        <div className="plot p-4 bg-white/[0.03]  border border-white/15 rounded-xl ">
          <p className="text-red-500 font-primary">PLOT</p>
          <p className="text-white leading-8">{movieDetails.Plot}</p>
        </div>
        <div className="grid my-4 gap-3 grid-cols-2 grid-rows-3">
          <div className="p-2 border rounded-xl bg-white/[0.03] border-white/15">
            <p className="text-zinc-400 text-sm tracking-wide">RELEASED</p>
            <span className="text-white">{movieDetails.Released}</span>
          </div>
          <div className="p-2 border rounded-xl bg-white/[0.03] border-white/15">
            <p className="text-zinc-400 text-sm tracking-wide">RUNTIME</p>
            <span className="text-white uppercase">{movieDetails.Runtime}</span>
          </div>
          <div className="p-2 border rounded-xl bg-white/[0.03] border-white/15">
            <p className="text-zinc-400 uppercase text-sm tracking-wide">
              Genre
            </p>
            <span className="text-white ">{movieDetails.Genre}</span>
          </div>
          <div className="p-2 border rounded-xl bg-white/[0.03] border-white/15">
            <p className="text-zinc-400 text-sm tracking-wide">ACTORS</p>
            <span className="text-white">{movieDetails.Actors}</span>
          </div>
          <div className="p-2 border rounded-xl bg-white/[0.03] border-white/15">
            <p className="text-zinc-400 text-sm tracking-wide">DIRECTOR</p>
            <span className="text-white">{movieDetails.Director}</span>
          </div>
          <div className="p-2 border rounded-xl bg-white/[0.03] border-white/15">
            <p className="text-zinc-400 text-sm tracking-wide">WRITER</p>
            <span className="text-white">{movieDetails.Writer}</span>
          </div>
        </div>
        <div className="awards">
          <div className=" border border-red-400 shadow-[0_0_30px_5px_rgba(239,68,68,0.12)] rounded-xl bg p-4">
            <p className="text-red-500 font-primary">AWARDS</p>
            <span className="text-white">{movieDetails.Awards}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
