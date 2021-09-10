const router = require("express").Router();
const users = require('../data');

router.get('/users',(req,res)=>{
    res.status(200).send(users);
})

router.get('/users/:userId',(req,res)=>{
    const id=req.params.userId;
    const result = users.filter((user)=>{
        if(user.id==id) return user
    })
    if(result.length){
        res.status(400).send(result[0]);
    }
    else{
        res.status(400).send(`no user with id ${id}`);
    }
})

module.exports=router;