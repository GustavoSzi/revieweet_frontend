import { Column, Container, Row } from "@/src/components/grid";

export default function GameDetails({ params }: any) {
    return (
        <Container>
            <Row>
                <Column>
                    <p>{params.gameId}</p>
                </Column>
            </Row>
        </Container>
    )
}