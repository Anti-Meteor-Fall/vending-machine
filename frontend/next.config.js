module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_HOST_ADDRES,
        port: "8000",
      },
    ],
  },
  plugins: ["@emotion/babel/plugin"],
};

