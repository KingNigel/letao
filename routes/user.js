var express = require('express'),
    router = express.Router(),
    crypto = require('crypto'),
    User = require('../models/user.js');

router.post("/register", function (req, res) {
  if (!req.body.username) res.send({ "error": 403, "message": "用户名未填写！" });
  if (!req.body.password) res.send({ "error": 403, "message": "密码未填写！" });
  if (!req.body.mobile) res.send({ "error": 403, "message": "用户手机号未填写！" });
  //密码加密
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  var newUser = new User({
    username: req.body.username,
    password: password,
    mobile: req.body.mobile,
    isDelete: 1,
  });

  User.getUserByName(req.body.username, function (err, result) {
    if (err) return res.send({ "error": 403, "message": "数据库异常！" });
    if (result.length > 0) return res.send({ "error": 403, "message": "用户名已经存在!!!" });
    else {
      User.getUserByMobile(req.body.mobile, function (err, result) {
        console.log(result);
        if (err) return res.send({ "error": 403, "message": "数据库异常！" });
        if (result.length > 0) return res.send({ "error": 403, "message": "手机号已注册过!!!" });
        else {
          User.addUser(newUser, function (err, data) {
            if (err) return res.send({ "error": 403, "message": "数据库异常！" });
            newUser.id = data.insertId;
            req.session.user = newUser;
            res.send({ "success": true });
          })
        }
      });
    }
  });
});

router.post("/login", function (req, res) {
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');
  User.getUserByName(req.body.username, function (err, result) {
    if (!result) return res.send({ "error": 403, "message": "用户名不存在! " });
    if (result.password != password) return res.send({ "error": 403, "message": "密码错误！" });
    
    req.session.user = result;
    console.log(req.session.user);
    res.send({ "success": true });
  });
});

router.get("/logout",function(req,res) {
    req.session.user=null;
    res.send({ "success": true });
});
router.get("/updatePassword",function(req,res) {
  var md5 = crypto.createHash('md5');
  var oldPassword = md5.update(req.body.oldPassword).digest('base64');
  var newPassword = md5.update(req.body.newPassword).digest('base64');
  var id=req.session.user.id;
  User.getUserById(id, function (err, result) {
    if (result.password != oldPassword) res.send({ "error": 403, "message": "密码错误!" });
    User.updatePassword(id,newPassword,function(err, data){
      if (err) return res.send({ "error": 403, "message": "数据库异常!" });
      res.send({ "success": true });
    })
  });
});
module.exports = router;
