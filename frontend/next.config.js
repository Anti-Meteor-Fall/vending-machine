module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: "192.168.148.225" ,
        port: '8000',
      },
    ],
  },
  plugins:["@emotion/babel/plugin"]
}