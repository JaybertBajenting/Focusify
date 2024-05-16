
import { get } from "https";
import { url } from "inspector";
import { NextRequest,NextResponse } from "next/server";
import { off } from "process";
import { getUserCookie } from "./lib/cookies";





export async function middleware(request:NextRequest){

    
    const user = await getUserCookie();
    const path = request.nextUrl.pathname;
    
    const protectedPaths = ["/profile","/main","/medal"]

    if(!user.isAuthenticated && protectedPaths.includes(path)){
        return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
    


    
    if((path === "/login" || path === "/register" || path === "/") && user.isAuthenticated){
        return NextResponse.redirect(new URL("/main",request.nextUrl));
    }


    

}



