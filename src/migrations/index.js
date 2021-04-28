const {conn} = require('../db');
async function up(){
  const db = await conn();
  await db.run(`
  CREATE TABLE IF NOT EXISTS media(
    id INTEGER PRIMARY KEY AUTOINCREMENT
    valor1 REAL,
    valor2 REAL,
    resultado REAL
  )
  `)
  const db = await conn();

  await db.run(sql);

  const sql2 = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    senha TEXT
  )
`;
  await db.run(sql2);
}
async function down () {
  const db =  await conn();
  await db.run ('DROP TABLE media');
  const db = await conn();
}
module.exports = {up,down}