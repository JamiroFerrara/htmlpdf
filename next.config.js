module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://signalr.tecnoace.eu:15191/:path*',
          },
        ]
      },
  };
