express = require("express");
app = express();


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", )

app.listen(3000, ()=>{
    console.log("server is running at port 3000!");
});
