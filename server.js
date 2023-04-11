const express = require('express');
const app = express();

// app.use(express.static('bone'));
// app.use(express.static('nodejs'));
//  app.use(express.static('css'));
// app.use(express.static(path.join(__dirname, 'css')));

app.listen(port=8080,function(){
    console.log("포트번호 : " + port);
});

app.get("/write",function(req, res){
    res.sendFile(__dirname+'/html/Write.html');
});

app.get("/",function(req, res){
    res.sendFile(__dirname+'/index.html');
});
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