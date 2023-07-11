import { useState } from "react";
import { useSearchVacancyQuery } from "../../store/super-job/superJob.api";
import { Root, TypeVacancy } from "../../types";
import Button from "../Button/Button";
import Vacancies from "../Vacancies/Vacancies";
import styles from "./InputSearch.module.css";

const InputSearch = () => {
  const [searchData, setSearchData] = useState<TypeVacancy[]>([]);
  const { data } = useSearchVacancyQuery("");
  const [showVacancy, setShowVacancy] = useState(true);
  const [value, setValue] = useState("");

  const searchVacancy = (vac: Root | undefined) => {
    const filteredInput = vac?.objects.filter((v: TypeVacancy) =>
      v.profession.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    if (filteredInput) {
      setSearchData(filteredInput);
    }
    if (searchData.length > 0) {
      setShowVacancy(true);
    }
  };

  let showSearchVacancy = null;

  if (searchData.length > 0) {
    showSearchVacancy = (
      <div className={styles.search}>
        <div className={styles.btns}>
          <h2>Найденные вакансии</h2>
          <button
            onClick={() => setShowVacancy((prev) => !prev)}
            className={styles.btn}
          >
            Вернуться к вакансиям
          </button>
        </div>

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
        {showVacancy && showSearchVacancy}
      </div>
    </>
  );
};

export default InputSearch;
