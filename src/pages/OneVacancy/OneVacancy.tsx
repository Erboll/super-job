import axios from "axios";
import ReactHtmlParser from "html-react-parser";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import LocationIcon from "../../components/VacancyCard/LocationIcon.svg";
import starIcon from "../../components/VacancyCard/Star.svg";
import { TypeVacancy } from "../../types";
import styles from "./OneVacancy.module.css";
import { OneVacancyProps } from "./OneVacancy.props";

const OneVacancy = ({ children, ...props }: OneVacancyProps) => {
  const [vacancy, setVacancy] = useState<TypeVacancy | null>(null);

  const { id } = useParams();
  const getOneVacancy = useCallback(async () => {
    const request = await axios.get(
      "https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/" + id,
      {
        headers: {
          "x-secret-key": process.env.REACT_APP_API_KEY,
          "X-Api-App-Id": process.env.REACT_APP_SECRET_KEY,
        },
      }
    );
    setVacancy(request.data);
  }, [id]);

  useEffect(() => {
    void getOneVacancy();
  }, [getOneVacancy]);

  const text = vacancy && ReactHtmlParser(vacancy.vacancyRichText);

  return (
    <>
      {vacancy ? (
        <div {...props}>
          <div key={vacancy.id} {...props} className={styles.card}>
            <h2 className={styles.tag}>{vacancy.profession}</h2>
            <img src={starIcon} alt={starIcon} className={styles.iconStar} />
            <div className={styles.salary}>
              з/п от {vacancy.payment_from === 0 ? "" : vacancy.payment_from}{" "}
              {vacancy.payment_to === 0 ? "" : " - " + vacancy.payment_to}{" "}
              <span className={styles.dot}></span>
              <span className={styles.schedule}>
                {vacancy.type_of_work.title}
              </span>
              b
            </div>
            <img
              src={LocationIcon}
              alt={LocationIcon}
              className={styles.locationIcon}
            />
            <span>{vacancy.town.title}</span>
          </div>
          <div className={styles.description}>{text}</div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default OneVacancy;
