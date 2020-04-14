const express = require('express');
const http = require('http');
const driveRouter = require('./routes/drive');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const staticPage = serveStatic('dist', {});
app.use(staticPage);

app.get(/^((?!\/api\/).)*$/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});

app.use('/api/drive', driveRouter);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
  console.log('Users service listening on ' + port);
});
