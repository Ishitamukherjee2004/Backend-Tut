// DAY2 //

// var fs = require('fs');
// var os = require('os');
// const notes = require('./notes.js');
// var age = notes.age;

// var _ = require('lodash');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', "hii" + user.username + '\n',()=>{
//     console.log("File is created Successfully");
// })

// console.log(notes);
// console.log(age);

// var data = ['person', 'person', 2,3,4,5, 'name', 'age'];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString(data));








//DAY 3 //  

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
//  const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
//  console.log(jsonObject.name); //Output: John

//  const objectToConvert = { 
//     name: "Alice", 
//     age: 25 
// };
//  const jsonStringified = JSON.stringify(objectToConvert); // Convert object
//  console.log(jsonStringified); // Output: {"name": "Alice", "age":25}

const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
require('dotenv').config();

const MenuItem = require('./models/MenuItem');

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes');
app.use('/MenuItem', menuRoutes);
app.get('/', (req, res) => {
  res.send(`
    <h2>Welcome to the Backend Tutorial API</h2>
    <p>Available Routes:</p>
    <ul>
      <li><a href="/MenuItem">/MenuItem</a></li>
      <li><a href="/person">/persons</a></li>
      <!-- Add more routes here -->
    </ul>
  `);
});

// app.post('/Person', async(req, res)=>{
//     // console.log("Person is inserted");
    
//     try{
//         const data =req.body;
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         console.log('data saved', response);
//         res.status(200).json(response);
        
//         }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Internal Server Error"});
//     }
// })

// // GET METHOD TO GET THE PERSON DATA
// app.get('/Person', async(req, res)=>{
//     try{
//         const data = await Person.find();
//         console.log('data fetched ');
//         res.status(200).json(data);
        
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Data cannot be fetched"});

//     }
// })

// app.get('/Person/:workType', async(req, res)=>{
//     try{
//         const workType = req.params.workType;
//         if(workType =='chef' || workType=='manager' || workType == 'waiter'){
//             const response = await Person.find({work: workType})
//             console.log("Person is fetched successfullly");
//             res.status(200).json(response);
            
//         }else{
//             res.status(404).json({error: "Invalid Credentials"});
//         }
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Internal Server error"});
        
//     }
// })

// app.post('/MenuItem', async(req, res)=>{
//     try{
//         const menu = req.body;
//         const newMenuItem = new MenuItem(menu);
//         const response = await newMenuItem.save();
//         console.log("Menu is inserted");
//         res.status(200).json(menu);

//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Internal Server Error"});
//     }
// })
// app.get('/MenuItem', async(req, res)=>{
//     try{
//         const menu = await MenuItem.find();
//         console.log("Menu is fetched");
//         res.status(200).json(menu);
        
//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Menu cannot be fetched"});
        
//     }
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
    
}); 



