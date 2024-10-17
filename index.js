const express = require('express');
const app = express();
const path = require('path');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,res){
    res.render("index");
})
app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/faq', (req, res) => {
    res.render('faq');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


app.listen(3000);



