var db = require('./db.js');

function Category(category) {
};
Category.queryTopCategory = function (callback) {
    var selectSql = 'select * from category where isDelete=1';
    db.query(selectSql, function (err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};
Category.querySecondCategory = function (callback) {
    var selectSql = 'select * from brand where isDelete=1';
    db.query(selectSql, function (err, result) {
        if (err) {
            return callback(err);
        }
        var data = result;
        callback(err, data);
    });
};

module.exports = Category;
