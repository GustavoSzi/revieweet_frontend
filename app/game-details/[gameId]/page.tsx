import { Column, Container, Row } from "@/src/components/grid";
import { getClient } from "@/src/lib/apollo-client";
import { FIND_GAME_BY_ID } from "@/src/services/GameService";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import styles from "./styles.module.scss";
import { montserrat, poppins, roboto } from "@/fonts";
import { Button } from "@/src/components/buttons";

const imageUrl = process.env.NEXT_PUBLIC_IGDB_COVER_1080P_2X;

export default async function GameDetails({params}: any) {
    const { data: { findGameById: game } } = await getClient().query({ query: FIND_GAME_BY_ID, variables: { gameId:  params.gameId} });
    
    const releaseDate = game.release_date?.split(" ")[0];

    return (
        <Container customStyles={styles.gameDetailsContainer}>
            <Row>
                <Column desktop={7} customStyles={styles.detailsSection}>
                    <section className={styles.textSection}>
                        <h1 className={montserrat.className}>{game.title}</h1>
                        <p className={montserrat.className}>Release date: {releaseDate}</p>
                        <p className={`${poppins.className} ${styles.description}`}>{game.description}</p>
                    </section>
                    <section className={styles.btnSection}>
                        <a href={game.igdbUrl} target="_blank">
                        <Button 
                            customStyles={roboto.className}
                            btnSize="tall" 
                            btnType="igdb"
                        >
                            View on IGDB.com
                        </Button>
                        </a>
                        <Button 
                            customStyles={roboto.className} 
                            btnSize="tall"
                        >
                            Review It!
                        </Button>
                    </section>
                </Column>
                <Column desktop={4}>
                    {game.cover_image ? 
                        <Image 
                            src={imageUrl + game.cover_image}
                            width={432}
                            height={576}
                            alt={`${game.title} - Cover`}
                            priority
                            className={styles.cover}
                        /> : 
                        <p>No cover</p>
                    }
                </Column>
                <Column desktop={1}>
                    {/* <FaStar /> */}
                </Column>
            </Row>

            <Row customStyles={`${styles.reviewsSection} ${montserrat.className}`}>
                <Column>
                    <h1>Latest reviews for this game</h1>
                </Column>
                <Column desktop={9}>
                    <p>No reviews were submited for this game yet. Be the first!</p>
                </Column>
            </Row>
        </Container>
    )
}