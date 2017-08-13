var express = require('express');

var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(_dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Please visit DG website");
})

app.listen(app.get('port'), function(){
    console.log("Server has started", app.get('port'));
})