import gql from "graphql-tag";

export const searchSourceSentencesQuery = gql`
  query searchSourceSentences($searchQuery: String!) {
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
