const withPWA = require('@ducanh2912/next-pwa').default({dest: 'public'})

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
