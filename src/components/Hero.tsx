const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";

type Movie = {
  backdrop_path: string;
  title: string;
};

function Hero() {
  const MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie/popular";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    (async function getPopularMovies() {
      try {
        const res = await fetch(
          `${MOVIE_BASE_URL}?api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    })();
  }, []);

  return (
    <>
      {movie ? (
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          width={1920}
          height={1080}
          className="w-100"
        />
      ) : (
        <p className="text-dark text-center fw-semibold mt-4">Loading...</p>
      )}
    </>
  );
}

export default Hero;
