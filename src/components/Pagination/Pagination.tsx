import React from "react";
import { PaginationProps } from "./Pagination.props";
import styles from "./Pagination.module.css";

const Pagination = ({
  totalVacancies,
  jobsPerPage,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVacancies! / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.divPag}>
      <ul>
        {pageNumbers.map((num) => (
          <li
            className={styles.pagination}
            key={num}
            onClick={() => paginate(num)}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
