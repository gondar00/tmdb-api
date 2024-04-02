/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "images.unsplash.com", "www.themoviedb.org"],
  },
};

export default nextConfig;
