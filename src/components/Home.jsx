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
        <div className={styles.servico}>
        <h1>Nosso serviço</h1>
        <h2>Uma solução pensada em você.</h2>
        <p>
          Sabemos o quão cansativo e nada intuitivo pode ser um processo de
          acionamento de seguro veicular. Aplicativos mal otimizados,
          atendimentos demorados e suportes irregulares, tudo isso acaba aqui!
          Com apenas um cadastro simples e envio de alguns dados a segurança que
          seu veículo merece pode ser conquistada.
        </p>
        <h3>Tudo isso de forma completamente automatizada :)</h3>
        <h3>É só seguir o passo a passo!</h3>
      </div>
      <ul className={styles.lista}>
        <li>
          <Cadastro />
          <h1>Cadastro</h1>
          <p>Crie seu cadastro e insira seus dados.</p>
        </li>
        <li>
          <Vistoria />
          <h1>Vistoria de Imagens</h1>
          <p> Faça o upload das imagens dos 4 ângulos de sua bike.</p>
        </li>
        <li>
          <Camera />
          <h1>Vistoria de Vídeos</h1>
          <p>
            Faça o upload de um vídeo que exiba nitidamente a condição de sua
            bike.
          </p>
        </li>
        <li>
          <Nota />
          <h1>Vistoria de Notas Fiscais</h1>
          <p>
            Faça o upload dos documentos que comprovem a legitimidade da sua
            bike.
          </p>
        </li>
      </ul>
      <img className={styles.img} src={Img} alt="bike" />
      <div className={styles.duvida}>
        <div className={styles.duvida2}>
          <h1>Ficou alguma dúvida?</h1>
          <p>Fale diretamente conosco! É sempre um prazer te atender :)</p>
          <button className="button">Contatar suporte</button>
        </div>
        <Envelope className={styles.envelope} />
      </div>
    </div>
  );
};

export default Home;
