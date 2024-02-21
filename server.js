const http = require('http');
const url = require('url');
const { getHomePage, getAboutPage, getUsersPage } = require('./routes');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  switch (parsedUrl.pathname) {
    case '/':
      getHomePage(req, res);
      break;
    case '/about':
      getAboutPage(req, res);
      break;
    case '/users':
      getUsersPage(req, res);
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
