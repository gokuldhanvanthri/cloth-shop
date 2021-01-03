Live URL : https://cool-cloths-live.herokuapp.com

Introduction:
E-Commerce application used for shopping cloths

Back-End Technologies used:
1. nodemon - Live reload of the services code.
2. concurrently - Multiple commands concurrently in a single terminal (Starting client and server)
3. heroku - Cloud platform to host the web application.
        > Runs start script of the main package.json - start the server
        > Runs heroku-postbuild after running the build script
4. body-parser - Used to parse the request body to json
5. cors - library to handle cross origin requests.
6. dotenv - Stores the secret keys in webserver
        > .env file is created in the root location to hold the stripe secret key
7. express - framework to build an API server
8. stripe - library to make the payments
9. compression - Compress and gzip the files which are sent from the server


References:
8. https://www.npmjs.com/package/stripe