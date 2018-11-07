var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Realtor');


router.get('/', function(req, res) {
    var collection = db.get('propertys');
    collection.find({}, function(err, propertys){
        if (err) throw err;
      	res.json(propertys);
    });
});

router.get('/:id', function(req, res) {
    var collection = db.get('propertys');
    collection.findOne({_id:req.params.id}, function(err, property){
        if(err) throw err;
        res.json(property);
    });
});

router.post('/', function(req, res){
    var collection = db.get('propertys');
    collection.insert({
        Street: req.body.Street,
        City: req.body.City,
        State: req.body.State,
        Status: req.body.Status,
        Type: req.body.Type,
        Bedrooms: req.body.Bedrooms,
        Bathrooms: req.body.Bathrooms,
        Price: req.body.Price,
        BuiltYear: req.body.BuiltYear,
        Size: req.body.Size,    

    }, function(err, property){
        if (err) throw err;
        res.json(property);
    });
});

module.exports = router;