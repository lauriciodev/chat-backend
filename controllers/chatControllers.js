const chatMethods = require("../modules/chat");

class chatActions {

  async createChat(req,res){
    const {usuario,mensagen} = req.body;
    const result = await chatMethods.create(usuario,mensagen);

    if(result){
      res.status(200).json({msg:result.msg});
    }else{
      res.status(404).json({msg:"erro ao enviar mensagem"});
    }
  }



  async getChats(req,res){
    const result = await chatMethods.getData();
    if(result){
      res.json(result);
    }else{
      res.status(403).json({msg:"erro ao listar usuarios"});
    }
  }

}


module.exports = new chatActions();
