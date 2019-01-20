var fs = require("fs");
const fileName = 'pages-list.js';

var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open(fileName, 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }else{
       console.log(fd)
   }
  console.log("文件打开成功！");     
});
