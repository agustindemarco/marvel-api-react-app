import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

const propTypes = {
  cardsPerPage: PropTypes.number,
  totalCards: PropTypes.number,
  paginate: PropTypes.func,
};

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    var pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
      pageNumbers.push(i);
    }
    setPages(pageNumbers);
  }, [totalCards, cardsPerPage]);

  return (
    <div className="bottom">
      <ul className="pagination">
        {pages.length === 1 ? (
          <></>
        ) : (
          pages.map((number) => (
            <li key={number} className="page-item">
              <Link
                onClick={() => paginate(number)}
                to={`/home/favourite/${number}`}
                className="page-link"
              >
                {number}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = propTypes;
export default Pagination;
