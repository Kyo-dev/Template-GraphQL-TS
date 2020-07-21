# Template-GraphQL-TS
TypeScript
Base scheme to start a server with GraphQL

# How to start using it
Download through git clone or just download the project, open terminal and run npm install, this will bring all the necessary modules for its use.

# To start 
Running the npm start command, this will create a dist folder which is read by the browser, remember that browser just understand JS files. 

# Structure:
All the code is located inside the src folder

config => base features to start TS server
class => all classes or objects to be instantiated, can match models or tables depending on the DB as well as their respective methods
graphQL => contains the resolvers and schemas for the server queries, the resolvers consume the objects of the folder class
interfaces => helps ts understand objects
models (optional) => required in Mongoose if SQL is used it is not required
index.ts boots the system