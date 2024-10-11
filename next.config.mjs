/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/home',
                destination: '/',
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
