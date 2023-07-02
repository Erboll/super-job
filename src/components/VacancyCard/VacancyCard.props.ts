import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { TypeVacancy } from "../../types";

export interface VacancyCardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    vacancy:TypeVacancy
}