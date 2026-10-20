import * as actions from "../src/context/ActionType";
import "./ResultCard.css";
import { useMovieContext } from "./context/GlobalContext";
// import * as actions from "./context/ActionTypes";

function ResultCard({ movie }) {
  const MovieContext = useMovieContext();

  // البحث داخل watchlist لمعرفة إذا كان الفيلم موجوداً مسبقاً
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID,
  );
  const storedMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID,
  );

  // إذا كان الفيلم موجوداً في الـ watchlist أو الـ watched يتم تعطيل الزر
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
      ? true
      : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster">
        {/* تصحيح الشرط هنا: التأكد من وجود البوستر وعرضه بشكل صحيح */}
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-data">{movie.Year}</h4> : "-"}
        </div>

        <div className="controls">
          {/* تم تصحيح ترتيب أقواس الدالة والأزرار هنا بالكامل */}
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="btn"
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="btn"
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
