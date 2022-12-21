import { NextRequest, NextResponse } from 'next/server';

//implemented dummy data
const isUserRoute = (pathname: string) => {
  return pathname.startsWith('/api/users');
};

//implemented dummy data
export async function middleware(req: NextRequest) {
  const role = req.headers.get('authorization')|| '';
  const { pathname } = req.nextUrl;

  //check authorization with dummy data
  if (isUserRoute(pathname) && !['user', 'admin'].includes(role)) {
    return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
  }

  return NextResponse.next();
}

//implemented dummy data
export const config = {
  matcher: ['/api/users/:path*', '/api/admin/:path*'],
};
