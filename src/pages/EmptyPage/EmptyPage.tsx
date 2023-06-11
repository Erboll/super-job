import React from "react";
import Frame from "./Frame.png";
import styles from "./EmptyPage.module.css";

const EmptyPage = () => {
  return (
    <>
      <div className={styles.imgDiv}>
        <img src={Frame} alt={Frame} />
        <h2 className={styles.title}>Упс, здесь еще ничего нет!</h2>
        <button className={styles.btn}>Поиск Вакансий</button>
      </div>
    </>
  );
};

export default EmptyPage;
