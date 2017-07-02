const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Users').find({
  //   _id: new ObjectID("595890d3797da315dea81465")
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch users', err);
  // });

  db.collection('Users').find().count().then((count) => {
    console.log(`User count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch users', err);
  });
  //db.close();
});
