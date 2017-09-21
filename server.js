// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get("/", function(req, res){
  
  var ip = req.headers['x-forwarded-for'].split(",");
  
  var ua = req.headers["user-agent"];
  var uaParseArr = [ua.indexOf("("), ua.indexOf(")")];
  var os = ua.slice(uaParseArr[0]+1, uaParseArr[1]);
  
  var lang = req.headers["accept-language"];
  
  var result = {"ipaddress": ip[0], "language": lang, "software": os};

  res.end(JSON.stringify(result))
})

app.listen(8080);

