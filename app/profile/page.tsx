import { Container } from "@/src/components/grid";
import { auth } from "@/src/lib/NextAuth/auth"

export default async function Profile() {
    const session = await auth();

    return (
        <Container>
            <p>{session?.user.name}</p>
        </Container>
    )
}