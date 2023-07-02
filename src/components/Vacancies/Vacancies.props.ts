import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { TypeVacancy } from "../../types";

export interface VacanciesProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    vacancy:TypeVacancy[] | undefined
}