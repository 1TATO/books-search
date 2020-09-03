import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container, BookDetails } from './styles';
import notFound from '../../assets/not-found.svg';
import { FiArrowLeft } from 'react-icons/fi';

interface BookParams {
  id: string;
}

interface Detail {
  volumeInfo: {
    title: string;
    authors: string;
    publisher: string;
    pageCount: number;
    averageRating: number;
    ratingsCount: number;
    language: string;
    previewLink: string;
    infoLink: string;
    imageLinks: {
      smallThumbnail: string;
    }
  },
  saleInfo: {
    buyLink: string;
  }
}

const Details: React.FC = () => {
  const [book, setBook] = useState<Detail | null>(null);

  const { params } = useRouteMatch<BookParams>();

  useEffect(() => {
    api.get(`/${params.id}`).then(response => {
      setBook(response.data);
    });
  }, [book, params.id]);

  return (
    <>
      <Header />

      <Container>
        {book && (
          <BookDetails>
            <h2>{book.volumeInfo.title}</h2>

            {book.volumeInfo.imageLinks !== undefined
              ? <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
              : <img src={notFound} alt="Book cover not found" />
            }

            <div className="info">
              <p><span>Autores: </span>{book.volumeInfo.authors}</p>
              {book.volumeInfo.publisher !== undefined
                ? <p><span>Editora: </span>{book.volumeInfo.publisher}</p>
                : ''
              }
              {book.volumeInfo.pageCount !== undefined
                ? <p><span>Páginas: </span>{book.volumeInfo.pageCount}</p>
                : ''
              }
              {book.volumeInfo.language !== undefined
                ? <p><span>Idioma: </span>{book.volumeInfo.language}</p>
                : ''
              }
              {book.volumeInfo.averageRating !== undefined
                ? <p><span>Classificação média: </span>{book.volumeInfo.averageRating} - {book.volumeInfo.ratingsCount} avaliações</p>
                : ''
              }
            </div>

            <a href={book.volumeInfo.infoLink} target="__blank">Amostra</a>
            <a href={book.saleInfo.buyLink} target="__blank">Comprar</a>
          </BookDetails>
        )}

        <Link to="/search">
          <FiArrowLeft />
        </Link>
      </Container>
    </>
  );
};

export default Details;