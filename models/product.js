var db = require('./db.js');


function Product(pro) {
	this.id=pro.id;
	this.proName = pro.proName;
	this.oldPrice = pro.oldPrice;
	this.price = pro.price;
	this.pic=pro.pic;
    this.proDesc=pro.proDesc;
    this.size=pro.size;
    this.statu=pro.statu;
    this.updateTime=pro.updateTime;
    this.num=pro.num;
    this.brandId=pro.brandId;
};

Product.queryProduct = function (product, callback) {
	var selectSql = 'select id,proName,price,pic from product where username = ?';
	db.query(selectSql, [username], function (err, result) {
		if (err) {
			return callback(err);
		}
		var data=result;
		callback(err, data);
	});
};
Product.queryProductDetail = function (id, callback) {
	var selectSql = 'SELECT * FROM product WHERE id = ?';
	db.query(selectSql, [id], function (err, result) {
		if (err) {
			return callback(err);
		}
		var data=result;
		callback(err, data);
	});
};

module.exports = Product;
