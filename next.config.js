/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  styledComponents: true,
  // compiler: {
  //   removeConsole: true,
  // },
  ignoreDuringBuilds: [
    /critical dependency:/,
    /The pseudo class ":first-child" is potentially unsafe when doing server-side rendering/,
  ],
}

module.exports = nextConfig
