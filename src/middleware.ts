import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(
  (auth, req) => {
    if (req.nextUrl.pathname === "/") return;
    if (req.nextUrl.pathname.startsWith("/login")) return;
    if (req.nextUrl.pathname.startsWith("/sign-up")) return;
    auth().protect();
  },
  { signInUrl: "/login" }
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/sw.js"],
};
