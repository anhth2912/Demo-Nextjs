import gql from 'graphql-tag';

export const CREATE_AUTHOR = gql`
  mutation createAuthor($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String, $genre: String, $authorId: ID!) {
    createBook(title: $title, genre: $genre, authorId: $authorId) {
      title
      genre
      author {
        name
        age
      }
    }
  }
`;
