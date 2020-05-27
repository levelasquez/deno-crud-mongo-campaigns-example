# DENO MONGO CRUD CAMPAIGNS EXAMPLE

A simple example of a CRUD API Rest for Campaigns in Deno

You need to have Docker and Deno installed in order to run the project
Optionally you can install make for running commands

To run mongo just do:

`make mongo` or `docker run --rm -it -p 27017:27017 --name deno mongo:4`

To run the project just do:

`make dev` or `deno run -A --unstable index.js`

The server will running on http://localhost:3000

To run tests just do:

`make test` or `deno test`

There is a postman collection to test the endpoints
