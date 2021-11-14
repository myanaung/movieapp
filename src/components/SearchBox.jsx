import React, { useRef } from "react";

const SearchBox = ({onClick }) => {
  const valueRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    return onClick(valueRef.current.value);
  };
  return (
    <>
      <input
        ref={valueRef}
        type="text"
        className="form-control me-1"
        placeholder="Search..."
      />{" "}
      <button
        className="btn btn-custom"
        type="submit"
        onClick={onButtonClick}
      >
        Search
      </button>
    </>
  );
};

export default SearchBox;
