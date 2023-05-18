import React from "react";
import styles from "./InputSearch.module.css";
import Button from "../Button/Button";

const InputSearch = () => {
  return (
    <>
      <div className={styles.inputWithIcon}>
        <input
          className={styles.input}
          placeholder="Введите название вакансии"
        />
        <i className={styles.icon}></i>
        <Button size="medium">Поиск</Button>
      </div>
    </>
  );
};

export default InputSearch;
