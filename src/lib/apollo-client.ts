import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { parseCookies } from "nookies";
import { auth } from "./NextAuth/auth";

export const { getClient, query } = registerApolloClient(() => {

    const authLink = setContext(async (_, { headers }) => {
        const token = await auth();

        return {
            headers: {
                ...headers,
                Authorization: token?.accessToken || ""
            }
        }
    })

    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
    })

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: ApolloLink.from([authLink, httpLink])
    });
});