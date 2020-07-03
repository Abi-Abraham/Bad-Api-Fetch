import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const changeHandler = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search Characters"
          className="form-control"
          autoFocus
          value={text}
          onChange={(e) => changeHandler(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
