const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.post('/', async(req, res)=>{
    try{
        const menu = req.body;
        const newMenuItem = new MenuItem(menu);
        const response = await newMenuItem.save();
        console.log("Menu is inserted");
        res.status(200).json(menu);

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
}) 
router.get('/', async(req, res)=>{
    try{
        const menu = await MenuItem.find();
        console.log("Menu is fetched");
        res.status(200).json(menu);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Menu cannot be fetched"});
        
    }
})

router.get('/:taste', async(req, res)=>{
      try{
        const tasteType = req.params.taste;
        if(tasteType =='Spicy' || tasteType=='Sweet' || tasteType == 'Sour'){
            const response = await MenuItem.find({taste: tasteType})
            console.log("Menu is fetched successfullly");
            res.status(200).json(response);
            
        }else{
            res.status(404).json({error: "Invalid Credentials"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server error"});
        
    }
})

module.exports = router;