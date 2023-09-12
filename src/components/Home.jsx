import React from 'react';
import { ReactComponent as Bike } from '../assets/Bike.svg';
import { ReactComponent as Vistoria } from '../assets/VistoriaImg.svg';
import { ReactComponent as Nota } from '../assets/Nota.svg';
import { ReactComponent as Cadastro } from '../assets/Cadastro.svg';
import { ReactComponent as Camera } from '../assets/Camera1.svg';
import { ReactComponent as Envelope } from '../assets/envelope.svg';
import Img from '../assets/Group.png';
import '../App.css';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className="container2">
        <div className={styles.home}>
          <div className={styles.bike}>
            <h1>O seu seguro do seu jeito.</h1>
            <p>
              Em parceria com a empresa MELFE SOLUTIONS, nós da porto seguro
              oferecemos um serviço dinâmico e ágil para sua bicicleta.
            </p>
            <Link to="/vistoria">
              <button className="button">Solicitar seguro</button>
            </Link>
          </div>
          <Bike />
        </div>