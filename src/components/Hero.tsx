const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect } from "react";
console.log("API Key from .env:", API_KEY);

function Hero() {
  const MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie/popular";
  // const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  console.log("API Key:", API_KEY); // Debugging step

  useEffect(() => {
    if (!API_KEY) {
      console.error(
        "API Key is missing. Check your .env file and restart Vite."
      );
      return;
    }

    (async function getPopularMovies() {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGU3ZDc5MTZkZThmZGZjMTJmMTVjYTUzZTE0NTIxYyIsIm5iZiI6MTc0MzM1OTAxNC4wNCwic3ViIjoiNjdlOThjMjZiNTk5N2EwMjYxZTU0MWEyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fU5nrIeHiVlKWpQ6XcP9KTWwuaPP-GbFFXa1re04Dpk",
          },
        };

        fetch(url, options)
          .then((res) => res.json())
          .then((json) => console.log(json))
          .catch((err) => console.error(err));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    })();
  }, []);

  // const [movieList, setMovieList] = useState([]);
  return <></>;
}

export default Hero;
