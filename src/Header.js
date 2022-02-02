import React, { useEffect, useState } from "react";

function Header({ setSearchTerm }) {
  const [search, setSearch] = useState("");

  const onChangeHandle = (e) => setSearch(e.target.value);

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(search), 500);

    return () => clearTimeout(timer);
  }, [search, setSearchTerm]);

  return (
    <header>
      <h1>CARD VISUALIZER</h1>
      <input
        type="Text"
        value={search}
        id="search"
        onChange={onChangeHandle}
        placeholder="Search..."
      ></input>
    </header>
  );
}

export default Header;
