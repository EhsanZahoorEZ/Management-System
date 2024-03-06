export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/users/:path*'],
};



// export {default} from 'next-auth/middleware';

// export const config = {
//     matcher: ['/user/:path*', '/api/:path*'],
// };