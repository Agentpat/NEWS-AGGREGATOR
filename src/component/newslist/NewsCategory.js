
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsCategory.css';

const NewsCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    
    const fetchNewsCategories = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/sources?apiKey=40d54482e1374995871b24890eefe744'
        );

        
        const categoryNames = response.data.sources.map((source) => source.category);
        
        const uniqueCategories = [...new Set(categoryNames)];

        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching news categories:', error);
      }
    };

    fetchNewsCategories();
  }, []); 

  return (
    <div className="news-category">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default NewsCategory;
