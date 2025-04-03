import { genresList } from "../data/genresList";
import {
  IoIosArrowDropleft,
  IoIosArrowForward,
  IoIosArrowDropright,
} from "react-icons/io";
import MovieList from "./MovieList";

function GenresMovieList() {
  return (
    <>
      <ul className="list-group-item">
        {genresList.map((item) => (
          <li key={item.id} className="list-unstyled">
            <div className="d-flex justify-content-between px-4 py-2">
              <h2>{item.name}</h2>
              <button className="btn">
                VIEW ALL <IoIosArrowForward />
              </button>
            </div>
            <div className="d-flex">
              <IoIosArrowDropleft />
              <MovieList id={item.id} />
              <IoIosArrowDropright />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GenresMovieList;
