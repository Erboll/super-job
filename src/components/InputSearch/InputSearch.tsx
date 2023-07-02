import { useState } from "react";
import { useSearchVacancyQuery } from "../../store/super-job/superJob.api";
import { Root, TypeVacancy } from "../../types";
import Button from "../Button/Button";
import styles from "./InputSearch.module.css";
import VacancyCard from "../VacancyCard/VacancyCard";
import Vacancies from "../Vacancies/Vacancies";

const InputSearch = () => {
  const [searchData, setSearchData] = useState<TypeVacancy[]>([]);
  const { data } = useSearchVacancyQuery("");
  const [value, setValue] = useState("");

  const searchVacancy = (vac: Root | undefined) => {
    const filteredInput = vac?.objects.filter((v: TypeVacancy) =>
      v.profession.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    if (filteredInput) {
      return setSearchData(filteredInput);
    }
  };

  let showSearchVacancy = null;

  if (searchData.length > 0) {
    showSearchVacancy = (
      <div className={styles.search}>
        <h2>Найденные вакансии</h2>
        <Vacancies vacancy={searchData} />
        <hr />
      </div>
    );
  }

  return (
    <>
      <div className={styles.inputWithIcon}>
        <input
          type="text"
          className={styles.input}
          value={value}
          placeholder="Введите название вакансии"
          onChange={(e) => setValue(e.target.value)}
        />
        <i className={styles.icon}></i>
        <Button onClick={() => searchVacancy(data)} size="medium">
          Поиск
        </Button>
        {showSearchVacancy}
      </div>
    </>
  );
};

export default InputSearch;
