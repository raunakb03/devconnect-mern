---first we start with the backend
. make a file server.js and import rxpress in it and create a server
. then make all the routes in the routes->api folder and inside the api folder defind all the routes that you'll be needing in their respective files

    ->users.js
    . in this file first run the validation to check for the data entered by the user
    . then checkif the data already exists in the database
    . then make a new user and hash the password using bcrypt json
    . make a jwt token using tson web token and send it as the response so that the server can take it while authentication 
    . make a middleware that the token passed while ites generation (from users.js) and check if the token with which the user is trying to log in is the same token or not.
    The current token will be passed in the headers with the name of 'x-auth-token'
    .if the token exists only then it will run the next function

    ->auth.js
    . in the auth,js run this middleware before run the callback function in the route
    . if the authentication is successfull only then the user will be able to log in