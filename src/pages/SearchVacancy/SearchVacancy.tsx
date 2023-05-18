import React from "react";
import styles from "./SearchVacancy.module.css";
import InputSearch from "../../components/InputSearch/InputSearch";
import Filter from "../../components/Filter/Filter";

const SearchVacancy = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <InputSearch />
    </div>
  );
};

export default SearchVacancy;
