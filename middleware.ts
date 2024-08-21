import { NextRequest } from "next/server";
import { RouterMiddleware } from "./src/router";

export async function middleware(request: NextRequest) {
    
    return RouterMiddleware(request);
}