module.exports = {
  path: '/',
  method: ['GET'],
  handler: (req, res) => {
    res.writeHead(200);
    res.end('Health check information displayed here!');
  }
};