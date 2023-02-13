const mongoose = require("mongoose");
const chat = new mongoose.Schema({
    usuario: {
      type: String,
      required: true,
  },
   mensagen:Array,
  data:{type:Number ,required:true,default:Date.now()},
});

const chatModel = mongoose.model("chats",chat)

module.exports = chatModel;
