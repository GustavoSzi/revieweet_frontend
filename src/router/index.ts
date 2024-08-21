import { NextRequest, NextResponse } from "next/server";
import { AdminRoutes, AuthenticatedRoutes, UnauthenticatedRoutes } from "./routes";
import { auth } from "../lib/NextAuth/auth";

function matchRoute(route: string, pathname: string) {
    const regex = new RegExp(`^${route.replace(/:[^\s/]+/g, '([\\w-]+)')}$`);
    return regex.test(pathname);
}

export async function RouterMiddleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const session = await auth();

    // console.log(session);
    if(
        (UnauthenticatedRoutes.some(route => matchRoute(route, pathname)) && !!session?.accessToken) ||
        (AuthenticatedRoutes.some(route => matchRoute(route, pathname)) && !session?.accessToken) || 
        (AdminRoutes.some(route => matchRoute(route, pathname)) && !(session?.role === "ADMIN"))
    ) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}