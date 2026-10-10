import { useEffect } from "react";
const KEY = "575010f9";
export default function getMovieDetails({ selectedID, setMovieDetails }) {
  useEffect(
    function () {
      const controller = new AbortController();

      async function getDetails() {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();

        console.log(data);
        setMovieDetails(data);
      }
      getDetails();
      return function () {
        controller.abort();
      };
    },
    [selectedID],
  );
}
