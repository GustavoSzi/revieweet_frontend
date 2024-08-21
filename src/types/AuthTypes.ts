export type User = {
    id: any;
    token?: string;
    role: string;
    name: string;
    email: string;
}

export type UserFromToken = {
    findProfileByToken: {
        firstName: string,
        lastName?: string,
        username: string
    }
}