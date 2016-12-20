var db = require('./db.js');


function User(user) {
	this.id=user.id;
	this.username = user.username;
	this.password = user.password;
	this.mobile = user.mobile;
	this.isDelete=user.isDelete;
};

User.getUserByName = function (username, callback) {
	var selectSql = 'select * from user where username = ?';
	db.query(selectSql, [username], function (err, result) {
		if (err) {
			return callback(err);
		}
		var data=result;
		callback(err, data);
	});
};
User.getUserByMobile = function (mobile, callback) {
	var selectSql = 'select * from user where mobile = ?';
	db.query(selectSql, [mobile], function (err, result) {
		if (err) {
			return callback(err);
		}
		var data=result;
		callback(err, data);
	});
};
User.addUser= function (user, callback) {
	//var id=uuid.v1();
	var selectSql = 'insert into user (id,username,password,mobile,isDelete)  values (null,?,?,?,?)';

	db.query(selectSql, [user.username,user.password,user.mobile,user.isDelete], function (err, result) {
		if (err) {
			//console.dir(err);
			//console.log('addUser err:' + err);
			return callback(err);
		}
		//console.log('Add User success');
		callback(err, result);
	});
};


module.exports = User;
