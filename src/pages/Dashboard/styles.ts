import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .welcome {
    max-width: 26.8rem;
    margin-right: 50px;

    h2 {
      font-size: 2.5rem;
      color: var(--secondary-color);
      margin-bottom: 0.6rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    span {
      color: var(--secondary-color);
      font-weight: bold;
    }

    .search {
      background-color: var(--primary-color);
      border: none;
      padding: 0.5rem 1rem;
      margin-top: 2.2rem;
      border-radius: 0.3rem;
      width: 12.8rem;
      height: 4.3rem;

      a {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        transition: background-color 0.2s;
        
        svg {
          margin-left: 1rem;
        }
      }

      &:hover {
        background: ${shade(0.1, '#59AFE6')}
      }
    }
  }

  .home-img {
    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    h2 {
      margin-top: 2rem;
    }

    .search {
      margin-bottom: 4rem;
    }

    .home-img {
      width: 80%;
    }
  }
`;