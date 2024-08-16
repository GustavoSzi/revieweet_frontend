"use client"

import GameCard from "@/src/components/game-card";
import { Column, Container, Row } from "@/src/components/grid";
import { GameSearchInput } from "@/src/components/inputs/game-search-input";
import Separator from "@/src/components/separator";
import { SmallLoader } from "@/src/components/small-loader";
import { SEARCH_GAMES } from "@/src/services/GameService";
import { SearchGames } from "@/src/types/graphql/Game";
import { useApolloClient, useLazyQuery } from "@apollo/client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

import styles from "./styles.module.scss";

const imageUrl = process.env.NEXT_PUBLIC_IGDB_COVER_1080P;

export default function GameSearchResults() {
    const router = useRouter();
    const gameTitle = useSearchParams().get("game-title");
    const [searchGames, { loading, error, data }] = useLazyQuery<SearchGames>(
        SEARCH_GAMES
    );
    const apolloClient = useApolloClient();

    useEffect(() => {
        console.log(data)
    }, [data]);

    useEffect(() => {
        if(!gameTitle) {
            router.push("/");
            return;
        }

        apolloClient.cache.reset().then(() => console.log("Cache cleared"));
        
        searchGames({
            variables: {
                title: gameTitle,
                page: 0,
                linesPerPage: 25
            }
        })
    }, [gameTitle]);

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
                </Row>
                
                <Row>
                    <Column>
                        <p className={styles.totals}>Showing {data?.searchGames?.content.length} results for "<b>{gameTitle}</b>"</p>
                    </Column>
                </Row>
                
                <Separator />
                
                <Row>
                    {data?.searchGames?.content.map((game) => {
                        return (
                            <Column desktop={2}>
                                <GameCard game={game} />
                            </Column>
                        )
                    })}
                </Row>
            </Container>
        </main>
    )
}