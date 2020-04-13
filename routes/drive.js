const express = require('express');
const router = express.Router();
const { upload, list } = require('../helpers/upload');

let uploading = false;

router.post('/upload', async function (req, res) {
  try {
    if (!uploading) {
      uploading = true;
      const flux = req.body.flux;
      //console.log(flux);
      let promises = [];

      let files = await list();
      files = files.map(f => f.name);

      for (let f of flux) {
        if (files.indexOf(f.ep.toString()) === -1) {
          promises.push(
              new Promise((resolve, reject) => {
                upload(f.src, f.ep).then(res => {
                  resolve(res);
                }).catch(err => {
                  reject(err);
                });
              })
          );
        }
      }

      Promise.allSettled(promises).then(() => {
        uploading = false;
      }).catch(err => {
        console.error(err);
      });
      res.json('started');
    } else {
      res.json('Already uploading');
    }
  } catch (err) {
    uploading = false;
    console.error(err);
    res.status(400).json(err);
  }
});

router.get('/list', async function (req, res) {
  try {
    list().then(resp => {
      res.json(resp);
    }).catch(err => {
      res.status(400).json(err);
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.get('/uploading', function (req, res) {
  res.json(uploading);
});

module.exports = router;
