/**
 * This file deals with all routes relating to user related functionality. This is a harder file that practice.js so 
 * start with that one if you haven't already. 
 * 
 * Context: Pretend that you have a social media site that you are coding, and you want people to be able to make user accounts
 * for themself. The following is your (naive) implementation. 
 * 
 * In this file, you have access to 
 * a variable called usersDB, which is a list of JSON objects each containing information on their individual user. Each user
 * is represented as a JSON object with 4 attributes:
 *          - "email" (string) denotes the registered email related to the user's login account
 *          - "password" (string) denotes the registered password related to the user's login account
 *          - "name" (string) denotes the display name that the user would like be called once they login
 *          - "age" (number - int) denotes the display age of the registed user 
 * 
 * The usersDB is a local "mock" of a database, and contains all information that you will be updating with these 
 * routes. Feel free to add more information, or play with the attributes if you'd like. Just remember that since this is
 * a local variable, if you call different routes on it and update its information, the changes will not save between route calls.
 * That would require something with storage capacity like cookies or a database, which we're not doing just yet. 
 * 
 * With the routes, you'll be doing a simple mock of retrieval, registration, removal, and update of users in the usersDB. I 
 * require at least 7 routes. Route information and expectation can be found next to each route below. The first one I've
 * given to use as an example. 
 * 
 * Make sure to import your validation middleware into this file for usage. 
 * 
 * Good luck!
 * 
 * Make sure to export the router at the end of the file, so it can be called in app.js for route
 * comparmentalization. 
 */

var express = require('express');
var router = express.Router();

// your mock DB for this file - contains all information regarding all registered users on your site 
var usersDB = [
  {"email": "abc@ucsd.edu", "password": "testing123", "name": "Jane Doe", "age": 20}, 
  {"email": "google@ucsd.edu", "password": "omg123", "name": "John Doe", "age": 29}
]

/**
 * Route #1 (EXAMPLE): GET Route with pathway '/'
 * 
 * @description If this route is called, it should return all user information in the database. 
 * 
 * @requestBody This route does not expect any information from its request body. 
 * 
 * @response - Send status code 200 with an attached json containing a list of all user information in the database. If the database is
 *             empty, send an empty list.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */
router.get('/', function(req, res, next) {
  try{
    res.status(200).json({msg: usersDB});
  } catch(err){
    res.status(500).json({msg: err});
  }
});





/**
 * Route #2: GET Route with pathway '/getNames'
 * 
 * @description If this route is called, it should a list of all the names in the database. 
 * 
 * @requestBody This route does not expect any information from its request body. 
 * 
 * @response - Send status code 200 with an attached json containing a list of all names in the database. If the database is
 *             empty, send an empty list.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */

 // TO - DO : Declare your route here





 /**
 * Route #3: POST Route with pathway '/addUser'
 * 
 * @description If this route is called, it adds a user (and their information) as a new entry in the database, ONLY if the 
 *              the user does not already exist with the database. Specifically, a user is defined to exist with the database if
 *              the email specified already exists within the database (i.e, no duplicate emails!). In its response,
 *              it should return a list of all users now in the current database (this should include the added user). 
 * 
 * @requestBody This route expects the following information in the request body:
  *          - "email" (string) 
  *          - "password" (string) 
  *          - "name" (string) 
  *          - "age" (number - int)
 *  
 * 
 * @response - Send status code 200 with an attached json containing a list of all users in the database. If the database is
 *             empty, send an empty list.
 *           - Send status code 400 with an error message if the request body is missing any information or any attributes have
 *             the wrong type (i.e., got a string when I expected a number) ---- HINT: USE YOUR VALIDATION MIDDLEWARE HERE
 *           - Send status code 409 with an error message "Duplicate user" if the email specified already exists within the database.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */

// TO - DO : Declare your route here



/**
 * Route #4: DELETE Route with pathway '/removeUser'
 * 
 * @description If this route is called, it removes a user (and their information) from the database, ONLY if the 
 *              the user exists with the database. Specifically, a user is defined to exist with the database if
 *              the email specified exists within the database. In its response,
 *              it should return a list of all users now in the current database (this should not include the removed user). 
 * 
 * @requestBody This route expects the following information in the request body:
 *            - "email" (string) 
 *  
 * 
 * @response - Send status code 200 with an attached json containing a list of all users in the database. If the database is
 *             empty, send an empty list.
 *           - Send status code 400 with an error message if the request body is missing any information or any attributes have
 *             the wrong type (i.e., got a string when I expected a number) ---- HINT: USE YOUR VALIDATION MIDDLEWARE HERE
 *           - Send status code 409 with an error message "Invalid email" if the email specified does not exist within the datbase.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */


// TO - DO : Declare your route here





  /**
 * Route #5: PUT Route with pathway '/updateUser'
 * 
 * @description If this route is called, it updates an existing user's information in the database, ONLY if the 
 *              the user exists with the database. Specifically, a user is defined to exist with the database if
 *              the email specified exists within the database. In its response,
 *              it should return a list of all users now in the current database (this should include the user with their updated information).
 * 
 *              Note: An email is required to figure out which user to update. Any other attributes given in the request body,
 *                    will be the updated information that shall be put for the user's entry. 
 * 
 *              As an example, if I want to update Jane Doe's age in the database, in my request body I'd sent her "email" 
 *              and her updated "age". If I wanted more things updated, I'd send those attributes as well in the request. 
 * 
 * @requestBody This route expects the following information in the request body:
 *            - "email" (string)
 *            - Any attributes that wish to be updated
 *  
 * 
 * @response - Send status code 200 with an attached json containing a list of all users in the database. If the database is
 *             empty, send an empty list.
 *           - Send status code 400 with an error message if the request body is missing any information or any attributes have
 *             the wrong type (i.e., got a string when I expected a number) ---- HINT: USE YOUR VALIDATION MIDDLEWARE HERE
 *           - Send status code 409 with an error message "Invalid email" if the email specified does not exist within the datbase.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */


// TO - DO : Declare your route here





 /**
 * Route #6: PUT Route with pathway '/updateUserAge'
 * 
 * @description If this route is called, it updates an existing user's age in the database, ONLY if the 
 *              the user exists with the database. Specifically, a user is defined to exist with the database if
 *              the email specified exists within the database. In its response,
 *              it should return a list of all users now in the current database (this should include the user with their updated information).
 * 
 *              Note: An email is required to figure out which user to update, and an age attribute is required so you know which age
 *              to update it to. 
 * 
 * @requestBody This route expects the following information in the request body:
 *            - "email" (string)
 *            - "age" (Number - int)
 *  
 * 
 * @response - Send status code 200 with an attached json containing a list of all users in the database. If the database is
 *             empty, send an empty list.
 *           - Send status code 400 with an error message if the request body is missing any information or any attributes have
 *             the wrong type (i.e., got a string when I expected a number) ---- HINT: USE YOUR VALIDATION MIDDLEWARE HERE
 *           - Send status code 409 with an error message "Invalid email" if the email specified does not exist within the datbase.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */


// TO - DO : Declare your route here




 

/**
 * Route #7: PUT Route with pathway '/updateUser'
 * 
 * @description If this route is called, it updates an existing user's information in the database, ONLY if the 
 *              the user exists with the database. Specifically, a user is defined to exist with the database if
 *              the email specified exists within the database. In its response,
 *              it should return a list of all users now in the current database (this should include the user with their updated information).
 * 
 *              Note: An email is required to figure out which user to update. Any other attributes given in the request body,
 *                    will be the updated information that shall be put for the user's entry. 
 * 
 *              As an example, if I want to update Jane Doe's age in the database, in my request body I'd sent her "email" 
 *              and her updated "age". If I wanted more things updated, I'd send those attributes as well in the request. 
 * 
 * @requestBody This route expects the following information in the request body:
 *            - "email" (string)
 *            - Any attributes that wish to be updated
 *  
 * 
 * @response - Send status code 200 with an attached json containing a list of all users in the database. If the database is
 *             empty, send an empty list.
 *           - Send status code 400 with an error message if the request body is missing any information or any attributes have
 *             the wrong type (i.e., got a string when I expected a number) ---- HINT: USE YOUR VALIDATION MIDDLEWARE HERE
 *           - Send status code 409 with an error message "Invalid email" if the email specified does not exist within the datbase.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */

// TO - DO : Declare your route here





 /**
 * Route #7: POST Route with pathway '/login'
 * 
 * @description If this route is called, it updates an existing user's information in the database, ONLY if the 
 *              the user exists with the database. Specifically, a user is defined to exist with the database if
 *              the email specified exists within the database. 
 * 
 * 
 * @requestBody This route expects the following information in the request body:
 *            - "email" (string)
 *            - "password" (string)
 *  
 * 
 * @response - Send status code 200 with an attached json containing the associated user's information. 
 *           - Send status code 400 with an error message if the request body is missing any information or any attributes have
 *             the wrong type (i.e., got a string when I expected a number) ---- HINT: USE YOUR VALIDATION MIDDLEWARE HERE
 *           - Send status code 403 with an error message "Invalid login" if the email/password specified does not match within the datbase. Return
 *             this as well if the database is empty.
 *           - Send status code 500 with a corresponding error message in its attached json if the request is unable to be
 *             processed for whatever reason. 
 */


// TO - DO : Declare your route here






/***
 * Congrats on finishing and making it this far! At this point, feel free to update this file as you wish and be 
 * as creative as you want with it. 
 * 
 * Possible Extension: 
 * 
 *      - Allow for a user to update their name in the database 
 * 
 *      - Retrieve all users that are 18+ in your database. Similarly, retrieve all users who are less than 18 in your database.
 * 
 *      - Have ids associated with each user, and create a new attribute called "frineds" that is a list of all friends a user has 
 *        on your site (should be a list of the friend's ids for more efficient storage). 
 * 
 *      - Improve your addUser route by only adding in users with what you deem are "strong" passwords. 
 * 
 *      - Experiment with the other HTTP response codes and see when would be a good time to add them in
 */

module.exports = router;
