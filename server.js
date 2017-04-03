var express = require('express');
var app = express();
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', function(req, res){
//     // res.send("<h1>hello world</h1>");
//     res.sendFile(__dirname + '/post page.html');
//     res.send()
// });

 app.get('/postpage.html', function(req, res) {
        res.sendFile(__dirname + "/" + "postpage.html");
     })


app.post('/', function (req, res) {
    res.write("<h1>hdjrgnnello world</h1>");
});

app.listen(3000);
console.log(' listening on port 3000!');
