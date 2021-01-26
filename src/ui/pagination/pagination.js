import React, {useState} from "react";
import {connect} from "react-redux";

const Pagination = ({count, pageSize, next, prev, setNextPage}) => {

  const pageCount = Math.ceil(count / pageSize);
  const pages = [];
  let pageNumber = 0;

  for (let i = 1; i <= pageCount; i++) {
    let urlPage = `api/v1/animals/?limit=${pageSize}&offset=${pageNumber}`
    pages.push(
      {
        pageNumber: i,
        urlPage: urlPage
      }
    );
    pageNumber = pageNumber + pageSize
  }

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="d-flex mt-5">
      <button
        disabled={!prev}
        onClick={() => {
          setNextPage(prev);
          setCurrentPage(currentPage - 1);
        }}
        className="btn btn-primary"
      >
        prev
      </button>
      <div className="mx-3">
        {
          pages.map(item => {
            return (
              <button
                onClick={() => {
                  setNextPage(item.urlPage);
                  setCurrentPage(item.pageNumber);
                }}
                className={currentPage === item.pageNumber ? "btn btn-light fw-bold" : "btn"}
                key={item.pageNumber}
              >
                {item.pageNumber}
              </button>
            );
          })
        }
      </div>
      <button
        disabled={!next}
        onClick={() => {
          setNextPage(next);
          setCurrentPage(currentPage + 1);
        }}
        className="btn btn-primary"
      >
        next
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.animal.count,
    pageSize: state.animal.pageSize,
    next: state.animal.nextPageAnimals,
    prev: state.animal.prevPageAnimals,
  }
}

export default connect(mapStateToProps)(Pagination)
