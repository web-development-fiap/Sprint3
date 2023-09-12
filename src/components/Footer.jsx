import React from 'react';
import '../App.css';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`container ${styles.footer}`}>
      <h1>Porto x melfe</h1>
      <ul>
        <li>© Porto x melfe 2023</li>
        <li>Política de Privacidade</li>
        <li>Política de Cookies</li>
        <li>Termos de uso</li>
      </ul>
    </div>
  );
};

export default Footer;