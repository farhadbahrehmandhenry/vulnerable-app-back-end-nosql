const monfodb = require('mongodb');
const MongoClient = monfodb.MongoClient();

MongoClient.connect(
  'mongodb+srv://uers_2:BKQXPDJ0GgXhjvs1@cluster0.zj6qt.mongodb.net/<dbname>?retryWrites=true&w=majority'
  )
  .then(result => {
    console.log('connected!')
  })
  .catch(err => {
    console.log(err)
  });