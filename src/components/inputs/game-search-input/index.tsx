"use client"

import { ChangeEvent, useEffect, useRef, useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6";

import styles from "./styles.module.scss";
import { useLazyQuery } from "@apollo/client";
import { FIND_GAMES_BY_TITLE_AND_PAGE } from "@/src/services/GameService";
import { SmallLoader } from "../../small-loader";
import type { SearchGame } from "@/src/types/GameTypes";
import { SearchGameResult } from "../../search-game-result";
import { FindGames } from "@/src/types/graphql/Game";
import { useRouter } from "next/navigation";

export function GameSearchInput() {
    const router = useRouter();
    const [findGamesByTitle, { loading, error, data }] = useLazyQuery<FindGames>(
        FIND_GAMES_BY_TITLE_AND_PAGE
    );

    const [searchValue, setSearchValue] = useState("");
    const [shouldShowResults, setShouldShowResults] = useState(false);

    const inputRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setSearchValue(e.target.value.length <= 0 ? "" : e.target.value);
    }

    async function handleFindGames(linesPerPage = 4) {
        findGamesByTitle({
            variables: {
                title: searchValue, 
                linesPerPage
            }
        });
        setShouldShowResults(true);
    }

    function handleSubmit() {
        if(!searchValue) return;
        router.push(`/search-results?game-title=${searchValue}`);
    }

    useEffect(() => {
        if(searchValue.length >= 4) {
            handleFindGames();
            return;
        }
        setShouldShowResults(false);
    }, [searchValue]);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if(
                inputRef.current && 
                !inputRef.current.contains(event.target as Node) &&
                !listRef?.current?.contains(event.target as Node)
            )
                setShouldShowResults(false);
        }
        
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <div className={styles.searchSectionContainer}>
            <div ref={inputRef} className={styles.inputContainer}>
                <input
                    onFocus={() => { 
                        if(data?.findGames?.content) 
                            setShouldShowResults(true); 
                        }
                    }
                    value={searchValue} 
                    onChange={handleOnChange} 
                    placeholder="Search for a game..."
                    className={styles.input}
                />
                <div className={styles.buttonContainer} onClick={handleSubmit}>
                    <FaMagnifyingGlass color='#FFF' size={24} />
                </div>
            </div>
            {((loading || data) && shouldShowResults) && (
                <div ref={listRef} className={styles.resultsContainer}>
                    {loading && (
                        <div className={styles.loaderContainer}>
                            <SmallLoader />
                        </div>)}

                    {data?.findGames?.content?.map((game: SearchGame) => {
                        return <SearchGameResult game={game} />
                    })}
                    <div className={styles.moreResults}>
                        <p>To see {data?.findGames?.content.length === 0 ? "" : "more"} games, click on the Search button</p>
                    </div>
                </div>
            )}
        </div>
    )
}