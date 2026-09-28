/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/databaza-biomasy',
        destination: '/databaza-biomasy/index.html',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        // Proxy the entire app, including its relative links, scripts and data.
        // The index.html entry keeps relative URLs inside this directory.
        source: '/databaza-biomasy/:path*',
        destination: 'https://umbaja.github.io/Mapa-producentv/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
