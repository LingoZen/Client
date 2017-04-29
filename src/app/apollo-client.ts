import {ApolloClient, createNetworkInterface} from "apollo-client";

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: `http://localhost:3000/api/gql`
    })
});

export function provideApolloClient(): ApolloClient {
    return client;
}
