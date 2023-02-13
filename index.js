const express = require("express");
const app = express();
const chat = require("./databases/dataChat");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const cors = require("cors");


app.use(cors());



app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.set("strictQuery",true);
mongoose.connect("mongodb://localhost:27017/chat",{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(() =>{
  console.log("banco de dados conectado com sucesso");
}).catch(erro =>{
  console.log(erro);
});

app.use("/",router);

app.get("/",(req,res) =>{
  res.send("ok");
})


app.listen(3000,(erro) =>{
  console.log("servidor iniciado com sucesso");
})
