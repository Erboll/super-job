import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { TypeVacancy } from "../../types";

export interface OneVacancyProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data?:TypeVacancy | undefined
}