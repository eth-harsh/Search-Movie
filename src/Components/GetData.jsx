import { useEffect } from "react";
const KEY = "575010f9";

export default function Data({ query, setMovie, setIsLoading, setError }) {
  useEffect(
    function () {
      const controller = new AbortController();

      if (!query) {
        setError("");
        setMovie([]);
        return;
      }
      async function getData() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            {
              signal: controller.signal,
            },
          );
          if (!response.ok) throw new Error("Something Went Wrong...");
          const data = await response.json();
          if (data.Response === "False") throw new Error("Movie Not Found");
          console.log(data);
          setMovie(data.Search || []);
        } catch (err) {
          if (err.name === "AbortError") return;
          setError(err.message);
          setMovie([]);
        } finally {
          setIsLoading(false);
        }
      }
      getData();
      return function () {
        controller.abort();
      };
    },
    [query],
  );
}
