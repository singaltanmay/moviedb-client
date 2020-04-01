import React from "react";

const Search = ({handleInput}) => {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie"
        className="searchbox"
        onChange={handleInput}
      ></input>
    </section>
  );
};

export default Search;
