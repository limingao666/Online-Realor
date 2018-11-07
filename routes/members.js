var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Realtor');


router.get('/', function(req, res) {
    var collection = db.get('members');
    collection.find({}, function(err, members){
        if (err) throw err;
      	res.json(members);
    });
});

router.get('/:id', function(req, res) {
    var collection = db.get('videos');
    collection.findOne({_id:req.params.id}, function(err, video){
        if(err) throw err;
        res.json(video);
    });
});

router.post('/', function(req, res){
    var collection = db.get('members');
    collection.insert({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isAgent: req.body.isAgent

    }, function(err, member){
        if (err) throw err;
        res.json(member);
    });
});

module.exports = router;