import { Column, Container, Row } from "@/src/components/grid";
import { GameSearchInput } from "@/src/components/inputs/game-search-input";

import styles from "./page.module.scss";
import { getClient } from "@/src/lib/apollo-client";
import { FIND_GAMES } from "@/src/services/GameService";

export default async function Home() {
  // const { data } = await getClient().query({ query: FIND_GAMES });

  // console.log(data);

  return (
    <main>
      <Container>
        <Row>
          <Column>
            <div className={styles.inputContainer}>
              <GameSearchInput />
            </div>
          </Column>
        </Row>
      </Container>
    </main>
  );
}
