const http = require('http');
const route = require('./route');

const server = http.createServer(route.routeMapping);

server.listen(9090, () => console.log('Listening on port 9090...'));