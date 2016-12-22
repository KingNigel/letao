var db = require('./db.js');


function Product(pro) {
	this.id = pro.id;
	this.proName = pro.proName;
	this.oldPrice = pro.oldPrice;
	this.price = pro.price;
	this.pic = pro.pic;
	this.proDesc = pro.proDesc;
	this.size = pro.size;
	this.statu = pro.statu;
	this.updateTime = pro.updateTime;
	this.num = pro.num;
	this.brandId = pro.brandId;
};

Product.queryProduct = function (product, page, callback) {
	var selectSql = "SELECT id,proName,price,pic,num FROM product WHERE statu=1";
	var param = new Array();
	if (product.proName) {
		selectSql = selectSql + " AND  proName LIKE ? ";
		param[0] = '%'+product.proName+'%';
	}
	if (product.brandId) {
		selectSql = selectSql + " AND  brandId =? ";
		param[param.length] = product.brandId;
	}
	if (product.price) {
		if (product.price == 1) selectSql = selectSql + " ORDER BY price ";
		if (product.price == 2) selectSql = selectSql + " ORDER BY price DESC ";
	}
	else if (product.num) {
		if (product.num == 1) selectSql = selectSql + " ORDER BY num ";
		if (product.num == 2) selectSql = selectSql + " ORDER BY num DESC ";
	}
	selectSql = selectSql + " LIMIT ?,?";
	param[param.length]=(page.page-1)*page.size;
	param[param.length]=page.size;
	console.log(selectSql);
	console.log(param);
	db.query(selectSql, param, function (err, result) {
		if (err) {
			return callback(err);
		}
		var data = result;
		callback(err, data);
	});
};
Product.countProduct = function (callback) {
	var selectSql = 'SELECT count(id) as count FROM product WHERE statu=1';
	db.query(selectSql, function (err, result) {
		if (err) {
			return callback(err);
		}
		var data = result[0];
		callback(err, data);
	});
};
Product.queryProductDetail = function (id, callback) {
	var selectSql = 'SELECT * FROM product WHERE id = ?';
	db.query(selectSql, [id], function (err, result) {
		if (err) {
			return callback(err);
		}
		var data = result[0];
		callback(err, data);
	});
};

module.exports = Product;
