import { Link } from "react-router-dom";
import LocationIcon from "./LocationIcon.svg";
import starIcon from "./Star.svg";
import styles from "./VacancyCard.module.css";
import { VacancyCardProps } from "./VacancyCard.props";
const VacancyCard = ({ vacancy, children, ...props }: VacancyCardProps) => {
  return (
    <>
      {vacancy?.map((value) => (
        <div key={value.id} {...props} className={styles.card}>
          <Link to={"/search/one-vacancy/" + value.id} className={styles.tag}>
            {value.profession}
          </Link>
          <img src={starIcon} alt={starIcon} className={styles.iconStar} />
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
