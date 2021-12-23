const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
//turn on connection to db and server
sequelize.sync({force: false}).then( ()  => {
  app.listen(PORT, () => console.log('Now listening'));
});

/*
Video Acceptance Criteria:
* The walkthrough video must demonstrate how to create the schema from the MySQL shell.
 - mysql -u root -p source db/schema.sql;
 - USE ecommerce_db;
 - quit;
* The walkthrough video must demonstrate how to seed the database from the command line.
- npm run seed
* The walkthrough video must demonstrate how to start the application’s server.
- npm start
* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.
* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.
* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.
*/