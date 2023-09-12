import React from 'react';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import styles from './Header.module.css';

const Header = () => {
    return (
      <div className={`container ${styles.header}`}>
        <Link to="/">
          <Logo />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/vistoria">Vistoria</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/equipe">Equipe</Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Header;