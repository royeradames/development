/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'a-us.storyblok.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
