const express = require('express');
const router = express.Router();
const { upload, list } = require('../helpers/upload');

let uploading = false;
let uploadingEpisode = null;

router.post('/upload', async function (req, res) {
  try {
    let password = req.body.password;

    if (password != 'jesuiskudo') {
      res.status(401).json('Wrong password');
      return;
    }

    if (!uploading) {
      let flux = req.body.flux;

      let files = await list();
      files = files.map(f => f.name);

      flux = flux.filter(f => files.indexOf(f.ep.toString()) === -1);

      new Promise(async () => {
        try {
          uploading = true;
          for (let f of flux) {
            uploadingEpisode = f.ep;
            await upload(f.src, f.ep);
          }
        } catch (err) {
          console.log(err);
        } finally {
          uploadingEpisode = null;
          uploading = false;
        }
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
  res.json({
    uploading: uploading,
    uploadingEpisode: uploadingEpisode
  });
});

module.exports = router;
