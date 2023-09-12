import React from 'react';
import { ReactComponent as Bike } from '../assets/Bike.svg';
import Img from '../assets/Group.png';
import styles from './Equipe.module.css';
import '../App.css';

const Equipe = () => {
  return (
    <div className="container">
      <div className={styles.bgEquipe}>
        <div className={styles.equipe}>
          <h1>Equipe CHALENGE</h1>
          <ul>
            <li>Mary Araújo Moreira Speranzini RM550242</li>
            <li>Luana Duque RM550813</li>
            <li>Elen Cabral RM98790</li>
            <li>Felipe Zambello Silva RM 99843</li>
            <li>Luigi Exposito Uchiyama RM99520</li>
          </ul>
        </div>
        <Bike />
      </div>
      <div className={styles.img}>
        <img src={Img} alt="bike" />
      </div>
    </div>
  );
};

export default Equipe;
