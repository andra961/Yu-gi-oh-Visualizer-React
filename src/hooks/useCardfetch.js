import { useState, useEffect } from "react";
import API from "../api";

const useCardFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await API.loadCards(searchTerm);
        setCards(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    loadCards();
  }, [searchTerm]);

  return { cards, setSearchTerm, isLoading, isError };
};

export default useCardFetch;
