import gql from "graphql-tag";

export const loginMutation = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      name
      email
      username
    }
  }
`;
