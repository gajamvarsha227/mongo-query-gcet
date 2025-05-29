
db.employees.insertMany([
    {
      name: "Brian C",
      email: "brian@gmail.com",
      department: "IT",
      salary: 2256,
      location: ["FL", "TX"],
      date: Date(),
    },
    {
      name: "Chastity J",
      email: "chastity@gmail.com",
      department: "HR",
      salary: 4556,
      location: ["AZ", "TX"],
      date: Date(),
    },
  ]);

  //1st ans
  db.employees.updateOne({ name:"John"},{$set:{email:"john@outlook.com"}});

  //2nd ans
  db.employees.find().sort({salary:-1}).limit(3);

  //3rd ans
  db.employees.updateMany({},{$inc:{salary:1000}});

  //4th ans
  db.employees.insertOne({
    name:"Tarun",
    email:"tarun@example.com",
    department:"admin",
    salary:10000,
    location:["NY"],
    date:Date(),
  });

  //5th ans
  db.employees.deleteMany({department:"admin"});