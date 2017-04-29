import gql from "graphql-tag";

export const registerMutation = gql`
  mutation register($username: String!, $password: String!, $name: String, $email: String!) {
    register(username: $username, password: $password, name: $name, email: $email) {
      id
      name
      email
      username
    }
  }
`;
