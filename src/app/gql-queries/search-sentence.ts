import gql from "graphql-tag";

export const searchSentences = gql`
  query searchSentences($searchQuery: String!) {
    searchSourceSentences(searchQuery: $searchQuery) {
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
      }
      translations {
        id
      }
    }
  }
`;
