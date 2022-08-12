const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const router = (req, res) => {
  const endPoint = req.url;

  if (endPoint === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('<h1>server wege3</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (endPoint.includes('public')) {
    const filePath = path.join(__dirname, '..', endPoint);
    const type = mime.lookup(endPoint);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('<h1>server wege3</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': type });
        res.end(data);
      }
    });
  } else if (endPoint.includes('search')) {
    const searchText = endPoint.split('/')[2];
    const jsonPath = path.join(__dirname, '.', 'data.json');
    const result = [];
    fs.readFile(jsonPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('<h1>elserver wege3</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if (searchText !== '') {
          const jsonData = JSON.parse(data.toString());
          for (const key in jsonData) {
            if (jsonData[key].name.toLowerCase().includes(searchText.toLowerCase())) {
              result.push({ key: jsonData[key] });
            }
          }
        }
        res.end(JSON.stringify(result));
      }
    });
  } else {
    res.writeHead(404);
    res.end('<h1>Not Found</h1>');
  }
};

module.exports = router;
