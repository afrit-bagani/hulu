import styles from "../css/MovieCard.module.css";

type MovieCardProps = {
  item: {
    id: number;
    backdrop_path: string;
    title: string;
  };
  index: number;
};

function MovieCard({ item, index }: MovieCardProps) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className={`${styles.movieCard} px-4 py-2 my-2`}>
        <img
          className={`${styles.movieImg}`}
          src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
          alt={`${item.title}`}
        />
        <p className="text-light opacity-50 pt-2">
          {index % 2 == 0 ? "Watching" : "Start Watching"}
        </p>
        <p className={`${styles.title} text-light mt-4`}>{item.title}</p>
      </div>
    </>
  );
}

export default MovieCard;
