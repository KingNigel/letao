var express = require('express'),
    router = express.Router(),
    Category = require('../models/category.js');

router.get("/queryTopCategory",function(req,res) {
    Category.queryTopCategory(function(err,data){
      if (err) return res.send({ "error": 403, "message": "数据库异常！" });
      res.send(data);
    })
});

router.get("/queryProductDetail",function(req,res) {
    Product.queryProductDetail(function(err,data){
      if (err) return res.send({ "error": 403, "message": "数据库异常！" });
      res.send(data);
    })
});


module.exports = router;