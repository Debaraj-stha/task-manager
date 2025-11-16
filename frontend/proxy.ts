import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("isLoggedIn")?.value; // login cookie name

  const homePage = req.nextUrl.pathname === "/";
  const loginPage = req.nextUrl.pathname === "/login";
  const dashboardPath = "/dashboard";

  // If cookie exists and user is on home or login, redirect to dashboard
  if (token && (homePage || loginPage)) {
    return NextResponse.redirect(new URL(dashboardPath, req.url));
  }

  // If cookie missing and user tries to access dashboard -> redirect home/login
  if (!token && req.nextUrl.pathname.startsWith(dashboardPath)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Otherwise continue normally
  return NextResponse.next();
}


