import { gql } from "@apollo/client";

export const LOG_IN = gql`
    mutation Login($username: String!, $password: String!) {
        login(loginDTO: {
            username: $username
            password: $password
        }) {
            token
            role
            email
            name
        }
    }
`