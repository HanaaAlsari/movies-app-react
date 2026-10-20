
import MovieControl from './MovieControl';
import './MoviCard.css'; // تأكد من مطابقة اسم الملف كما هو مكتوب لديك

function Moviecard({ movie, type }) {
    return (
        <div className='movie-card'>
            {/* حاوية البوستر المحيطة بالصورة لضبط الأبعاد */}
            <div className='poster-wrapper'>
                {movie.Poster ? (
                    <img src={movie.Poster} alt={movie.Title} />
                ) : (
                    <div className='filter-poster'></div>
                )}
            </div>
            
            {/* مكون الأزرار يظهر الآن بشكل طبيعي أسفل حاوية البوستر */}
            <MovieControl movie={movie} type={type} />
        </div>
    );
}

export default Moviecard;
