const express = require('express');
const router = express.Router();
const person = require('../models/Person');
router.post('/', async(req, res)=>{
    // console.log("Person is inserted");
    
    try{
        const data =req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data saved', response);
        res.status(200).json(response);
        
        }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})

router.get('/', async(req, res)=>{
    try{
        const data = await person.find();
        console.log('data fetched ');
        res.status(200).json(data);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Data cannot be fetched"});

    }
})

router.get('/:workType', async(req, res)=>{
    try{
        const workType = req.params.workType;
        if(workType =='chef' || workType=='manager' || workType == 'waiter'){
            const response = await person.find({work: workType})
            console.log("Person is fetched successfullly");
            res.status(200).json(response);
            
        }else{
            res.status(404).json({error: "Invalid Credentials"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server error"});
        
    }
})


router.put('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true, // Return the updated document
            runValidators: true, // Run Mongoose validation

        })
        if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

        console.log("Data updated");
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
        
    }
})

router.delete('/:id', async(req, res)=>{
    try{
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log("Data deleted");
    res.status(200).json({ message: "Person deleted successfully" });

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});

    }
})

module.exports = router;