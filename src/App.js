import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/';
import './App.css';

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [randomColor, setRandomColor] = useState('');
  const reqURL = `https://api.quotable.io/random`;
  const handleReqNewQuote = () => {
    setLoading(true);
    axios
      .get(reqURL)
      .then(res => {
        setQuote(res.data);
        setLoading(false);
      })
      .catch(err => setQuote(err));

    const hexaColor = [];
    while (hexaColor.length < 3) {
      const number = Math.floor(Math.random() * 255);
      hexaColor.push(number);
    }
    setRandomColor(`rgb(${hexaColor[0]}, ${hexaColor[1]}, ${hexaColor[2]})`);
  };
  document.body.style.backgroundColor = randomColor;
  document.body.style.color = randomColor;
  const encodedURI = encodeURIComponent(`"${quote.content}". ${quote.author}`);
  const hrefTag = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodedURI}`;
  useEffect(() => {
    handleReqNewQuote();
  }, []);
  return (
    <div className="app-container">
      <div className="quote-box" id="quote-box">
        <div className="quote-text">
          <div
            className="curtain"
            style={{
              backgroundColor: loading ? 'rgb(27, 27, 27)' : 'transparent',
              transition: 'background 0.3s ease-in'
            }}
          />
          <p className="text" id="text">
            {quote.content}
          </p>
          <p className="author" id="author">
            {quote.author}
          </p>
        </div>
        <div className="button-action">
          <a href={hrefTag} id="tweet-quote" style={{ color: randomColor }}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <button
            className="new-quote"
            id="new-quote"
            onClick={handleReqNewQuote}
            style={{ color: randomColor }}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
        <p>Created By Jodi Pranata</p>
        <p> Jan 2020 </p>
      </div>
    </div>
  );
}

export default App;
