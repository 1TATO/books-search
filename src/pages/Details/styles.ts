import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 2rem auto;
  width: 100%;
  height: 75vh;
  box-shadow: 0.2rem 0.2rem 0.2rem #00000025;
  position: relative;

  > a {
    text-decoration: none;
    color: var(--primary-color);
    
    svg {
      width: 2.5rem;
      height: 2.5rem;
      margin: 1.5rem 0 0 5rem;
    }

    &:hover {
      color: ${shade(0.1, '#59AFE6')};
    }
  }
`;

export const BookDetails = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100%;
  text-align: center;
  padding: 0.6rem 1.5rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  img {
    width: 20rem;
    height: 20rem;
  }

  .info {
    text-align: left;
    margin-top: 3rem;

    p {
      font-size: 1.5rem;
      line-height: 1.8rem;

      span {
        font-weight: bold;
      }
    }
  }

  a {
    position: absolute;
    text-decoration: none;
    background-color: var(--primary-color);
    padding: 0.6rem 1.3rem;
    border-radius: 5px;
    font-weight: bold;
    left: 5rem;
    bottom: 1rem;
    color: black;
    margin-right: 10rem;

    & + a {
      margin-left: 10rem;
    }

    &:hover {
      background: ${shade(0.1, '#59AFE6')};
    }
  }
`;