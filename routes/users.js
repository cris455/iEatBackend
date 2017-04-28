var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.use((req, res, next) => {
  req.collection = req.db.collection("users");
  next();
})

router.post("/singin", (req, res, next) => {
  let body = req.body;
  req.collection.findOne({ usuario: body.usuario, contraseña: body.contraseña }).then(doc => {
    if (doc) {
      res.send({ success: true, user: doc });
    } else {
      res.send({ success: false });
    }
  }).catch(err => {
    res.send({ success: false });
  });
});
module.exports = router;
