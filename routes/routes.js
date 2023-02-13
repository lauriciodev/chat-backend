const express = require("express");
const router = express.Router();
const chatActions = require("../controllers/chatControllers");

//criação de rotas
router.post("/chat", chatActions.createChat);
router.get("/chat", chatActions.getChats);

module.exports = router;


