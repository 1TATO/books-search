import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import booksListApi from '../../services/api';

import Header from '../../components/Header';

import { Container, Content, Form, Error, Books } from './styles';
import searchImg from '../../assets/searchImg.svg';
import notFound from '../../assets/not-found.svg';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    publisher: string;
    pageCount: number;
    imageLinks: {
      smallThumbnail: string;
    }
  }
}

const Search: React.FC = () => {
  const [searchBook, setSearchBook] = useState('');
  const [inputError, setInputError] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  async function handleSearchBooks(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!searchBook) {
      setInputError('Digite o nome do livro, autor ou editora');
      return;
    }

    try {
      const response = await booksListApi.get(`?q=/${searchBook}&maxResults=40`);

      setBooks(response.data.items);
      setSearchBook('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao buscar por esse livro');
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Header />

          <Form hasError={!!inputError} onSubmit={handleSearchBooks}>
            <input
              value={searchBook}
              onChange={(e) => setSearchBook(e.target.value)}
              placeholder="Nome do livro, autor ou editora"
            />
            <button type="submit">Pesquisar</button>
          </Form>

          {inputError && <Error>{inputError}</Error>}

          {books[0]
            ? <Books>
              {books.map(book => (
                <div key={book.id} className="book-box">

                  {book.volumeInfo.imageLinks !== undefined
                    ? <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                    : <img src={notFound} alt="Book cover not found" />
                  }

                  <div>
                    <p><span>{book.volumeInfo.title}</span></p>

                    <p><span>Autores: </span>{book.volumeInfo.authors}</p>

                    {book.volumeInfo.pageCount !== undefined
                      ? <p><span>Páginas: </span>{book.volumeInfo.pageCount}</p>
                      : <p><span>Páginas: </span>Não informado</p>
                    }

                    {book.volumeInfo.publisher !== undefined
                      ? <p><span>Editora: </span>{book.volumeInfo.publisher}</p>
                      : <p><span>Editora: </span>Não informado</p>
                    }

                  </div>

                  <Link to={`/details/${book.id}`}>
                    <button>
                      Detalhes
                  </button>
                  </Link>
                </div>
              ))}
            </Books>
            : <div className="search-img">
                <img src={searchImg} alt="Search" />
              </div>
          }
        </Content>
      </Container>
    </>
  );
};

export default Search;