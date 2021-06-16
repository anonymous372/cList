const express = require('express');
const router = express.Router();

const Contact= require('../model/contact');

router.get('/contacts', (req,res,next)=>{
    // res.send('Retrieving Contact List');
    Contact.find(function(err,contacts){
       return res.json(contacts);
    });
});

//adding contact
router.post('/contact', (req,res,next)=>{
    let newContact = new Contact({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    });
    newContact.save((err,contact)=>{
        if(err)
            return res.json({msg: 'Failed to add Contact'});
        else
            return res.json({msg: 'Contact added'});
    });
});

// deleting contact
router.delete('/contact/:id', (req,res,next)=>{
    Contact.remove({_id:req.params.id},function(err,result){
        if(err)
            return res.json(err);
        else
            return res.json(result);
    });
});

module.exports = router;