import React from 'react';

import Header from '../../components/Header';

import homeImg from '../../assets/homeImg.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <img src={homeImg} alt="Home" />
    </>
  );
};

export default Dashboard;