// IN THIS FILE I CREATED API AND USING GET MSInputMethodContext.
var mysql=require("mysql")
var express=require("express")
// var sqlite3=require("sqlite3")
var app=express();
app.use(express.json())
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'amanjha',
    database : 'Google'
});


app.get("/trend/:search",function(req,res){
    let searchfor = req.params.search;
    connection.connect((err) => {
        if(err){
            console.log(err.message);

        } 
        let data = 'SELECT categories FROM Trend WHERE Categories LIKE "'+searchfor+'%" ';
        connection.query(data,(err, result) => {
            if(err){
                return res.send(err)
                console.log(err.message);
            } else{
                return res.send({"status": result})
            }
        })
    })
});
app.listen("8000",()=>{
    console.log("started")
})