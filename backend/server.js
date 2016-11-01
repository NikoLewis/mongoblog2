const mongoose = require('mongoose');
const express = require('express');
const app = express();
//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');
//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
db.on('open', () => {
  app.listen(4444, () => {
    console.log('App listening on port 4444');
  });
});