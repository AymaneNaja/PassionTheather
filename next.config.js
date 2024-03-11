/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    reactStrictMode: true, images: { loader: "default", minimumCacheTTL: 60, domains: [ "image.tmdb.org" ], }, 
}

module.exports = nextConfig
