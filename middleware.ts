import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    '/'
]);

export default clerkMiddleware((auth, reqest) => {
    if (isProtectedRoute(reqest)) {
        auth().protect();
    }
    return NextResponse.next()
});
  
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};