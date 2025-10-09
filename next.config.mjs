/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.python.org",
      },
      {
        protocol: "https",
        hostname: "cdn.analyticsvidhya.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "developer.android.com",
      },
      {
        protocol: "https",
        hostname: "www.eccouncil.org",
      },
      {
        protocol: "https",
        hostname: "d1.awsstatic.com",
      },
      {
        protocol: "https",
        hostname: "uxdesign.cc",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",  // Added i.pravatar.cc here
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Added images.unsplash.com here
      },
       {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
       {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
       
      }
    ],
  },
};

export default nextConfig;
