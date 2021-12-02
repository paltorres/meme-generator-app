require('dotenv').config();
const { startServer } = require('./server');

const PORT = process.env.PORT;

startServer({ port: PORT });
