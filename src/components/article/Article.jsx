import React from 'react';
import './article.css';

const Article = ({ img, date, title }) => {
  return (
    <div className="gpt3__articles-container">
      <div className="gpt3__articles-container__article-image">
        <img src={img} alt="blog" />
      </div>
      <div className="gpt3__articles-container__article-title">
        <div>
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
