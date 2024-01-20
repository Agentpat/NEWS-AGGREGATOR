

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TopHeadline.css';

const TopHeadline = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    const fetchTopHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=40d54482e1374995871b24890eefe744`
        );

        setTopHeadlines(response.data.articles);
      } catch (error) {
        console.error('Error fetching top headlines:', error);
      }
    };

    fetchTopHeadlines();
  }, []);

  return (
    <div className="top-headline">
      <h2>Top Headlines</h2>
      <div className="headline-list">
        {topHeadlines.map((headline, index) => (
          <div key={index} className="headline-item">
            <img src={headline.urlToImage} alt={headline.title} />
            <div className="headline-content">
              <h3>{headline.title}</h3>
              <p>{headline.description}</p>
              <a href={headline.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHeadline;
