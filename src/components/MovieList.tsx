import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
const API_KEY = import.meta.env.VITE_API_KEY;

type MovieListProps = {
  id: number;
};

function MovieList({ id }: MovieListProps) {
  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

  type Movie = {
    id: number;
    backdrop_path: string;
    title: string;
  };

  const [movieList, setMovieList] = useState<Movie[]>();

  useEffect(() => {
    (async function getMovieByGenresId(id: number) {
      try {
        const res = await fetch(
          `${BASE_URL}?api_key=${API_KEY}&with_genres=${id}`
        );
        if (!res.ok) {
          throw new Error("Error while fetching genres !!!");
        }
        const data = await res.json();
        setMovieList(data.results);
        console.log("data 2", data.results);
      } catch (error) {
        console.error("Fetch Error: \n", error);
      }
    })(id);
  }, []);

  return (
    <div className="d-flex">
      {movieList &&
        movieList.map((item: Movie) => <MovieCard key={item.id} item={item} />)}
    </div>
  );
}

export default MovieList;
