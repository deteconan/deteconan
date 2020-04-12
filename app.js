const express = require('express');
const http = require('http');
const driveRouter = require('./routes/drive');
const path = require('path');

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

app.use(express.static(`dist`));

app.get(`/`, function(req, res) {
  res.sendFile(path.join(__dirname, `dist`, `index.html`));
});

app.use('/drive', driveRouter);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
server.on('listening', () => {
  console.log('Users service listening on ' + port);
});
