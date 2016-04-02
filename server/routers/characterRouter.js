var characterRouter = require('express').Router();
var characterController = require('../controllers/characterController.js');

// Declare routes for our resource endpoints and specify what controller method we're going to use for each
characterRouter.route('/').get(function(req, res) {
  console.log('');
});

characterRouter.route('/').post(characterController.createOne);


characterRouter.route('/').delete(function(req, res) {
  
});

characterRouter.route('/').get(characterController.readAll);

characterRouter.route('/:id').get(characterController.retrieveOne);


characterRouter.route('/:id').put(function(req, res) {
  
});

characterRouter.route('/:id').delete(function(req, res) {
  
});

module.exports = characterRouter;
