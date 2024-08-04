const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "TaskOn10&11";

MongoClient.connect(url, (error, result) => {
  if (error) {
    console.log("error has occured");
  }
  console.log("All Success");
  const db = result.db(dbName);
  // insert One 2 /////////////////////////////////////////
  // person 1     /////////////////////////////////////////
  db.collection("task")
    .insertOne({
      name: "OmarHifnawy",
      age: 21,
    })
    .then((data) => console.log(data.insertedId))
    .catch((error) => console.log(`Error while insert data: ${error}`));
  // person 2     /////////////////////////////////////////
  db.collection("task")
    .insertOne({
      name: "ahmed abdellah",
      age: 20,
    })
    .then((data) => console.log(`inserted id: ${data.insertedId}`))
    .catch((error) => console.log(`Error while insert data: ${error}`));

  /////////////////////////////////////////////////////////
  //   insertMany 10 => 5 {age: 27} /////////////////////////
  db.collection("task")
    .insertMany([
      { name: "Ali Hassan", age: 27 },
      { name: "Fatima Mohamed", age: 27 },
      { name: "Hassan Ahmed", age: 30 },
      { name: "Layla Ali", age: 27 },
      { name: "Youssef Salah", age: 27 },
      { name: "Sara Mahmoud", age: 23 },
      { name: "Omar Said", age: 27 },
      { name: "Khaled Nabil", age: 28 },
      { name: "Mona Tarek", age: 26 },
      { name: "Rania Fawzi", age: 21 },
    ])
    .then((data) => console.log(`Inserted count: ${data.insertedCount}`))
    .catch((error) => console.log(`Error while insert data: ${error}`));

  /////////////////////////////////////////////////////////
  // find all 27y /////////////////////////////////////////
  db.collection("task")
    .find({ age: 27 })
    .toArray()
    .then((data) => console.log(data))
    .catch((error) => console.log(`Error while find data: ${error}`));

  /////////////////////////////////////////////////////////
  // find 3 presons 27y ///////////////////////////////////
  db.collection("task")
    .find({ age: 27 })
    .limit(3)
    .toArray()
    .then((data) => console.log(data))
    .catch((error) => console.log(`Error while find data: ${error}`));

  /////////////////////////////////////////////////////////
  // updateMany 4 presons name //////////////////////////// not working
  db.collection("task")
    .updateMany({}, { $set: { name: "OmarHifnawy" } }, { limit: 4 })
    .then((data) => console.log(`Modified count: ${data.modifiedCount}`))
    .catch((error) => console.log(`Error while updating data: ${error}`));

  /////////////////////////////////////////////////////////
  // updateMany 4 presons age ///////////////////////////// not working
  db.collection("task")
    .updateMany({}, { $inc: { age: 2 } }, { limit: 4 })
    .then((data) => console.log(`Modified count: ${data.modifiedCount}`))
    .catch((error) => console.log(`Error while updating data: ${error}`));

  /////////////////////////////////////////////////////////
  // updateMany all persons inc 10y ///////////////////////
  db.collection("task")
    .updateMany({}, { $inc: { age: 10 } })
    .then((data) => console.log(`Modified count: ${data.modifiedCount}`))
    .catch((error) => console.log(`Error while updating data: ${error}`));

  /////////////////////////////////////////////////////////
  // deleteMany age: 41 persons ///////////////////////////
  db.collection("task")
    .deleteMany({ age: 41 })
    .then((data) => console.log(`Deleted count: ${data.deletedCount}`))
    .catch((error) => console.log(`Error while deleting data: ${error}`));
});

// [
//   { name: "Ali Ahmed", age: 25 },
//   { name: "Fatima Yusuf", age: 22 },
//   { name: "Hassan Ibrahim", age: 30 },
//   { name: "Layla Khalid", age: 27 },
//   { name: "Omar Tarek", age: 29 },
//   { name: "Sara Mahmoud", age: 23 },
//   { name: "Youssef Samir", age: 24 },
//   { name: "Amina Nabil", age: 26 },
//   { name: "Mona Farid", age: 31 },
//   { name: "Rania Fawzi", age: 21 },
//   { name: "Khaled Ali", age: 28 },
//   { name: "Nadia Ibrahim", age: 27 },
//   { name: "Ibrahim Ali", age: 30 },
//   { name: "Mariam Ahmed", age: 25 },
//   { name: "Ahmed Said", age: 22 },
//   { name: "Jamal Hassan", age: 29 },
//   { name: "Heba Mohsen", age: 24 },
//   { name: "Rami Zaid", age: 26 },
//   { name: "Nour Mahmoud", age: 27 },
//   { name: "Hana Samir", age: 30 },
//   { name: "Omar Rashed", age: 23 },
// ];
