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
        name
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
          name
        }
      }
      translations {
        id
        text
        language {
          id
          name
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
            name
          }
        }
      }
    }
  }
`;
