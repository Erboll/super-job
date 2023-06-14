import React, { FormEvent, useEffect, useState } from "react";
import styles from "./Filter.module.css";
import Button from "../Button/Button";
import { useCatalogJobsQuery } from "../../store/super-job/superJob.api";
import { Root2 } from "../../types";

const Filter = () => {
  const [select, setSelect] = useState("");

  const { isLoading, isError, data } = useCatalogJobsQuery("");

  const getCatalog = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className={styles.filter}>
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <button className={styles.resetBtn}>Сбросить всё x</button>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.label}>Отрасль</label>
        <select className={styles.select} onChange={getCatalog}>
          {data?.map((d: Root2) => (
            <option key={d.title} value={d.key}>
              {d.title}
            </option>
          ))}
        </select>
        <label className={styles.labelSalary}>Оклад</label>
        <input className={styles.salaryFrom} type="number" placeholder="От" />
        <input className={styles.salaryTo} type="number" placeholder="До" />
        <div className={styles.btn}>
          <Button size="large">Применить</Button>
        </div>
      </form>
      {select}
    </div>
  );
};

export default Filter;
