import { Column, Container, Row } from "@/src/components/grid";
import { GameSearchInput } from "@/src/components/inputs/game-search-input";

export default async function Home() {
  // const { data } = await getClient().query({ query: FIND_GAMES });

  // console.log(data);

  return (
    <main>
      <Container>
        <Row>
          <Column>
              <GameSearchInput />
          </Column>
        </Row>
        <Row>
          <p>Text</p>
        </Row>
      </Container>
    </main>
  );
}
