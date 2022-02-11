import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import { TiMicrophone } from 'react-icons/ti';
import { AiTwotoneSetting } from 'react-icons/ai';

const Nav = ({ title, year }) => (
  <nav className="navbar navbar-light" style={{ backgroundColor: '#EC4C8A' }}>
    <div>
      <Link to="/" className="back-btn" style={{ color: 'white', textDecoration: 'none' }}>
        <IoIosArrowBack />
        <span>{year}</span>
      </Link>
    </div>
    <span style={{ color: 'white', textDecoration: 'none' }}>{title}</span>
    <div>
      <Link to="/" className="back-btn" style={{ color: 'white', textDecoration: 'none' }}>
        <TiMicrophone style={{ marginRight: '30px' }} />
        <AiTwotoneSetting />
      </Link>
    </div>
  </nav>
);

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
};

Nav.defaultProps = {
  year: '',
};

export default Nav;
