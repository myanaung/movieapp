import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  if (itemsCount === 0)
    return (
      <p className="badge bg-warning p-1 text-secondary fw-bolder fs-6">
        There is no movies with that name!
      </p>
    );
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount);
  return (
    <nav className="m-2">
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
