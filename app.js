const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", () =>
  console.log("conntected")
);

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
// // Document
// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit",
// });

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("person", personSchema);

const mango = new Fruit({
  name: "pineapple",
  score: 6,
  review: "nice fruit",
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}, (err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("mango added");
  }
})

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save()
// ############################

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   Score: 3,
//   review: "Too sour for me",
// });

// const banana = new Fruit({
//   name: "banana",
//   score: 3,
//   review: "Weird texture",
// });

// insertMany - takes 2 parameters : an array of objects that match the schema you connected to and a callback function

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully saved all the fruits to fruitsDB");
//   }
// });

// ###############################
// ############ DATA VALIDATION ############

// const fruitSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     Here we set required to true.
//     when a new piece of data is being added and they didn't add a name, the message renders, tho this part is optional.
//     required: [true, "Please check your data entry, no name specified!"],
//   },
//   rating: {
//     type: Number,
//     min: 1,
//     max: 10,
//   },
//   review: String,
// });

// const Fruit = mongoose.model("Fruit", fruitSchema);
// // Document
// const fruit = new Fruit({
//   rating: 10,
//   review: "yummy",
// });

// fruit.save();

// #########################

// Reading from your database
// find() - takes 2 paramters : err and whatever it finds back(wecan call it anything we want)
// outputs will be put into an array
// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(fruits);
//     fruits.forEach((sweet) => {
//       console.log(sweet.name);
//     });

//     mongoose.connection.close();
//   }
// });

// ############### UPDATE AND DELETE ################

// Fruit.updateOne({_id: "63aae8a9c22bb72c073751bc"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully update the doucment.");
//   }
// });

// Fruit.deleteOne({_id: "63aae8a9c22bb72c073751bc" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted succeessfully");
//   }
// })

// ######### PRACTICE #############

// Person.deleteOne({name: "John"}, (err)=>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("John was deleted");
//   }
// })
