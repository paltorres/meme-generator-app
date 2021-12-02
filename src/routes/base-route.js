module.exports = {
  path: '/',
  method: ['POST'],
  handler: (req, res) => {
    res.writeHead(200);
    res.end('Health check information displayed here!');
  },
};