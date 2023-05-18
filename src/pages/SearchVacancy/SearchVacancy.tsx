import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import InputSearch from "../../components/InputSearch/InputSearch";
import VacancyCard from "../../components/VacancyCard/VacancyCard";
import { useSearchVacancyQuery } from "../../store/super-job/superJob.api";
import { Root } from "../../types";
import styles from "./SearchVacancy.module.css";

const SearchVacancy = () => {
  const [vacancy, setVacancy] = useState<Root>();
  const { isError, isLoading, data } = useSearchVacancyQuery("");
  useEffect(() => {
    if (data) {
      setVacancy(data);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <Filter />
      <div>
        <InputSearch />
        <VacancyCard vacancy={vacancy && vacancy.objects} />
      </div>
    </div>
  );
};

export default SearchVacancy;
