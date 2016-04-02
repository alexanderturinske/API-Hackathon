var Character = require('../models/Character.js');
var treeOfLifeData = require('../../data/treeOfLife.json');
var beautify = require('js-beautify').js_beautify,
    fs = require('fs');

// Create our necessary controller methods to perform all needed CRUD actions
exports.createOne = function(req, res) {
  var newCharacter = req.body;
  Character.create(newCharacter, function(err, newCharacter) {
    if (err) {
      return res.json(err);
    }
    res.json(newCharacter);
  });
};

var seedDatabase = function(data) {
  Character.create(data, function(err, newCharacter) {
    if (err) {
      return console.log(err);
    }
  });
};
// seedDatabase(treeOfLifeData);

exports.readAll = function() {
  fs.readFile('foo.js', 'utf8', function (err, data) {
      if (err) {
          throw err;
      }
      console.log(beautify(data, { indent_size: 2 }));
  });
};

exports.retrieveOne = function(req, res) {
  var query = {_id: req.params.id};
  Character.findOne(query, function(err, matchingCharacter) {
    if (err) {
      return res.json(err);
    }
    res.json(matchingCharacter);
  });
};

exports.printAll = function(req, res) {
  Charcter.find({}, function(err, all) {
    if (err) {
      return res.json(err);
    }
    res.json(all);
  });
};