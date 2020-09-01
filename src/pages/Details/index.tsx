import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container, BookDetails } from './styles';

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

            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />

            <div className="info">
              <p><span>Autores: </span>{book.volumeInfo.authors}</p>
              <p><span>Editora: </span>{book.volumeInfo.publisher}</p>
              <p><span>Paginas: </span>{book.volumeInfo.pageCount}</p>
              <p><span>Idioma: </span>{book.volumeInfo.language}</p>
              <p><span>Classificacao media: </span>{book.volumeInfo.averageRating} - {book.volumeInfo.ratingsCount} avaliacoes</p>
            </div>

            <a href={book.volumeInfo.infoLink} target="__blank">Amostra</a>
            <a href={book.saleInfo.buyLink} target="__blank">Comprar</a>
          </BookDetails>
        )}
      </Container>
    </>
  );
};

export default Details;