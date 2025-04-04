const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "../css/Hero.module.css";

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
        if (!res.ok) {
          throw new Error("Error while fetching hero image");
        }
        const data = await res.json();
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching movies:\n", error);
      }
    })();
  }, []);

  return (
    <>
      {movie ? (
        <div>
          <div
            className={`${styles.heroText} position-absolute ms-5 text-light`}
          >
            <h2 className={`${styles.tagLine} fw-semibold`}>
              Watch Only On HULU
            </h2>
            <h2 className={`${styles.MovieTitle} fw-bold`}>{movie?.title}</h2>
            <div className="d-flex gap-4">
              <button className="btn btn-light">
                <FaPlay /> Play
              </button>
              <button className="btn btn-outline-light bg-tranparent">
                Details
              </button>
            </div>
          </div>
          <img
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            width={1920}
            height={1080}
            className="w-100 img-fluid object-fit-cover"
          />
        </div>
      ) : (
        <p className="text-dark text-center fs-4 fw-semibold mt-4">
          Loading...
        </p>
      )}
    </>
  );
}

export default Hero;
