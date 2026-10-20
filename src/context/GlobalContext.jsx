/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext, useEffect } from "react";
import { reducer } from "./reducer"; // تأكد من مطابقة اسم الملف لديك سواء كان reducer أو reducer.js

// 1. تعريف الحالة الابتدائية وقراءة البيانات من الـ localStorage إذا كانت موجودة
const initialState = {
    watchlist: localStorage.getItem("watchlist") 
        ? JSON.parse(localStorage.getItem("watchlist")) 
        : [],
    watched: localStorage.getItem("watched") 
        ? JSON.parse(localStorage.getItem("watched")) 
        : [],
};

// 2. إنشاء الـ Context
export const GlobalContext = createContext(initialState);

// 3. مكون الـ Provider الذي يغلف التطبيق ويوزع البيانات والـ Dispatch
export const ContextProvider = ({ children }) => {
    const [state, MoviesDispatch] = useReducer(reducer, initialState);

    // تحديث التخزين المحلي (localStorage) تلقائياً عند تغيير القوائم
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);

    return (
        <GlobalContext.Provider 
            value={{ 
                watchlist: state.watchlist, 
                watched: state.watched, 
                MoviesDispatch 
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

// 4. Custom Hook مخصص لتسهيل استدعاء الـ Context في الملفات الأخرى مثل ResultCard
export const useMovieContext = () => {
    return useContext(GlobalContext);
};
