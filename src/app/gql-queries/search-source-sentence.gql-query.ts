import gql from "graphql-tag";

export const searchSourceSentencesQuery = gql`
  query searchSourceSentences($searchString: String!, $languageId: String!) {
    searchSourceSentences(searchString: $searchString, languageId: $languageId) {
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
