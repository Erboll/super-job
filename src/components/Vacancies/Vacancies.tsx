import React from "react";
import { VacanciesProps } from "./Vacancies.props";
import VacancyCard from "../VacancyCard/VacancyCard";

const Vacancies = ({ vacancy }: VacanciesProps) => {
  return (
    <>
      {vacancy?.map((value) => (
        <VacancyCard key={value.id} vacancy={value} />
      ))}
    </>
  );
};

export default Vacancies;
