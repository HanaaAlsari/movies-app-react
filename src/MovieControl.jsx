
import { useMovieContext } from './context/GlobalContext';
import * as actions from "./context/ActionType";
// استيراد أيقونة العين والـ X بشكل مباشر ومضمون
import { FaEye, FaTimes, FaEyeSlash } from 'react-icons/fa';

function Moviecontrol({ movie, type }) {
    const MovieContext = useMovieContext();

    return (
        <div className='inner-card-controls'>
            {/* أزرار التحكم الخاصة بصفحة الـ Watchlist */}
            {type === "watchlist" && (
                <>
                    <button 
                        onClick={() => MovieContext.MoviesDispatch({
                            type: actions.ADD_MOVIE_TO_WATCHED,
                            payload: movie,
                        })} 
                        className='ctrl-btn'
                    >
                        <FaEye /> {/* أيقونة العين الافتراضية */}
                    </button>

                    <button  
                        onClick={() => MovieContext.MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                            payload: movie.imdbID,
                        })} 
                        className='ctrl-btn'
                    >
                        <FaTimes /> {/* أيقونة الـ X الافتراضية */}
                    </button>
                </>
            )}

            {/* أزرار التحكم الخاصة بصفحة الـ Watched */}
            {type === "watched" && (
                <>
                    <button 
                        onClick={() => MovieContext.MoviesDispatch({
                            type: actions.MOVIE_TO_WATCHLIST,
                            payload: movie,
                        })} 
                        className='ctrl-btn'
                    >
                        <FaEyeSlash /> {/* أيقونة العين المشطوبة */}
                    </button>

                    <button 
                        onClick={() => MovieContext.MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_WATCHED,
                            payload: movie.imdbID,
                        })} 
                        className='ctrl-btn'
                    >
                        <FaTimes />
                    </button>
                </>
            )}
        </div>
    );
}

export default Moviecontrol;
