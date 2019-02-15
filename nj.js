var http= require('http');
var fs=require('fs');
//console.log("server started");//making sure
http.createServer(function(req,res) {
fs.readFile('pr1.html',function(err,data)
{res.writeHead(200,{'Content-type':'text/html'});
res.write(data);

res.end();
});
}).listen(9229);
