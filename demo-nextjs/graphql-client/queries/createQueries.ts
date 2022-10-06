import { gql } from '@apollo/client';

export const GET_ALL_AUTHOR = gql`
  query getallAuthors {
    authors {
      id
      name
      age
      books {
        title
        genre
      }
    }
  }
`;

export const GET_ALL_BOOK = gql`
  query getAllBooks {
    books {
      id
      title
      genre
      author {
        id
        name
        age
      }
    }
  }
`;

export const GET_AUTHOR = gql`
  query getAuthor($id: ID!) {
    author(id: $id) {
      id
      name
      age
      books {
        title
        genre
        author
      }
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: ID!) {
    book(id: $id) {
      title
      genre
      author {
        id
        name
        age
      }
    }
  }
`;
