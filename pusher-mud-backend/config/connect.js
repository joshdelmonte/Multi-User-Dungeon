const mongoose = require('mongoose');
//This will apply to the .env file
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://Josh:mud123@cluster0.q00t495.mongodb.net:27017/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
