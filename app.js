const express = require("express");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();


app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//static files
app.use(express.static('public'));


//template engine
const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

/*
//mysql 
const con = mysql.createPool({
    connectionLimit:10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME

});
//check dadatbase connection
con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("Connection Success");
})



//router
/*
 app.get('/',(req, res)=>{
res.render('home');
});
*/ 
const routes =require("./server/routes/user");
app.use('/',routes);

//listen port
app.listen(port,()=>{
    console.log("listening port : "+port);
});