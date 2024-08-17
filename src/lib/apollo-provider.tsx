"use client"

import { ApolloLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ApolloClient, ApolloNextAppProvider, InMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support"
import { parseCookies } from "nookies";

function makeClient() {
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
    })

    const authLink = setContext((_, { headers }) => {
        let token = "";

        if(typeof window !== "undefined") {
            token = localStorage.getItem("token") || "";
        } else {
            const cookies = parseCookies();
            token = cookies.token || "";
        }

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ""
            }
        }
    })

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: typeof window === "undefined"
            ? ApolloLink.from([
                new SSRMultipartLink({
                    stripDefer: true
                }),
                authLink.concat(httpLink)
            ]) :
            authLink.concat(httpLink)
    })
}

export function ApolloWrapper({children}: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}