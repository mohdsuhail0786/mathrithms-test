require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const routes=require('./routes/route');
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT,()=>{
    console.log(`Application is active on PORT :: ${PORT}`);
})