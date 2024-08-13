import { gql } from "@apollo/client";

export const FIND_GAMES = gql`
    query FindGames {
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

export const FIND_GAMES_BY_TITLE_AND_PAGE = gql`
    query FindGamesByTitleAndPage($title: String, $page: Int, $linesPerPage: Int) {
        findGames(title: $title, page: $page, linesPerPage: $linesPerPage) {
            content {
                title
                id
                cover_image
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