const{conn} = require('../db');
async function create(data){
  const sql = `INSERT INTO media (valor1,valor2,resultado) VALUES (?,?,?)`;
  const {valor1,valor2,resultado} = data;
  const db = await conn();
  const resultado2 = await db.run(sql,[valor1,valor2,resultado])
  return resultado2
}
async function view(){
  const sql = `SELECT * FROM media`;
  const db = await conn();
  const resultado = await db.all(sql);
  return resultado;
}

async function login(data){
  const sql = `
  SELECT * FROM usuarios WHERE email= ?`
  const{email} = data;
  const db = await conn();
  const resultado = await db.all(sql,[email]);
 return resultado
}

async function cadastro(values) {
  console.log("Cadastre-se");
  const{nome, email, password} = values;
  const sql = `
  INSERT INTO usuarios (apelido, email, password) VALUES (?,?,?)`;
  const db = await conn();
  const resultados = await db.run(sql, [nome, email, password]);
  console.log(await db.all("SELECT * FROM usuarios"))
};


module.exports = {create,view, login, cadastro};


