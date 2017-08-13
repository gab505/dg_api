let express = require('express');

const app = express();

let port = process.env.PORT || 5000;

app.use(express.static(_dirname + '/public'));

app.get("/", (req, res) => {
    res.send("Please visit DG website");
})

app.listen(port, function(){
    console.log("Server has started");
})