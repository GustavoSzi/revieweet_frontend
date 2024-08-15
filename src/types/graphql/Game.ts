import { SearchGame } from "../GameTypes"

export type FindGames = {
    findGames: PaginatedResults<SearchGame>
}

export type SearchGames = { searchGames: PaginatedResults<SearchGame> }