var http = require("http");

var queryString = require("querystring");

http
  .createServer(function (req, res) {
    var postDate = "";
    req.setEncoding("utf8");
    req.on("data", function (chunk) {
      postDate += chunk;
    });

    req.on("end", function () {
      res.end(postDate);
    });
  })
  .listen(8080);
console.log(`服务器启动成功`);
