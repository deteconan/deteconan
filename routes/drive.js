const express = require('express');
const router = express.Router();
const { upload, list } = require('../helpers/upload');

let uploading = false;

router.post('/upload', async function (req, res) {
  try {
    if (!uploading) {
      uploading = true;
      const flux = req.body.flux;
      console.log(flux);

      for (let f of flux) {
        await upload(f.src, f.ep);
      }

      uploading = false;
      await res.json('uploaded');
    } else {
      await res.json('Already uploading');
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
