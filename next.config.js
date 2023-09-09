/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.discordapp.com', 'bencan.net', 'i.imgur.com', 'skillicons.dev']
  }
};

module.exports = nextConfig;