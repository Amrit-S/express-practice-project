## Installation 

In the project directory root, you can run:

### `git clone https://github.com/Amrit-S/express-practice-project.git`
### `cd express-practice-project`
### `npm install`

Note: You should only have to run `npm install` one time, and this will automatically download all dependencies for you. 

## Running the Project 

In the project directory root, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will not re-load upon edits. 

If everything is successful, going to [http://localhost:3000](http://localhost:3000) in the browser should display
this on your screen: 

`{"message":"Abandon All Hope Ye Who Enter Here..."}`

## Implementation Instructions 

There are four required, and one optional file for you to touch. 

The three required files are `app.js`, `practice.js`, `validation.js`, and `users.js`. I highly highly recommend you 
implement those files in that order, as they build on each other. I've marked instructions on top of each file,
and have // TO - DO on all parts you need to implement. 

Recall that app.js in the entry point of the backend, and deals with setup, and route comparmentalization. This is where
you want to call the .js files you have declared in your routes folder. 

As a note, you'll notice that practice.js is very easy and straightfoward. This is intentional because I just wanted
you to get comfortable with route construction, and syntax in that file as well have some practice testing your routes. Make sure
to test your routes by feeding the URLs, and also by trying out POSTMAN. POSTMAN is an invaluable tool for testing out your
Express routes, especially for PUT, POST, and DELETE routes. 

The optional file is `explore.js`, and this is a file for you to do whatever you want in. 

## Project Overview

The project is geared to give some practical understanding of how Express routes work utilizing some validation middleware. 
Particularly, the HTTP Protocol (Requests/Responses), JSON objects, and Javascript familiarity. 

If you need a reference, try looking at the [UWEAST](https://github.com/TritonSE/UWEAST-Community-Kitchen/tree/main/backend) project's backend, as the set-up is very very similar. If you're still stuck, Stack Overflow responses tend to be useful, and also you can ask Amrit or anyone else on 
the team. 

## Testing

You can test by calling the URL pathways in the browser (everything should be in terms of local host). 

Alternatively (and honestly you should do this), you can do the same thing but using [https://www.postman.com](POSTMAN). This would give you the additional advantage of being able to format your request body, and get more information out of your responses. 
