import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchVacancy from "./pages/SearchVacancy/SearchVacancy";
import OneVacancy from "./pages/OneVacancy/OneVacancy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/search" element={<SearchVacancy />} />
        <Route path="/search/one-vacancy/:id" element={<OneVacancy />} />
      </Routes>
    </>
  );
}

export default App;
