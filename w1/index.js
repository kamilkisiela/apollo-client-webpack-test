import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface();
const client = new ApolloClient({networkInterface});
