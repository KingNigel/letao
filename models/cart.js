var db = require('./db.js');

function Cart(cart) {
  this.id = cart.id;
  this.userId = cart.userId;
  this.productId = cart.productId;
  this.num = cart.num;
  this.size = cart.size;
  this.isDelete = cart.isDelete;
};

Cart.addCart = function (cart, callback) {
  var selectSql = 'insert into cart (id,userId,productId,num,size,isDelete)  values (null,?,?,?,?,1)';
  db.query(selectSql, [cart.userId, cart.productId, cart.num, cart.size], function (err, result) {
    if (err) {
      return callback(err);
    }
    callback(err, result);
  });
};
Cart.updateCart = function (cart, callback) {
  var delSql = 'UPDATE cart SET num =?,size=? WHERE id=?';
  connection.query(delSql, [cart.num, cart.size, cart.id], function (err, res) {
    if (err) {
      return callback(err);
    }
    callback(err, res);
  });
}
Cart.deleteCart = function (id, callback) {
  var idStr="";
  for(var i=0;i<id.length;i++){
     if(i==0){
        idStr=idStr+id[i];
     }
     else{
       idStr=idStr+","+id[i];
     }
  }
  
  var delSql = "UPDATE cart SET isDelete =0 WHERE id in ("+idStr+")";
  connection.query(delSql,function (err, res) {
    if (err) {
      return callback(err);
    }
    callback(err, res);
  });
}
Cart.queryCart = function (id, callback) {
  var delSql = 'SELECT c.id,c.productId,c.num,c.size,p.proName,p.price,p.pic from cart as c left join product as p on c.productId=p.id where c.userId=?';
  connection.query(delSql, [id], function (err, res) {
    if (err) {
      return callback(err);
    }
    callback(err, res);
  });
}
module.exports = Cart;
