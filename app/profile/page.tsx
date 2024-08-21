import { Container } from "@/src/components/grid";
import { getClient } from "@/src/lib/apollo-client";
import { auth } from "@/src/lib/NextAuth/auth"
import { FROM_TOKEN } from "@/src/services/AuthService";
import { UserFromToken } from "@/src/types/AuthTypes";

export default async function Profile() {
    const { data: { findProfileByToken: profile } } = await getClient().query<UserFromToken>({ 
        query: FROM_TOKEN
     });

     console.log(profile)

    return (
        <Container>
            <p>{profile.firstName}</p>
        </Container>
    )
}