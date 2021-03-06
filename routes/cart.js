var express = require('express'),
  router = express.Router(),
  Cart = require('../models/cart.js');
  Page = require('../models/page.js');


router.post("/addCart", function (req, res) {
  var cart = new Cart({
    userId: req.session.user.id,
    productId: req.body.productId ? req.body.productId : '',
    num: req.body.num ? req.body.num : '',
    size: req.body.size ? req.body.size : ''
  })
  Cart.addCart(cart, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    res.send({ "success": true });
  })
});

router.post("/updateCart", function (req, res) {
  var cart = new Cart({
    id: req.body.id,
    num: req.body.num ? req.body.num : '',
    size: req.body.size ? req.body.size : ''
  })
  Cart.updateCart(cart, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    res.send({ "success": true });
  })
});
router.get("/deleteCart", function (req, res) {
  Cart.deleteCart(req.query.id, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    res.send({ "success": true });
  })
});
router.get("/queryCart", function (req, res) {
  var page = new Page({
    page: req.query.page ? parseInt(req.query.page) : 0,
    size: req.query.pageSize ? parseInt(req.query.pageSize) : 10,
  })
  Cart.queryCart(req.session.user.id, page, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    Cart.countCart(req.session.user.id,function (err, result) {
      if (err) return res.send({ "error": 403, "message": "数据库异常！" });
         page.count = result.count;
         page.data = data;
         console.log(page);
         res.send(page);
    })
  })
});


module.exports = router;