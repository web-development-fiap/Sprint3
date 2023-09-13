import React from 'react';
import { ReactComponent as Imagem } from '../assets/imagem.svg';
import { ReactComponent as Camera } from '../assets/Camera.svg';
import { ReactComponent as VistoriaImg } from '../assets/Arquivo.svg';
import styles from './Vistoria.module.css';
import '../App.css';

const Vistoria = () => {
    return (
      <div className={`container ${styles.vistoria}`}>
        <h1>Vistoria Porto seguro BIKE</h1>
        <p>Preencha os Formularios com atenção.</p>
        <div className={styles.opcoes}>
          <h1>Selecione uma opção</h1>