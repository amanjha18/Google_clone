// IN THIS FILE I CREATED DATABASE AND INSERT DATA FROM JSON.

var fs=require("fs")

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "amanjha",
  database : "Google"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS Google", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

con.connect(function(err) {
    if(!err){
        let data = fs.readFileSync("data.json")   
        data = data.toString();
        Data = JSON.parse(data)
        for(var i of Data){
            console.log(i.Category)
            con.query('insert into Trend(Categories) values("'+i.Category+'");',function(err,result){
                if(err){console.log(err)}
                else{console.log('done!')}
            })
        }
    
  }
  else{
      console.log('it is also working')
  }
  
});

