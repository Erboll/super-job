import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SearchVacancy from "./pages/SearchVacancy/SearchVacancy";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/search" element={<SearchVacancy />} />
      </Routes>
    </>
  );
}

export default App;
