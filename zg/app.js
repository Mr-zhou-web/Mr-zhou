const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.listen(3333);
const userRouter=require('./router/user.js');
app.use(bodyParser.urlencoded({
   extended:false
}));
app.use(express.static('public'));
app.use('/user',userRouter);
