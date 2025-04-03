import styles from "../css/MovieCard.module.css";

type MovieCardProps = {
  item: {
    id: number;
    backdrop_path: string;
    title: string;
  };
};

function MovieCard({ item }: MovieCardProps) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className={`${styles.movieCard}`}>
        <img
          className={`${styles.movieImg}`}
          src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
          alt={`${item.title}`}
          // width={500}
        />
        {/* <h6 className="">{item.title}</h6> */}
      </div>
    </>
  );
}

export default MovieCard;
