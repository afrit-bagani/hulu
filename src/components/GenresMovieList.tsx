import { genresList } from "../data/genresList";
import { IoIosArrowForward } from "react-icons/io";
import MovieList from "./MovieList";

function GenresMovieList() {
  return (
    <>
      <ul className="list-group-item bg-dark">
        {genresList.map((item) => (
          <li key={item.id} className="list-unstyled">
            <div className="d-flex justify-content-between  px-4 py-2">
              <h2 className="text-light">{item.name}</h2>
              <button className="btn text-light d-flex align-items-center gap-2">
                <span>VIEW ALL</span> <IoIosArrowForward />
              </button>
            </div>
            <div className="d-flex">
              <MovieList id={item.id} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GenresMovieList;
