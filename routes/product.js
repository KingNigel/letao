var express = require('express'),
    router = express.Router(),
    Product = require('../models/product.js');

router.get("/queryProduct",function(req,res) {
     var product=new Product({
           proName  : req.query.proName?req.query.proName:'',
           price  : req.query.price?req.query.price:'',
           num  : req.query.num?req.query.num:'',
           brandId  : req.query.brandId?req.query.brandId:''
     })
    Product.queryProduct(product,function(err,data){
      if (err) return res.send({ "error": 403, "message": "数据库异常！" });
      res.send(data);
    })
});

router.get("/queryProductDetail",function(req,res) {
    Product.queryProductDetail(req.query.id,function(err,data){
      if (err) return res.send({ "error": 403, "message": "数据库异常！" });
      res.send(data);
    })
});