import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.scss'

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {

  const [pages,setPages] = useState([])

  
  useEffect(() => {
    var pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
    setPages(pageNumbers);
  }, [totalCards, cardsPerPage]);

  return (
    <div>
      <ul className="pagination">
        {pages.length === 1 ? <></> : pages.map((number) => (
          <li key={number} className="page-item">
            <Link onClick={() => paginate(number)} to="/home" className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
