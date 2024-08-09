import { Column, Container, Row } from "@/src/components/grid";
import { GameSearchInput } from "@/src/components/inputs/game-search-input";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Container>
        <Column>
          <div className={styles.inputContainer}>
            <GameSearchInput />
          </div>
        </Column>
      </Container>
    </main>
  );
}
