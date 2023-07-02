import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.divPreloader}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Preloader;
