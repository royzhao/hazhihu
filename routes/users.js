var express = require('express');
var zhihu = require('zhihu');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.find = function(req,res){
    var key = req.param('key');
    console.log("key is :"+key);
//    zhihu.User.getUserByName(key).then(function(user){
//        console.log(user);
//        res.send(user);
//    });
    zhihu.Search.searchContent(key,"content").then(function(content){
        console.log(content);
        res.send(content);
    })
};

module.exports = router;
