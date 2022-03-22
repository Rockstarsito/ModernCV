const express = require('express');
const router = express.Router();

router.get('/designs',(req,res)=>{
    res.render('Designs',{title: 'Designs CV'});
});
router.get('/',(req,res)=>{
    res.render('home',{title: 'Home'});
});
router.get('/contact',(req,res)=>{
    res.render('contact',{title: 'Contact'});
});
module.exports = router;