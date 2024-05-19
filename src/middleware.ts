
import { NextRequest,NextResponse } from "next/server";
import { getUserCookie } from "./lib/cookies";





export async function middleware(request:NextRequest){

    
    const user = await getUserCookie();
    const path = request.nextUrl.pathname;
    
    const protectedPaths = ["/profile","/main","/leaderboard"]

    if(!user.isAuthenticated && protectedPaths.includes(path)){
        return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
    


    
    if((path === "/login" || path === "/register" || path === "/") && user.isAuthenticated){
        return NextResponse.redirect(new URL("/main",request.nextUrl));
    }


    

}



