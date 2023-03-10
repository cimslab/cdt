/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  env: {
    MAPBOX_TOKEN: 'pk.eyJ1Ijoibmljby1hcmVsbGFubyIsImEiOiJjbGRkNzV1aDcwMHE5M3ZtcTA4OHZvdnZ2In0.62n_DqnBfOYRz2lNakP8IA',
  },
};

module.exports = nextConfig;
