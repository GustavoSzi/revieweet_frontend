export type LoginInput = {
    username: string,
    password: string
}

export type LoginResponse = {
    login: {
        token: string,
        role: string,
        name: string,
        email: string
    }
}