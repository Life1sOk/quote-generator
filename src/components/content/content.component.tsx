import React, { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { GoQuote } from "react-icons/go";

import "./content.style.scss";

const Content = () => {
  const [array, setArray] = useState([]);
  const [quote, setQuote] = useState({
    text: "Pick quote of the day",
    author: "Blank",
  });

  useEffect(() => {
    const getQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const change = await response.json();
      setArray(change);
    };
    getQuotes();
  }, []);

  const randomeQuote = () => {
    setQuote(array[Math.floor(Math.random() * array.length)]);
  };

  return (
    <div className="content-container">
      <div className="text">
        <GoQuote className="quote" />
        <span>{quote.text}</span>
      </div>
      <div className="author">{quote.author}</div>
      <div className="buttons">
        <button className="twitter">
          <FaTwitter />
        </button>
        <button onClick={() => randomeQuote()}>New quote</button>
      </div>
    </div>
  );
};

export default Content;
