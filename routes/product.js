var express = require('express'),
    router = express.Router(),
    Product = require('../models/product.js'),
    Page = require('../models/page.js');

router.get("/queryProduct", function (req, res) {
    var product = new Product({
        proName: req.query.proName ? req.query.proName : '',
        price: req.query.price ? req.query.price : '',
        num: req.query.num ? req.query.num : '',
        brandId: req.query.brandId ? req.query.brandId : ''
    })
    var page = new Page({
        page: req.query.page ? parseInt(req.query.page) : 0,
        size: req.query.pageSize ? parseInt(req.query.pageSize) : 10,
    })
    Product.queryProduct(product, page, function (err, data) {
        if (err) return res.send({ "error": 403, "message": "数据库异常！" });
        Product.countProduct(function (err, result) {
            if (err) return res.send({ "error": 403, "message": "数据库异常！" });
            page.count = result.count;
            page.data = data;
         
            res.send(page);
        })
    })
});

router.get("/queryProductDetail", function (req, res) {
    Product.queryProductDetail(req.query.id, function (err, data) {
        if (err) return res.send({ "error": 403, "message": "数据库异常！" });
        res.send(data);
    })
});

module.exports = router;