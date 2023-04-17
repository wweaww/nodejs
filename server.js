const express = require('express');
const app = express();

// app.use(express.static('bone'));
// app.use(express.static('nodejs'));
//  app.use(express.static('css'));
// app.use(express.static(path.join(__dirname, 'css')));

app.listen(port=8080,function(){
    console.log("포트번호 : " + port);
});

app.get("/",function(req, res){ res.sendFile(__dirname+'/index.html'); });
app.get("/index.html",function(req, res){ res.sendFile(__dirname+'/index.html'); });

app.use("/html", express.static(__dirname+'/html'));
app.use("/image", express.static(__dirname+'/image'));
app.use("/css", express.static(__dirname+'/css'));
app.use("/js", express.static(__dirname+'/js'));

// app.get(css="/css/animation_shadows.css",function(req, res){
//     res.sendFile(__dirname+css);
// });

// exports.area = function (width) { return width * width; };
// exports.perimeter = function (width) { return 4 * width; };
// console.log(exports.area(100));
// console.log(exports.perimeter(100));
// module.exports = {
//     area : function (width) { return width * width; },
//     perimeter : function (width) { return 4 * width; }
// }

// setTimeout(function(){
//     console.log(1+" : "+module.exports.area(100));
// }, 10000);
// console.log(2+" : "+module.exports.perimeter(100));
// console.log(__dirname+'/css');

const fs = require('fs');
var forders = [];
var i = 0;
const inspectionFindFile = (destPath) => {
    try {    
       fs.readdirSync(destPath, { withFileTypes: true }).forEach((file) => {
             const path = `${destPath}/${file.name}`;
             if (file.isDirectory()) {
                 inspectionFindFile(path);
                 forders[i] = path;
             } else {
                 console.log("파일 명 : "+file.name);
             }
          });
     } catch(err) {
         return alert(err);
     }
 };
 
 inspectionFindFile("C:\\Users\\zenit\\OneDrive\\바탕 화면\\code\\bone\\nodejs\\html");