import React from "react";
import Frame from "./Frame.png";
import styles from "./EmptyPage.module.css";
import { Link } from "react-router-dom";

const EmptyPage = () => {
  return (
    <>
      <div className={styles.imgDiv}>
        <img src={Frame} alt={Frame} />
        <h2 className={styles.title}>Упс, здесь еще ничего нет!</h2>
        <Link to={"/search"} className={styles.btn}>
          Поиск Вакансий
        </Link>
      </div>
    </>
  );
};

export default EmptyPage;
