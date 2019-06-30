var fs = require("fs");

console.log("开始");

fs.open('input.txt','r+',function(err,fd){
  if(err){
    return console.error(err);
  }
  console.log("文件打开成功"+fd.toString());
});