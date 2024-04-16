import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export function middleware(request: NextRequest) {
  if (
    request.headers.get('IS_CLOUDFRONT_REQUEST') === 'YES' ||
    request.nextUrl.hostname === 'localhost'
  ) {
    return NextResponse.next({ request });
  }

  // return new NextResponse(null, { status: 405 });
}

// export const config = {
//   matcher: ['/*'],
// };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/',
  ],
};
