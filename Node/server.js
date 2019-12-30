var express = require("express");
var server = express();

var Datastore = require('nedb'); 
var Users = new Datastore({ filename: __dirname+"/users.db", autoload: true });

var bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended:true}))

server.use(express.static(__dirname+"/game"));



server.get("/hiscore", function(req, res){
    Users.findOne({"score":{$gt:100}}, function(err, doc){
        if(!err && doc!=null){
            res.end(JSON.stringify(doc));
        }
        else{
            res.end("No score that is greater than 100.");
        }
    });
});

server.post("/save", function(req, res){
    Users.findOne({"name":req.body.name}, function(err, doc){
        if(err==null){
            if(doc!=null){
                 //update
                 Users.update({"name":req.body.name},req.body,{multi:true}, function(err,doc){
                     if(err==null){
                      res.end("Saved!");
                     }
                 });
            }else{ //insert
              //req.query.score = parseInt(req.query.score);
               
              Users.insert(req.body, function(err, doc){
                  if(err==null){
                   res.end("Saved!");
                  }else{
                   res.end("Error!");  
                  }
              });  
            }
        }
   });
});


server.get("/save", function(req, res){
    console.log("Called:"+req.query.name);
     Users.findOne({"name":req.query.name}, function(err, doc){
        
          if(err==null){
              if(doc!=null){
                   //update
                   Users.update({"name":req.query.name},req.query,{multi:true}, function(err,doc){
                       if(err==null){
                        res.end("Saved!");
                       }
                   });
              }else{ //insert
                //req.query.score = parseInt(req.query.score);
                 
                Users.insert(req.query, function(err, doc){
                //Users.insert({"name":"abc"}, function(err, doc){
                    if(err==null){
                     res.end("Saved!");
                    }else{
                     res.end("Error!");  
                    }
                });  
              }
          }
     });
     
  
});


server.listen(80);
console.log("Web Server is running on port 80.");
