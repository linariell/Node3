const express=require("express");
const app=express();

app.use(express.static(__dirname + "\\"));
app.use("/",function(request,response) {
    response.sendFile("index.html")
});
app.listen(3005);
console.log('Сервер работает');