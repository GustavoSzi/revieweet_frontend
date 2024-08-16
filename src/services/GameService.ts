import { gql } from "@apollo/client";

export const SEARCH_GAMES = gql`
    query SearchGames($title: String, $page: Int, $linesPerPage: Int) {
        searchGames(title: $title, page: $page, linesPerPage: $linesPerPage) {
            content {
                title
                id
                cover_image
            }
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

export const FIND_GAME_BY_ID = gql`
    query FindGameById($gameId: ID) {
        findGameById(id: $gameId) {
            title
            id
            cover_image
            description
            platforms { id, name }
            igdbId
            igdbUrl
            release_date
        }
    }
`