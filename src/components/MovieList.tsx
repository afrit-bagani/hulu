import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const API_KEY = import.meta.env.VITE_API_KEY;
import styles from "../css/MovieList.module.css";

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

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const itemPerPage: number = 4;

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
      } catch (error) {
        console.error("Fetch Error: \n", error);
      }
    })(id);
  }, []);

  function handleNext(): void {
    if (startIndex + itemPerPage < movieList?.length) {
      setStartIndex(startIndex + itemPerPage);
    }
  }
  function handlePrev(): void {
    if (startIndex - itemPerPage >= 0) {
      setStartIndex(startIndex - itemPerPage);
    }
  }

  return (
    <div className="d-flex align-items-center w-100">
      <IoIosArrowBack
        onClick={handlePrev}
        className={`${styles.slider} text-light bg-black rounded-circle cursor-pointer z-3 p-1`}
        size={35}
      />
      <div className={`${styles.movieList} d-flex cursor-pointer`}>
        {movieList &&
          movieList
            .slice(startIndex, startIndex + itemPerPage)
            .map((item: Movie, index: number) => (
              <MovieCard key={item.id || index} item={item} index={index} />
            ))}
      </div>
      <IoIosArrowForward
        onClick={handleNext}
        className={`${styles.slider} text-light bg-black rounded-circle cursor-pointer z-3 p-1`}
        size={35}
      />
    </div>
  );
}

export default MovieList;
