const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
router.get("/login/:uname&:upwd",(req,res)=>{
	var $uname=req.params.uname
	var $upwd=req.params.upwd
		pool.query("select * from zg_user where uname=? and upwd=?",[$uname,$upwd],(err,result)=>{
				if(err) throw err;
				if(result.length>0){
					res.send("1")
				}else{
					res.send("0")
					}
	});
});
router.get("/login/:uid",(req,res)=>{
		pool.query("select * from zg_user where uid=?",[req.params.uid],(err,result)=>{
				if(err) throw err;
				if(result.length>0){
					res.send(result)
				}else{
					res.send("0")
					}
	});
});
module.exports=router;
