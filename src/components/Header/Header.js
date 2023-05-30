import React from "react";
import { Link } from "react-router-dom";
import AddArticle from "../AddArticle/AddArticle";
import './header.css'

const Header = () => {
  return (
    <div>
      <nav className="nav nav-3">
        <div className="nav-logo">
          Logo
        </div>
        <ul className="nav-list">
          <li>
            <Link to= '/'> Home    </Link>
          </li>
          <li>
            <Link to= '/favorites'> Favorites </Link>
          </li>
          <li>
            <Link to= '/moreArticles'> More Articles </Link>
          </li>
          <li>
            <Link to='/ContactUs'> Contact </Link>
          </li>
        </ul>
        <a className="btn">
           <AddArticle/>
        </a>
      </nav>
    </div>
  );
};

export default Header;
