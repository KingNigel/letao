var express = require('express'),
  router = express.Router(),
  Address = require('../models/address.js');

router.post("/addAddress", function (req, res) {
  var address = new Address({
    userId: req.session.user.id,
    address: req.body.address ? req.body.address : '',
    addressDetail: req.body.addressDetail ? req.body.addressDetail : ''
  })
  Address.addAddress(address, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    res.send({ "success": true });
  })
});

router.post("/updateAddress", function (req, res) {
   var address = new Address({
    id: req.body.id,
    address: req.body.address ? req.body.address : '',
    addressDetail: req.body.addressDetail ? req.body.addressDetail : ''
  })
  Address.updateAddress(address, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    res.send({ "success": true });
  })
});
router.get("/deleteAddress", function (req, res) {
  Cart.deleteCart(req.query.id, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    res.send({ "success": true });
  })
});
router.get("/queryCart", function (req, res) {
  Cart.queryCart(req.session.user.id, function (err, data) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    res.send(data);
  })
});