const http = require('http');

const server = http.createServer();
const port = Process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
