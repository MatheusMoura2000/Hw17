const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  
  await Thought.deleteMany({});

  
  await User.deleteMany({});

  
  const users = [
      {
          username: "sophie",
          email: "sophie@gmail.com"
      },
      {
          username: "Matheus",
          email: "Matheus@gmail.com"
      }
  ];

  
  const thoughts = [
      {
          thoughtText: "How many days ago",
          username: "Sophie"
      },
      {
          thoughtText: "How many times do you want me to",
          username: "Matheus"
      }
  ]

 
  await User.collection.insertMany(users);

  
  await Thought.collection.insertMany(thoughts);

  
  console.table(users);
  console.table(thoughts);
  console.info('done');
  process.exit(0);
});