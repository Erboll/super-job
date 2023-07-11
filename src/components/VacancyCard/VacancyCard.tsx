import { useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/actions";
import { TypeVacancy } from "../../types";
import LocationIcon from "./LocationIcon.svg";
import { ReactComponent as StarIcon } from "./Star.svg";
import styles from "./VacancyCard.module.css";
import { VacancyCardProps } from "./VacancyCard.props";
import { useAppSelector } from "../../hooks/redux";
const VacancyCard = ({ vacancy, children, ...props }: VacancyCardProps) => {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.superJob);
  const [isFav, setIsFav] = useState(favorites.includes(vacancy));

  const addToFavorite = (value: TypeVacancy) => {
    addFavorite(value);
    setIsFav(true);
  };

  const removeFav = (value: TypeVacancy) => {
    removeFavorite(value);
    setIsFav(false);
  };

  return (
    <>
      <div key={vacancy.id} {...props} className={styles.card}>
        <Link to={"/search/one-vacancy/" + vacancy.id} className={styles.tag}>
          {vacancy.profession}
        </Link>
        {!isFav && (
          <StarIcon
            className={styles.iconStar}
            fill="none"
            stroke="#ACADB9"
            onClick={() => addToFavorite(vacancy)}
          />
        )}
        {isFav && (
          <StarIcon
            className={styles.iconStar}
            fill="#5E96FC"
            stroke="none"
            onClick={() => removeFav(vacancy)}
          />
        )}
        <div className={styles.salary}>
          з/п от {vacancy.payment_from}
          {vacancy.payment_to === 0 ? "" : " - " + vacancy.payment_to}{" "}
          <span className={styles.dot}></span>
          <span className={styles.schedule}>{vacancy.type_of_work.title}</span>
        </div>
        <div className={styles.location}>
          <img
            src={LocationIcon}
            alt={LocationIcon}
            className={styles.locationIcon}
          />
          <span className={styles.city}>{vacancy.town.title}</span>
        </div>
      </div>
    </>
  );
};

export default VacancyCard;
