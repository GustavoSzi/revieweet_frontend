import { SearchGame } from "@/src/types/GameTypes";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface SearchGameResultProps {
    game: SearchGame
}

const imgUrl = process.env.NEXT_PUBLIC_IGDB_IMAGE_URL + "/t_thumb_2x/";

export function SearchGameResult({ game }: SearchGameResultProps) {

    return (
    <Link className={styles.gameResultContainer} href={`/game-details/${game.id}`}>
        <div className={styles.imgContainer}>
            <Image src={imgUrl + game.cover_image} width={72} height={72} alt={game.title} />
        </div>
        <div className={styles.title}>
            <p>{game.title}</p>
        </div>
        <div className={styles.seeMore}>
            <FaChevronRight size={26}/>
            <p>See more</p>
        </div>
    </Link>
    )
}