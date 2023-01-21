const mysql = require("mysql"); 

const con = mysql.createPool({
    connectionLimit:10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME

});


exports.view=(req, res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        connection.query("select * from expense.expense",(err,rows)=>{
            connection.release();
            if(!err){
                
                res.render("home",{rows});
            } else {
                console.log("ERR in listing data "+err);
            }
            

        
        });
        });
};
    