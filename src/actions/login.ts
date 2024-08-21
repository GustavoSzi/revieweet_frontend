"use server"

import { signIn, signOut } from "../lib/NextAuth/auth"
import { AuthFormFields } from "../types/FormTypes";

export async function parseClientLogin(data: AuthFormFields) {
    const response = await signIn("credentials", { username: data.email, password: data.password, redirectTo: "/" });

    return response;
}

export async function parseClientRegister(data: AuthFormFields) {
    
}

export async function getAuth({ username, password }: any) {
    const response = await fetch("http://localhost:8443/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            query: `
                mutation Login($username: String!, $password: String!) {
                    login(loginDTO: {
                        username: $username
                        password: $password
                    }) {
                        token
                        role
                        email
                        name
                    }
            }`,
            variables: {
                username,
                password
            }
        })
    });

    const json = await response.json();
    return json;
}

export async function logout() {
    await signOut();
}