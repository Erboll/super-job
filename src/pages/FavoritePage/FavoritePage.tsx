import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Vacancies from "../../components/Vacancies/Vacancies";
import { useAppSelector } from "../../hooks/redux";
import EmptyPage from "../EmptyPage/EmptyPage";
import styles from "./FavoritePage.module.css";

const FavoritePage = () => {
  const { favorites } = useAppSelector((state) => state.superJob);
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteJobPerPage] = useState(5);

  const lastIndexOfFavoriteJobs = currentPage * favoriteJobPerPage;
  const firstIndexOfFavoritesJobs =
    lastIndexOfFavoriteJobs - favoriteJobPerPage;

  const currentIndex = favorites.slice(
    firstIndexOfFavoritesJobs,
    lastIndexOfFavoriteJobs
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (favorites.length === 0) return <EmptyPage />;

  return (
    <div className={styles.favoritePage}>
      <Vacancies vacancy={currentIndex} />
      <Pagination
        totalVacancies={favorites.length}
        jobsPerPage={favoriteJobPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default FavoritePage;
