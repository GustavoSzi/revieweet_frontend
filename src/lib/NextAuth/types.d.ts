import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        role: string,
        accessToken: string,
        user: {
            name: string,
            email: string,
            role: string
        } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string,
        role: string
    }
}