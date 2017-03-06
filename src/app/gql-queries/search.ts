import gql from "graphql-tag";

export const search = gql`
  query search($searchQuery: String!) {
    searchSourceSentences(searchQuery: $searchQuery) {
      id
      text
      userId
      languageId
      reactions {
        id
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
