import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface PaginationProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    jobsPerPage:number;
    currentPage:number;
    totalVacancies?:number;
    paginate:(pageNumber:number) => void
}