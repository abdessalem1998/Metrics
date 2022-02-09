/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ year, title }) => (
  <>
    <nav>
      <div>
        <Link to="/" className="back-btn">
          back
        </Link>
        <span>{year}</span>
      </div>
      <span>{title}</span>
      <div>
        <Link to="/details" className="back-btn">
          next
        </Link>
      </div>
    </nav>
  </>
);

export default Nav;
