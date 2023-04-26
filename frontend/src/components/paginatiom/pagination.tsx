import { IPagination } from "../../utils/types";
import styles from './pagination.module.css';
import { useState } from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate }: IPagination) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    paginate(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? `${styles.active}` : `${styles.item}`}>
          <a href="#" onClick={() => handleClick(i)} className={styles.link}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };


  return (
    <nav>
      <ul className={styles.pagination}>{renderPageNumbers()}</ul>
    </nav>
  );
}

export default Pagination;








