import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Content } from './styles';
import { FiArrowRight } from 'react-icons/fi';
import homeImg from '../../assets/homeImg.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <div className="welcome">
            <h2>O que você quer ler hoje?</h2>

            <p>
              Encontre os livros que você procura digitando o
              <span> nome do livro</span>, <span>autor</span> ou
              <span> editora</span>.
            </p>

              <button className='search'>
            <Link to="/search">
                Pesquisar
                <FiArrowRight />
            </Link>
              </button>
          </div>

          <div className="home-img">
            <img src={homeImg} alt="Home" />
          </div>

        </Content>
      </Container>
    </>
  );
};

export default Dashboard;