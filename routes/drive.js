const express = require('express');
const router = express.Router();
const { upload } = require('../helpers/upload');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', async function (req, res) {
  try {
    const flux = req.body.flux;
    console.log(flux);

    for (let f of flux) {
      await upload(f.src, f.ep);
    }

    res.json('uploaded');
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
