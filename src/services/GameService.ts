import { gql } from "@apollo/client";

export const FIND_GAMES = gql`
    query {
        findGames {
            content {
                title
                id
            }
            number
            size
            totalElements
            totalPages
            isFirst
            isLast
        }
    }
`