import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  height: 80vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .search-img {
    margin: 0 auto;
    margin-top: 5.5rem;

    img {
      width: 45rem;
      height: 37.5rem;
    }

    @media (max-width: 900px) {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const Form = styled.form<FormProps>`
  margin: 1rem auto;
  max-width: 46rem;
  height: 3.5rem;
  display: flex;

  input {
    width: 35rem;
    margin-right: 2rem;
    border-radius: 0.3rem;
    border: 3px solid var(--secondary-color);
    padding: 0.6rem 0.5rem;
    font-size: 1.3rem;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}
  }

  button {
    border-radius: 0.3rem;
    border: 0;
    background-color: var(--secondary-color);
    color: white;
    padding: 0.6rem 1.3rem;
    transition: background-color 0.2s;
    
    &:hover {
      background: ${shade(0.2, '#34325E')};
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      margin-bottom: 1rem;
      width: 100%;
    }

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin: 0.5rem 11rem;

  @media (max-width: 900px) {
    margin-top: 2.6rem;
  }
`;

export const Books = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
  box-sizing: border-box;

  .book-box {
    background-color: #fff;
    display: flex;
    width: 22rem;
    height: 15rem;
    box-shadow: 0.2rem 0.2rem 0.2rem #00000025;
    border-radius: 5px;
    position: relative;

    img {
      width: 50%;
      height: 100%;
    }

    div {
      font-size: 0.9rem;
      line-height: 1.5rem;
      padding: 1rem;

      span {
        font-weight: bold;
      }
    }

    a {
      position: absolute;
      bottom: 1rem;
      right: 3rem;

      button {
        border-radius: 5px;
        background-color: var(--primary-color);
        border: none;
        padding: 0.6rem 1.3rem;
        font-size: 1rem;
        font-weight: bold;

        &:hover {
          background: ${shade(0.1, '#59AFE6')};
        }
      }
    }

    @media (max-width: 780px) {
      display: flex;
      width: 100%;
    }
  }

  @media (max-width: 1250px) {
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }

  @media (max-width: 900px) {
    margin: 4rem auto;
  }

  @media (max-width: 780px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;