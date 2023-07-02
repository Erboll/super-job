import React, { FormEvent, useEffect, useState } from "react";
import styles from "./Filter.module.css";
import Button from "../Button/Button";
import { useCatalogJobsQuery } from "../../store/super-job/superJob.api";
import { FilterType, Root2 } from "../../types";

const Filter = () => {
  const [select, setSelect] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [salaryFrom, setSalaryFrom] = useState("");
  const [filterr, setFilterr] = useState<FilterType>();

  const { isLoading, isError, data } = useCatalogJobsQuery("");

  const getCatalog = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFilterr((prev) => {
      return {
        ...prev,
        select,
        salaryFrom: parseFloat(salaryFrom),
        salaryTo: parseFloat(salaryTo),
      };
    });
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
        <input
          value={salaryFrom}
          className={styles.salaryFrom}
          type="number"
          placeholder="От"
          onChange={(e) => setSalaryFrom(e.target.value)}
        />
        <input
          value={salaryTo}
          className={styles.salaryTo}
          type="number"
          placeholder="До"
          onChange={(e) => setSalaryTo(e.target.value)}
        />
        <div className={styles.btn}>
          <Button size="large">Применить</Button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
