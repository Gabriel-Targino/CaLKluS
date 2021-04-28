const funcoes = require('../models');
const Create = async (req,res) => {
  const media = await funcoes.create(req.body);
  res.json(media);
}
const View = async(req,res) => {
  const media = await funcoes.view();
  res.json(media);
}
module.exports = {Create,View};



const bcrypt = require("bcrypt");
const salt = 10;
const media = require("../models/index");

const index = async (req, res) => {
  console.log(req.body);
  const medias = await media.create(req.body);
  res.json(medias);
};

const readAll = async (req, res) => {
  const medias = await media.readAll();

  res.json(medias);
};
const login = async(req,res) => {
  const elementos = await media.login(req.body);
  const {senha} = req.body;
  console.log(senha);
  console.log(elementos)
  if(elementos.length == 0){
  }else{
    if(bcrypt.compare(senha,elementos[0].password)){
       req.session.userId = elementos[0].id;
      console.log("chegando aqui, sucesso")
      res.json("Pode Acessar!"); 
    }
  }
};  
const cadastramento = async (req, res) => {
  console.log("OK!");
  const{nome, email, password} = req.body;
  console.log("PASSWORD", password)
  try {
    const senhacrypt = await bcrypt.hash(password, salt);
    console.log("SENHACRYPT", senhacrypt)
    const resultado = await media.cadastro({nome, email, "password":senhacrypt});
    res.json("Você foi cadastrado");
   }
  catch (err){
    console.log("Algo deu errado...");
    console.log(err);
  };
};
const signout = async(req,res) => {
  req.session.destroy();
};

module.exports = { index, readAll, login, cadastramento, signout};