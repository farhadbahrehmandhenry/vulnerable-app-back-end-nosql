const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_URI;

var dbCollection;

function connectDb() {
    try {
      MongoClient.connect(
        url, 
        {useUnifiedTopology: true}, 
        function(err, client) {
          if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
          }
          console.log('mongoDb Connected...');
          dbCollection = client.db("vulnerable").collection("users");

          // client.close();
        }
      );
    }
    catch (error) {
      console.log(error)
    }
  }
  
  function getCollection() {
    if (dbCollection) {
      return dbCollection
    }
    else {
      console.log('no collection found');
    }
  }

module.exports = { getCollection, connectDb }
