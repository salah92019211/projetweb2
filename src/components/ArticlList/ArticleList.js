import React from "react";
import Article from "../Article/Article";
import "./articlsList.css";

const ArticleList = ({ articls }) => {
  return (
    <div className="allList">
      <div className="list">
        {articls.map((el, i) => (<Article el={el} key={i} />))}
      </div>
    </div>
  );
};

export default ArticleList;
