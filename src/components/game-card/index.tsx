import { SearchGame } from "@/src/types/GameTypes";
import Image from "next/image";

import styles from './styles.module.scss';
import { Button, SmallButton } from "../buttons";
import { useRouter } from "next/navigation";

interface GameCardProps {
    game: SearchGame
}

const imageUrl = process.env.NEXT_PUBLIC_IGDB_COVER_1080P;

export default function GameCard({ game }: GameCardProps) {

    const router = useRouter();

    function handleNavigation() {
        router.push(`/game-details/${game.id}`);
    }

    return (
        <div className={styles.gameCard}>
            <section className={styles.imageContainer}>
                {!!game.cover_image ?
                    <Image 
                    src={`${imageUrl}${game.cover_image}`}
                    width={207}
                    height={296}
                    alt={game.title}
                /> :
                    <p>No cover</p>
                }
            </section>
            <p>{game.title}</p>
            <Button 
                btnSize="small" 
                btnType="primary" 
                onClick={handleNavigation}
            >
                View Details {">"}
            </Button>
        </div>
    )
}