import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import InputSearch from "../../components/InputSearch/InputSearch";
import VacancyCard from "../../components/VacancyCard/VacancyCard";
import { useSearchVacancyQuery } from "../../store/super-job/superJob.api";
import { Root } from "../../types";
import styles from "./SearchVacancy.module.css";
import Preloader from "../../components/Preloader/Preloader";
import Pagination from "../../components/Pagination/Pagination";
import Vacancies from "../../components/Vacancies/Vacancies";

const SearchVacancy = () => {
  const [vacancy, setVacancy] = useState<Root>();
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const { isError, isLoading, data } = useSearchVacancyQuery("");
  useEffect(() => {
    if (data) {
      setVacancy(data);
    }
  }, [data]);

  const lastIndexOfVacancy = currentPage * jobsPerPage;
  const firstIndexOfVacancy = lastIndexOfVacancy - jobsPerPage;
  const currentVacancy = data?.objects.slice(
    firstIndexOfVacancy,
    lastIndexOfVacancy
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={styles.container}>
      <Filter />
      <div>
        <InputSearch />
        {isError && <p>Ошибка...</p>}
        {isLoading && <Preloader />}
        <Vacancies vacancy={vacancy && currentVacancy} />
        <Pagination
          jobsPerPage={jobsPerPage}
          totalVacancies={data?.objects.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default SearchVacancy;
