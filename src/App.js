import React, { useState, useEffect } from "react";

import Card from "./Card";

import Header from "./Header";

import Error from "./Error";

import Spinner from "./spinner";

import useCardFetch from "./hooks/useCardfetch";

function App() {
  const { cards, setSearchTerm, isLoading, isError } = useCardFetch();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScrollEvent = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      }

      if (window.scrollY <= 200) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScrollEvent);

    return () => {
      window.removeEventListener("scroll", onScrollEvent);
    };
  }, []);

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} isScrolled={isScrolled} />

      {!isLoading && !isError && (
        <div className="container">
          <div className="cards-container">
            {cards.map((card) => {
              return <Card key={card.id} {...card}></Card>;
            })}
          </div>
        </div>
      )}

      {isError && <Error />}

      {isLoading && <Spinner />}
    </div>
  );
}

export default App;
