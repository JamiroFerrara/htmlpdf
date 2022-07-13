module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://signalr.tecnoace.eu/:path*',
          },
        ]
      },
  };
