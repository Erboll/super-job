import React from "react";
import { VacancyCardProps } from "./VacancyCard.props";
import styles from "./VacancyCard.module.css";
import starIcon from "./Star.svg";
import LocationIcon from "./LocationIcon.svg";
const VacancyCard = ({ vacancy, children, ...props }: VacancyCardProps) => {
  return (
    <>
      {vacancy?.map((value) => (
        <div key={value.id} {...props} className={styles.card}>
          <h2 className={styles.tag}>{value.profession}</h2>
          <img src={starIcon} alt={starIcon} className={styles.iconStar} />
          <div className={styles.salary}>
            зп от {value.payment_from}
            {value.payment_to === 0 ? "" : " - " + value.payment_to}
            <span className={styles.schedule}></span>
          </div>
          <img
            src={LocationIcon}
            alt={LocationIcon}
            className={styles.locationIcon}
          />
          <span>{value.town.title}</span>
        </div>
      ))}
    </>
  );
};

export default VacancyCard;
