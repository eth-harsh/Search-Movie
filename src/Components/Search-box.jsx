export default function SearchBox({ setQuery }) {
  function handleSubmission(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmission}
      className="font-secondary mb-10 flex flex-col md:flex-row gap-4 w-[95%] max-w-4xl mx-auto items-center justify-around text-amber-50"
    >
      <h2 className=" font-primary text-xl md:text-2xl  ">
        Enter Movie Name To Search
      </h2>
      <div className="flex-1 flex items-center relative">
        <input
          onChange={(e) => setQuery(e.target.value.trim())}
          className="border font-secondary text-xl font-medium p-2.5 rounded-xl w-full   outline-none  border-white/15"
          type="text"
          placeholder="Search Movies..."
        />
        <button className="font-primary absolute bg-red-500 p-2 right-2  p rounded-xl cursor-pointer">
          Search
        </button>
      </div>
    </form>
  );
}
