import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { getClient } from "@/src/lib/apollo-client";
import { LOG_IN } from "@/src/services/AuthService";
import type { User } from "@/src/types/AuthTypes";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: "text" },
                password: { label: 'Password', type: "password" },
            },
            async authorize(credentials): Promise<User | null> {
                console.log(credentials);
                try {
                    const response = await getClient().mutate({
                        mutation: LOG_IN,
                        variables: {
                            username: credentials?.username,
                            password: credentials?.password
                        }
                    });

                    console.log(response);

                    const { token, role, name, email } = response.data.login;

                    if(token) {
                        return {
                            id: 'user-id',
                            token,
                            role,
                            name,
                            email
                        }
                    }
                    return null;

                } catch(e) {
                    console.log(e);
                    return null;
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            console.log('JWT Callback - Token:', token, 'User:', user);
            if(user) {
                // @ts-ignore
                token.accessToken = user.token;
                //@ts-ignore
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            console.log(token)
            // @ts-ignore
            session.accessToken = token.accessToken;
            // @ts-ignore
            session.user.role = token.role;
            return session;
        },
    },
    pages: {
        signIn: "/auth"
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }