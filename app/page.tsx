import { Column, Container, Row } from "@/src/components/grid";
import { GameSearchInput } from "@/src/components/inputs/game-search-input";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session: ', session);
  } catch (error) {
    console.error('Error retrieving session:', error);
  }

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
