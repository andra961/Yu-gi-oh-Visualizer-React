import React, { useEffect, useState } from "react";

function Header({ setSearchTerm, isScrolled }) {
  const [search, setSearch] = useState("");

  const onChangeHandle = (e) => setSearch(e.target.value);

  useEffect(() => {
    const timer = setTimeout(() => setSearchTerm(search), 500);

    return () => clearTimeout(timer);
  }, [search, setSearchTerm]);

  return (
    <header className={isScrolled ? "headerSmall" : ""}>
      <h1 className={isScrolled ? "hiddenMobile headerTitle" : "headerTitle"}>
        CARD VISUALIZER
      </h1>
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
