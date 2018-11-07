var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/Realtor');


function searchByID(zpid, res) {
    // find a property instance from mongodb
    Property.findOne({zpid: zpid}, (err, property) => {
        if (property) {
            res.send(property);
        } else {
            res.send("property not found");
        };
        
    });
}