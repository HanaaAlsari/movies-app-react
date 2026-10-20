import { Routes, Route } from "react-router-dom";

import WatchList from "./WatchList";
import Watched from "./Watched";
import Add from "./Add";
import "./App.css";
import Header from "./Header";
import { ContextProvider } from "./context/GlobalContext";
export default function App() {
  return (
    <>
      {/* مكان عرض الصفحات بناءً على الرابط */}
      <div>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </div>
    </>
  );
}
