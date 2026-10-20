import * as actions from "./ActionType";

export const reducer = (state, action) => {
    switch (action.type) {
        
        // 1. إضافة فيلم إلى قائمة المشاهدة (Watchlist)
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            };

        // 2. إزالة فيلم من قائمة المشاهدة (Watchlist)
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload
                ),
            };

        // 3. إضافة فيلم إلى القائمة المشاهدة (Watched) وإزالته تلقائياً من الـ Watchlist
        case actions.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.imdbID !== action.payload.imdbID
                ),
                watched: [action.payload, ...state.watched],
            };

        // 4. إزالة فيلم من القائمة المشاهدة (Watched)
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.imdbID !== action.payload
                ),
            };

        // 5. نقل الفيلم من قائمة Watched وإعادته مرة أخرى إلى قائمة Watchlist
        case actions.MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.imdbID !== action.payload.imdbID
                ),
                watchlist: [action.payload, ...state.watchlist],
            };

        // الحالة الافتراضية إذا لم تتطابق أي عملية
        default:
            return state;
    }
};
