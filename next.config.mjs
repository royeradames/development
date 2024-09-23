/** @type {import('next').NextConfig} */
const nextConfig = {
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
