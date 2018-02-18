// Importing Expresss
const express = require('express');
// Starting the app
var app = express();

//HTML Static Page, We are using Middleware , It tell express to use something in a particular way, Here well the node to use public as the main director
app.use(express.static(__dirname + '/public'));

// Root Folder
app.get('/',(req ,res) => {
    
   res.send('Hello World This is root') 
    
});

//This is JASON
app.get('/jason',(req ,res) => {
    
   res.send({
       Aurthor: 'Soham',
       Age: 21
   }); 
    
});

//The About Page
app.get('/aboutuswr',(req ,res) => {
    
   res.render('This is about us without Rendering') 
    
});

//The  Bad  Page
app.get('/bad',(req ,res) => {
    
   res.send({
       ErrorMessage : "Page Not Found"
   }) ;
    
});


//------- Rendering Templates with Data------

// We will be using a handlebar, It used for inserting data on to HTML Pages. It a rendering engine. It is hadlebars view engine for express.

// We will be using a package wrapper called as fbs module, install it from npm install , as a wrapper for handlebar and used it in node.js

app.set('view enginer','hbs');

//The About Page without Dyanamic Values
//app.get('/aboutus',(req ,res) => {
    
  // res.render('aboutus.hbs') 
    
//});

// We want to make the about page dynamic, We will make the h1 content dyanamic


//The About Page with Dyanamic Values
app.get('/aboutus',(req ,res) => {
        
    
        res.render('aboutus.hbs',
            {
            pagetitle : 'About Page',
            currentYear : new Date().getFullYear() });
    
});



//Open app at port 3000
app.listen(3000,() => {
    console.log("Server Running on 3000")
});