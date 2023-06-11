import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchVacancy from "./pages/SearchVacancy/SearchVacancy";
import OneVacancy from "./pages/OneVacancy/OneVacancy";
import EmptyPage from "./pages/EmptyPage/EmptyPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmptyPage />} />
        <Route path="/search" element={<SearchVacancy />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/search/one-vacancy/:id" element={<OneVacancy />} />
      </Routes>
    </>
  );
}

export default App;
