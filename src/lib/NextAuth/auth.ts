import NextAuth from "next-auth"
import type { Provider } from "next-auth/providers"
import Credentials from "next-auth/providers/credentials"
import { getAuth } from "@/src/actions/login";

const providers: Provider[] = [
    Credentials({
      credentials: {
          username: {},
          password: {},
      },
      // @ts-ignore
      profile(profile: any) {
        return { role: profile.role ?? null}
      },
      async authorize({ username, password }) {
        try {
          const { data } = await getAuth({ username, password });
          const { token, role, name, email } = data.login;

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
]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  callbacks: {
    jwt({ token, user }) {
      if(user) {
        // @ts-ignore
        token.accessToken = user.token;
        // @ts-ignore
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken;
      session.role = token.role;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/auth"
  }
})