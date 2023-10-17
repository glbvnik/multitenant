/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({dest: 'public'})

module.exports = withPWA(
    {
        output: 'standalone',
        trailingSlash: true,
        images: {
            remotePatterns: [
                {
                    protocol: "http",
                    hostname: "**",
                },
            ],
        },
    })
