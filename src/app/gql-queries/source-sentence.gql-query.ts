import gql from "graphql-tag";

export const sourceSentenceQuery = gql`
  query sourceSentence($id: ID!) {
    sourceSentence(id: $id) {
      id
      text
      user {
        id
        username
      }
      language {
        id
        englishName
      }
      reactions {
        id
        type
      } 
      comments {
        id
        text
        language {
          id
          englishName
        }
      }
      translations {
        id
        text
        language {
          id
          englishName
        }
        reactions {
          id
          type
        }
        comments {
          id
          text
          language {
            id
            englishName
          }
        }
      }
    }
  }
`;
