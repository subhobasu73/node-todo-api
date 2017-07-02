const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').insertOne({
  //   test: 'omething to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Subhadeep Basu',
    age: 43,
    location: 'Kolkata'
  }, (err, res) => {
    if (err) {
      return console.log('Unable to insert user.', err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
    console.log(res.ops[0]._id.getTimestamp());
  });

  db.close();
});
