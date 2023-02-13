const chat = require("../databases/dataChat");

class chatMethods {
 
  async create(usuario,mensagem){
    try{
       await chat.create({usuario:usuario,mensagen:mensagem});
       return {msg:"mensagem enviada com sucesso"};
    }catch(erro){
      console.log(erro);
      return false
    }
 } 


 async getData(){
  try{
   const chatData = await chat.find();
   return chatData;
  }catch{
      return false;
  }
 }
  
}

module.exports = new chatMethods();