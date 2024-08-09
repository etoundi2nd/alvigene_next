/** @type {import('next').NextConfig} */
const nextConfig = {

    // experimental: {
    //     instrumentationHook: true
    // },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3001',
                pathname: '/rails/active_storage/disk/**'
            }
        ]
    }
}

export default nextConfig
