import { Link } from "react-router-dom";
import { useActions } from "../../hooks/actions";
import { TypeVacancy } from "../../types";
import LocationIcon from "./LocationIcon.svg";
import { ReactComponent as StarIcon } from "./Star.svg";
import styles from "./VacancyCard.module.css";
import { VacancyCardProps } from "./VacancyCard.props";
import { useState } from "react";
const VacancyCard = ({ vacancy, children, ...props }: VacancyCardProps) => {
  const { addFavorite, removeFavorite } = useActions();
  const [test, setTest] = useState(false);

  const removeFav = (value: TypeVacancy) => {
    removeFavorite(value);
  };

  const addToFavorite = (value: TypeVacancy) => {
    addFavorite(value);
    setTest((prev) => !prev);
  };

  return (
    <>
      {vacancy?.map((value) => (
        <div key={value.id} {...props} className={styles.card}>
          <Link to={"/search/one-vacancy/" + value.id} className={styles.tag}>
            {value.profession}
          </Link>
          <StarIcon
            className={styles.iconStar}
            fill={test ? "#5E96FC" : "none"}
            stroke={test ? "none" : "#ACADB9"}
            onClick={() => addToFavorite(value)}
          />
          <button onClick={() => removeFav(value)}>delete</button>
          <div className={styles.salary}>
            з/п от {value.payment_from}
            {value.payment_to === 0 ? "" : " - " + value.payment_to}{" "}
            <span className={styles.dot}></span>
            <span className={styles.schedule}>{value.type_of_work.title}</span>
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
