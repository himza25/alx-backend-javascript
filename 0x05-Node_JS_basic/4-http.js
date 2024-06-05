const http = require('http');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});
app.listen(1245, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
