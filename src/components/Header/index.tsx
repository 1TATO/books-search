import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from './styles';

const Header: React.FC = () => {
  return (
    <Title>
      <Link to="/">
        <h1>Book search</h1>
      </Link>
    </Title>
  );
}

export default Header;