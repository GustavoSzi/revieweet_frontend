"use client"

import { Column, Container, Row } from "@/src/components/grid";
import { FIND_GAME_BY_ID } from "@/src/services/GameService";
import { useLazyQuery, useQuery } from "@apollo/client";
import Image from "next/image";
import { useEffect } from "react";

import styles from "./styles.module.scss";
import Link from "next/link";
import { poppins } from "@/fonts";

const imageUrl = process.env.NEXT_PUBLIC_IGDB_COVER_1080P;

export default function ReviewForm({ params }: any) {

    const [findGame, { data, loading }] = useLazyQuery(FIND_GAME_BY_ID);
    
    useEffect(() => {
        console.log(params.gameId)
        findGame({
            variables: {
                gameId: params.gameId
            }
        })
    }, [params.gameId]);

    useEffect(() => console.log(data), [data]);

    return (
        <Container>
            <Row>
                <Column desktop={3}>
                    <section className={styles.gameInfoContainer}>
                        <Link href={""}>{"<"} Go back</Link>
                        <Image
                            src={imageUrl + data?.findGameById.cover_image}
                            width={280}
                            height={370}
                            alt={`${data?.findGameById.title} - Cover`}
                        />

                        <div>
                            <p>{data?.findGameById.title}</p>
                            <p>{data?.findGameById.description}</p>
                        </div>
                    </section>
                </Column>
                <Column desktop={9}>
                    <p>Form</p>
                </Column>
            </Row>
        </Container>
    )
}