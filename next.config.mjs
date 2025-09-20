/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/orders/notification",
        headers: [
          { 
            key: "Access-Control-Allow-Credentials", 
            value: "true" 
          }, 
          {
            key: "Access-Control-Allow-Origin",
            value: "https://sis-t.redsys.es:25443", //process.env.REDSYS_ORIGIN || "https://sis.redsys.es",
          }, 
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
