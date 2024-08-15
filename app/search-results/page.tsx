"use client"

import { Column, Container, Row } from "@/src/components/grid";
import { GameSearchInput } from "@/src/components/inputs/game-search-input";
import { SmallLoader } from "@/src/components/small-loader";
import { SEARCH_GAMES } from "@/src/services/GameService";
import { SearchGames } from "@/src/types/graphql/Game";
import { useLazyQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

const imageUrl = process.env.NEXT_PUBLIC_IGDB_COVER_1080P;

export default function GameSearchResults() {
    const router = useRouter();
    const gameTitle = useSearchParams().get("game-title");
    const [searchGames, { loading, error, data }] = useLazyQuery<SearchGames>(
        SEARCH_GAMES,
        { fetchPolicy: 'no-cache' }
    );

    useEffect(() => {
        console.log(data)
    }, [data]);

    useEffect(() => {
        if(!gameTitle) {
            router.push("/");
            return;
        }
        
        searchGames({
            variables: {
                title: gameTitle,
                page: 0,
                linesPerPage: 25
            }
        })
    }, [gameTitle])

    return (
        <main>
            <Container>
                <Row>
                    <Column>
                        <GameSearchInput />
                    </Column>
                </Row>
                <Row>
                    {loading && <SmallLoader />}
                    {data?.searchGames?.content.map((game) => {
                        return (
                            <Column desktop={2}>
                                <Image 
                                    src={`${imageUrl}${game.cover_image}`}
                                    width={207}
                                    height={296}
                                    alt={game.title}
                                />
                                <p>{game.title}</p>
                            </Column>
                        )
                    })}
                </Row>
            </Container>
        </main>
    )
}