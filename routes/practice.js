/**
 * Consider this a very simple practice file that will just give you some very basic practice with making and 
 * especially testing routes. Try testing locally by giving the URL to your own browser. After you're comfortable with that,
 * try using POSTMAN to do the same testing. POSTMAN is a service people use to make requests to your route, and are 
 * very useful for testing more involved more complicated POST, PUT, and DELETE routes. 
 * 
 * Do this file before users.js since that one has much more complexity going on in terms of expectations and general 
 * JavaScript/JSON usage. 
 * 
 * Make sure to export the router at the end of the file, so it can be called in app.js for route
 * comparmentalization. 
 */

var express = require('express');
var router = express.Router();

/**
 * GET Route with pathway '/get' 
 * 
 * Returns the string "GET is working" to the user with a status 200. 
 */
router.get('/', function(req, res, next) {

});

/**
 * PUT Route with pathway '/put' 
 * 
 * Returns the string "PUT is working" to the user with a status 200. 
 */

 // TO-DO: Add your route here

 /**
 * POST Route with pathway '/post' 
 * 
 * Returns the string "POST is working" to the user with a status 200. 
 */

 // TO-DO: Add your route here


/**
 * DELETE Route with pathway '/delete' 
 * 
 * Returns the string "DELETE is working" to the user with a status 200. 
 */

 // TO-DO: Add your route here

module.exports = router;
